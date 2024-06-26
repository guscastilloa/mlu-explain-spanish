<script>
  import { onMount } from "svelte";
  import { drag } from "d3-drag";
  import { select, selectAll } from "d3-selection";
  import { extent } from "d3-array";
  import { scaleLinear, scaleOrdinal } from "d3-scale";
  import { scatterData } from "../../datasets";
  import {
    outerHeight,
    outerWidth,
    rectPos,
    margin,
    stackedData,
    wrongly_accepted_A,
    wrongly_accepted_B,
    wrongly_rejected_A,
    wrongly_rejected_B,
  } from "../../store";
  import { arrows } from "../../assets";

  $: width = $outerWidth - $margin.left - $margin.right;
  $: height = $outerHeight - $margin.top - $margin.bottom;

  // scales
  $: xScale = scaleLinear()
    .domain(extent(scatterData.map((d) => d.xPos)))
    .range([$margin.left, width - $margin.right]);

  $: $rectPos = xScale(0.65);

  const dbSize = 10;

  onMount(() => {
    // attack drag event handlers to decision boundary
    select("g.decision-boundary-bar1").call(
      drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
    );
  });

  function dragstarted() {
    select("#dragme").remove();
    select("#dragline").remove();
  }

  function dragged(event, d) {
    // get scaled x-position
    // xPos on our scale
    const xPos = xScale.invert(event.x);
    // ensure x-position in range
    if (xPos <= 0.0 || xPos >= 0.99) {
    } else {
      $rectPos = event.x;
      select("g.decision-boundary-bar1")
        .raise()
        .attr("transform", `translate(${event.x}, ${$margin.top})`);
      // recalculate metrics
      updateStackedRect(xPos);
    }
  }

  function dragended(event, d) {}

  $: updateStackedRect = function (xPos) {
    let selected_data = selectAll("g.data-point1");

    let positive_outcome = selected_data.filter(function (d) {
      return select(this).attr("label") == 1;
    });

    let negative_outcome = selected_data.filter(function (d) {
      return select(this).attr("label") == 0;
    });

    let accepted = selected_data.filter(function (d) {
      return select(this).attr("x") >= xPos;
    });

    let rejected = selected_data.filter(function (d) {
      return select(this).attr("x") < xPos;
    });

    // Wrong accepted
    const wrong_accepted = negative_outcome.filter(function (d) {
      return select(this).attr("x") >= xPos;
    });

    const wrong_accepted_A = wrong_accepted
      .filter(function (d) {
        return select(this).attr("group") == "circle";
      })
      .size();

    const wrong_accepted_B = wrong_accepted
      .filter(function (d) {
        return select(this).attr("group") == "triangle";
      })
      .size();

    // Wrong rejected
    const wrong_rejected = positive_outcome.filter(function (d) {
      return select(this).attr("x") <= xPos;
    });

    const wrong_rejected_A = wrong_rejected
      .filter(function (d) {
        return select(this).attr("group") == "circle";
      })
      .size();

    const wrong_rejected_B = wrong_rejected
      .filter(function (d) {
        return select(this).attr("group") == "triangle";
      })
      .size();

    //   A (right side)
    const accepted_A = accepted
      .filter(function (d) {
        return select(this).attr("group") == "circle";
      })
      .size();

    const rejected_A = rejected
      .filter(function (d) {
        return select(this).attr("group") == "circle";
      })
      .size();

    //   B (left side)
    const rejected_B = rejected
      .filter(function (d) {
        return select(this).attr("group") == "triangle";
      })
      .size();

    const accepted_B = accepted
      .filter(function (d) {
        return select(this).attr("group") == "triangle";
      })
      .size();

    // console.log("accepted circle", accepted_A)
    // console.log("rejected circle", rejected_A)

    //  UPDATE REACTIVE STATE:

    // update for labels in scatter
    $wrongly_rejected_A = wrong_rejected_A;
    $wrongly_rejected_B = wrong_rejected_B;
    $wrongly_accepted_A = wrong_accepted_A;
    $wrongly_accepted_B = wrong_accepted_B;

    // Update the underlying dataset
    stackedData.set([
      {
        xVal: "A",
        Accepted: 30,
        Declined: 20,
      },
      {
        xVal: "A Predicted",
        Accepted: rejected_A, //rect is drawn as diff, so need inverted here
        Declined: accepted_A, //rect is drawn as diff, so need inverted here
      },
      { xVal: "B", Accepted: 10, Declined: 15 },
      {
        xVal: "B Predicted",
        Accepted: rejected_B, //rect is drawn as diff, so need inverted here
        Declined: accepted_B, //rect is drawn as diff, so need inverted here
      },
    ]);
  };

  // reactively update state on rectpos change:
  $: {
    updateStackedRect(xScale.invert($rectPos));
  }
</script>

<!-- left rect -->
<rect
  class="decision-boundary-rect"
  height={height - $margin.bottom - $margin.top}
  width={$rectPos - $margin.left - $margin.right + dbSize}
  x={$margin.left}
  fill="var(--reject)"
  fill-opacity="0.15"
  y={$margin.top}
/>
<!-- right rect -->
<rect
  class="decision-boundary-rect"
  height={height - $margin.bottom - $margin.top}
  width={$outerWidth - $rectPos - $margin.right - $margin.left - dbSize}
  x={$rectPos}
  fill="var(--accept)"
  fill-opacity="0.15"
  y={$margin.top}
/>

<!-- decision boundary -->
<g class="bar1">
  <g
    class="decision-boundary-bar1"
    data-id="decision-boundary-bar1"
    transform="translate({$rectPos},{$margin.top})"
  >
    <!-- boundary line -->
    <rect
      height={height - $margin.bottom - $margin.top}
      width={dbSize}
      fill="#var(--squidink)"
    />

    <!-- right arrow -->
    <g class="arrow-holder" transform={`translate(14 ${10})`}>
      <text
        class="decision-boundary-text"
        x="0"
        y="0"
        font-size="13"
        text-anchor="start"
        dominant-baseline="middle">Classify</text
      >
      <text
        class="decision-boundary-text"
        stroke="var(--white)"
        fill="var(--accept)"
        x="0"
        y="13"
        font-size="13"
        text-anchor="start"
        dominant-baseline="middle">Accepted</text
      >
      <g transform="translate(56 -3)">
        {#each arrows as arrow}
          <path
            d={arrow}
            style={`transform: rotate(00deg) scale(0.5)`}
            stroke="var(--accept)"
            stroke-width="2"
            fill="var(--accept)"
          />
        {/each}
      </g>
    </g>
    <!-- left arrow -->
    <g class="arrow-holder" transform={`translate(-43 ${10})`}>
      <text
        class="decision-boundary-text"
        x="-14"
        y="0"
        font-size="13"
        text-anchor="start"
        dominant-baseline="middle">Classify</text
      >
      <text
        class="decision-boundary-text"
        stroke="var(--white)"
        fill="var(--reject)"
        x="-14"
        y="13"
        font-size="13"
        text-anchor="start"
        dominant-baseline="middle">Rejected</text
      >
      <g transform={`translate(-16 11)`}>
        {#each arrows as arrow}
          <path
            d={arrow}
            style={`transform: rotate(-180deg) scale(0.5)`}
            stroke="var(--reject)"
            stroke-width="2"
            fill="var(--reject)"
          />
        {/each}
      </g>
    </g>
  </g>
</g>

<style>
  .decision-boundary-rect {
    pointer-events: none;
  }
  .decision-boundary-text {
    font-family: var(--font-light);
    text-transform: uppercase;
    stroke-linejoin: round;
    paint-order: stroke fill;
    stroke-width: 3px;
    font-size: 12px;
    color: var(--squidink);
    stroke: var(--white);
  }

  .decision-boundary-bar1 {
    cursor: pointer;
  }
  .arrow-holder {
    display: flex;
  }
</style>
