<script>
  import { max, min } from "d3-array";
  import { format } from "d3-format";
  import { scaleLinear } from "d3-scale";
  import { draw } from "svelte/transition";
  import { expoInOut, circOut } from "svelte/easing";
  import { animationDuration, errorMetrics, mobile } from "../../store";

  // export const errorMetrics = [{ epoch: 0, loss: 0, accuracy: 0 }];

  let points = [{ x: 0, y: 0 }];

  // $: console.log("error", $errorMetrics);

  // const initialCount = points.length;
  const initialCount = $errorMetrics.length;

  let outerHeight = 300;
  let outerWidth = 300;

  let margin = $mobile
    ? {
        top: 25,
        bottom: 5,
        left: 20,
        right: 0,
      }
    : {
        top: 25,
        bottom: 5,
        left: 55,
        right: 0,
      };

  const formatter = format(".0%");

  $: width = outerWidth - margin.left - margin.right;
  $: height = outerHeight - margin.top - margin.bottom;

  $: xScale = scaleLinear()
    .rangeRound([margin.left, width - margin.right])
    .domain([
      0,
      max($errorMetrics, (d) => d.x) * 1.5 < 5
        ? 5
        : max($errorMetrics, (d) => d.x) * 1.1,
    ]);

  $: yScale = scaleLinear()
    .rangeRound([height - margin.bottom, margin.top])
    .domain([0, 100]);

  $: path = `M${xScale($errorMetrics[0].x)},${yScale($errorMetrics[0].y)}
	${$errorMetrics
    .slice(1, initialCount)
    .map((p) => `L${xScale(p.x)},${yScale(p.y)}`)
    .join(" ")}`;

  // $: console.log("path", path);
  function addPoint() {
    const randomPoint = {
      x: $errorMetrics.length,
      y: 10 + Math.floor(Math.random() * 20),
    };
    $errorMetrics = [...$errorMetrics, randomPoint];
  }
</script>

<!-- <button on:click={addPoint}> Add Point </button> -->
<div
  id="stackedrect-holder"
  bind:offsetWidth={outerWidth}
  bind:offsetHeight={outerHeight}
>
  <svg width={outerWidth} height={outerHeight}>
    <line
      class="axis-line"
      x1={margin.left}
      x2={width - margin.right}
      y1={height - margin.bottom}
      y2={height - margin.bottom}
    />
    <line
      class="axis-line"
      x1={margin.left}
      x2={margin.left}
      y1={margin.top}
      y2={height - margin.bottom}
    />
    <!-- x-ticks -->
    {#each xScale.ticks() as tick}
      {#if tick % 1 == 0}
        <g transform={`translate(${xScale(tick)} ${height - margin.bottom})`}>
          <!-- <line
            class="axis-tick"
            x1="0"
            x2="0"
            y1={0}
            y2={-height + margin.bottom + margin.top}
            stroke="var(--squidink)"
            stroke-dasharray="4"
          /> -->
          <text class="axis-text" y="10" text-anchor="middle">{tick}</text>
        </g>
      {/if}
    {/each}

    <!-- y-ticks -->
    {#each yScale.ticks() as tick}
      <g transform={`translate(${margin.left} ${yScale(tick) + 0})`}>
        <line
          class="axis-tick"
          x1={0}
          x2={width - margin.right - margin.left}
          y1="0"
          y2="0"
          stroke="var(--squidink)"
          stroke-dasharray="4"
        />
        <text
          class="axis-text"
          x="-2"
          y="0"
          text-anchor="end"
          dominant-baseline="middle">{tick}</text
        >
      </g>
    {/each}

    <path
      transition:draw={{
        duration: $errorMetrics.length * 300,
        delay: 300,
        easing: expoInOut,
      }}
      d={path}
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    {#each $errorMetrics.slice(initialCount) as point, i}
      <path
        transition:draw={{ duration: $animationDuration * 1000 * 2, delay: 0 }}
        d={`M${xScale($errorMetrics[initialCount - 1 + i].x)},${yScale(
          $errorMetrics[initialCount - 1 + i].y
        )} L${xScale(point.x)},${yScale(point.y)}`}
      />
    {/each}

    {#each $errorMetrics as point}
      <circle
        transition:draw={{
          duration: 200,
          delay: $animationDuration * 1000 * 2 - 100,
        }}
        cx={xScale(point.x)}
        cy={yScale(point.y)}
      />
    {/each}

    <!-- axis labels -->
    <text
      class="chart-title"
      y={margin.top / 2}
      x={(width + margin.left) / 2}
      text-anchor="middle">Model Accuracy</text
    >

    {#if !$mobile}
      <text
        class="axis-label"
        y={margin.left / 2}
        x={-(height / 2)}
        text-anchor="middle"
        transform="rotate(-90)">Accuracy (%)</text
      >
    {/if}
    <text
      class="axis-label"
      y={height + margin.bottom + 11}
      x={(width + margin.left) / 2}
      text-anchor="middle">Epoch #</text
    >
  </svg>
</div>

<style>
  path {
    fill: none;
    stroke: var(--squidink);
    stroke-width: 3;
  }
  circle {
    stroke: var(--squidink);
    stroke-width: 2px;
    fill: var(--bg);
    r: 3;
  }

  .axis-label,
  .chart-title {
    font-size: 10px;
  }
  #stackedrect-holder {
    height: 100%;
    width: 100%;
  }
  .axis-line {
    stroke-width: 3;
    stroke: var(--squidink);
    fill: none;
  }
  .axis-tick {
    stroke-width: 1;
    stroke: var(--squidink);
    fill: none;
    opacity: 0.1;
    font-size: 8px;
  }
  .axis-text {
    font-family: Arial;
    font-size: 9px;
  }
</style>
