<script>
  import { onMount } from "svelte";
  import { extent } from "d3-array";
  import { scaleLinear } from "d3-scale";
  import { line, curveBasis } from "d3-shape";
  import { select } from "d3-selection";
  import {
    arrow,
    arrows,
    mluRobot,
    bananaOne,
    bananaThree,
  } from "../assets.js";
  import {
    margin,
    lineRobot,
    lineRobotPath,
    lineQValues,
    lineWidth,
    lineHeight,
  } from "../data-store.js";

  export let numX = 7;
  export let numY = 1;

  $: robotWidth = 20;
  $: robotHeight = 20;
  $: arrowBox = { height: 560, width: 490, x: 105, y: 0 };
  $: rewardBox = { height: 0, width: 0, x: 0, y: 0 };
  $: rewardBox3 = { height: 30, width: 0, x: 0, y: 0 };

  onMount(() => {
    const robotBGSize = select("#agent-g").node().getBoundingClientRect();
    robotWidth = robotBGSize.width;
    robotHeight = robotBGSize.height;
    rewardBox = select("#reward-1").node().getBoundingClientRect();
    rewardBox3 = select("#reward-3").node().getBoundingClientRect();
    arrowBox = select("path.arrow-up").node().getBoundingClientRect();
  });

  const directionMap = { left: 90, right: 270 };

  $: width = $lineWidth * 8;
  $: height = $lineWidth;

  $: {
    console.log("lw", $lineWidth);
  }

  $: cellWidth = width / numX;
  $: cellHeight = height / numY;
  // offset directions for rotated arrows
  $: directionOffset = {
    right: { x: cellWidth / 6, y: arrowBox.width / 2 + 5 },
    left: { x: -cellWidth / 6, y: -arrowBox.width / 2 - 5 },
  };

  // scales
  $: xScale = scaleLinear().domain([0, numX]).range([0, width]);
  $: yScale = scaleLinear().domain([0, numY]).range([0, height]);

  // line generator
  $: robotLine = line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const startRobotPointX = $lineRobot.x;
  const startRobotPointY = $lineRobot.y;
  const rewardArray = [
    [0, 0],
    [7, 0],
  ];
</script>

<svg {width} {height}>
  {#each [..."".padEnd(numX)].map((_, i) => i + 1) as tick}
    <g transform={`translate(${xScale(tick) + 0} ${height - $margin.bottom})`}>
      <!-- svelte-ignore component-name-lowercase -->
      <line
        class="grid-line"
        x1="0"
        x2="0"
        y1="0"
        y2={-height + $margin.bottom + $margin.top}
      />
      <text class="auc-axis-text" y="15" text-anchor="middle">{tick}</text>
    </g>
    <g transform={`translate(${$margin.left} ${yScale(tick) + 0})`}>
      <!-- svelte-ignore component-name-lowercase -->
      <line
        class="grid-line"
        x1="0"
        x2={width - $margin.right - $margin.left}
        y1="0"
        y2="0"
      />
      <text
        class="auc-axis-text"
        y="0"
        text-anchor="end"
        dominant-baseline="middle">{tick}</text
      >
    </g>
  {/each}

  <!-- make arrows	 -->
  {#each $lineQValues as d, i}
    <g
      transform="translate({xScale(Math.floor(i / numY)) +
        cellWidth / 2}, {yScale(i % numY) + cellHeight / 2})"
    >
      {#if rewardArray.some((r) => r.length == [i % numY, Math.floor(i / numY)].length && r.every((value, index) => [Math.floor(i / numY), i % numY][index] == value))}
        {console.log("found rewards at:", [Math.floor(i / numY), i % numY])}
      {:else}
        {console.log("found nothing at:", [Math.floor(i / numY), i % numY])}
        {#each ["left", "right"] as arrowDirection}
          <g
            transform="translate({directionOffset[arrowDirection][
              'x'
            ]}, {directionOffset[arrowDirection]['y']})"
          >
            {#each arrow as ar}
              <path
                d={ar}
                class={`arrow-${arrowDirection} arrow`}
                transform={`rotate(${directionMap[arrowDirection]}) scale(0.05)`}
                stroke={"black"}
                opacity={d.maxDirection[d.maxDirection.length - 1] ==
                arrowDirection
                  ? 1
                  : d[`${arrowDirection}Weight`][d.maxDirection.length - 1]}
              />
            {/each}
          </g>
        {/each}
      {/if}
    </g>
  {/each}
  <path class="agent-line-outline" d={robotLine($lineRobotPath)} />
  <path class="agent-line" d={robotLine($lineRobotPath)} />

  <!-- bananas rewards-->
  <!-- single banana -->
  <g
    id="reward-1"
    transform="translate({xScale(0)}, {yScale(0) + rewardBox.height / 2 - 7.5})"
  >
    <!-- <rect width={rewardBox.width} height={rewardBox.height} fill="red" /> -->
    {#each bananaOne as b}
      <path class="bananaPath" d={b} transform="scale(0.13)" />
    {/each}
  </g>

  <!-- three bananas -->
  <g
    id="reward-3"
    transform="translate({xScale(7)}, {yScale(0) +
      rewardBox3.height / 2 -
      7.5})"
  >
    <!-- <rect width={rewardBox3.width} height={rewardBox3.height} fill="red" /> -->
    {#each bananaThree as b}
      <path class="bananaPath" d={b} style="transform: scale(0.13)" />
    {/each}
  </g>

  <g
    id="agent-g"
    transform="translate({xScale(startRobotPointX) - robotWidth / 2}, {yScale(
      startRobotPointY
    ) -
      robotHeight / 2})"
  >
    <rect class="agent-rect" width={robotWidth} height={robotHeight} />
    <path
      d={mluRobot}
      style="transform: scale(0.1)"
      stroke="white"
      stroke-width="1"
      fill="black"
    />
  </g>
</svg>

<style>
  svg {
    border: 4px solid black;
    /* background-color: white; */
    margin: 20px;
  }

  .arrow-up {
    fill: var(--anchor);
  }
  .arrow-down {
    fill: var(--sky);
  }
  .arrow-right {
    fill: var(--peach);
  }
  .arrow-left {
    fill: var(--magenta);
  }

  .agent-rect {
    fill: var(--bg);
  }

  .agent-rect {
    fill: var(--bg);
  }

  .grid-line {
    stroke-width: 0.5;
    stroke: black;
  }
  path.agent-line-outline {
    fill: none;
    stroke-width: 9;
    stroke: var(--darksquidink);
  }
  path.agent-line {
    fill: none;
    stroke-width: 5.5;
    stroke: var(--mustardyellow);
  }
  .bananaPath {
    stroke-width: 20;
    stroke: var(--darksquidink);
    fill: var(--mustardyellow);
  }
</style>
