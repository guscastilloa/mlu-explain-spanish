<script>
  import ScatterBandit from "./ScatterBandit.svelte";
  import SimulationBandit from "./SimulationBandit.svelte";
  import { banditRobot, banditEpsilon, banditQValues } from "../data-store";
  import { MultiArmBandit } from "../MultiArmBandit";
  import { onMount } from "svelte";
  import { select, selectAll } from "d3-selection";

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  // Finds the index of the maximum
  function argMax(array) {
    return array
      .map((x, i) => [x, i])
      .reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  }

  const numX = 1;
  const numY = 1;

  // Keep records at intervals. 
  var episodeCount = 0;
  const maxEpisodes = 200;

  // Define the env
  const env = new MultiArmBandit(
    [2, 5], // Mean value of each arm
    [1.0, 1.0], // STD of each arm
    $banditEpsilon, // Epsilon (exploration)
    0.1 // Alpha (Q-value update step)
  );

  // Reset simulation
  reset();

  function runBanditTrials(numEpisodes) {
    for (let ep = 0; ep < numEpisodes; ep++) {
      // Limit simulation to maxEpisodes
      if(episodeCount > maxEpisodes){
        break;
      }

      let maxDir;
      let q_val = env.runTrial();

      if (q_val[0] > q_val[1]) {
        maxDir = "left";
      } else {
        maxDir = "right";
      }

      const valSum = Math.abs(q_val[0]) + Math.abs(q_val[1]);

      const newVals = $banditQValues.map((state, index) => {
        const vals = {
          episodeNumber: [...Array(state["left"].length + 1).keys()],
          left: [...state["left"], q_val[0]],
          right: [...state["right"], q_val[1]],
          maxDirection: [...state["maxDirection"], maxDir],
          leftWeight: [...state["leftWeight"], q_val[0] / valSum || 0],
          rightWeight: [...state["rightWeight"], q_val[1] / valSum || 0],
        };
        return vals;
      });
      $banditQValues = [...newVals];
      episodeCount ++;
    }
  }

  // Reset the environment
  function reset() {
    // Reset episode count
    episodeCount = 0;

    // Reset env
    env.resetQValues();

    //Reset banditQValues
    banditQValues.set([
      {
        episodeNumber: [],
        left: [],
        right: [],
        maxDirection: [],
        leftWeight: [],
        rightWeight: [],
      },
    ]);

    banditRobot.set({
      x: 0.5,
      y: 0.5,
    });
  }
</script>

<h2 class="body-secondary-header">Choosing Between Two Trees</h2>

<p class="body-text">
  In pursuit of finding bananas, the robot can pick either Tree A or Tree B.
  Tree A produces on average 3 bananas, with a standard deviation of 1 banana,
  and Tree B produces on average 6 bananas, with a standard deviation of 2
  bananas. The goal is to maximize the number of bananas found, however, the
  robot does not know which tree produces more bananas. Since the robot does not
  know which action will lead to greater reward, it must make choices and
  observe the outcomes directly.
</p>
<br /><br />
<p class="body-text">
  This type of reinforcement learning problem resembles that of the <span
    class="bold">multi-armed bandit problem</span
  >. The multi-armed bandit problem is named after the one-armed bandit 
  slot machine, except it has multiple levers or 'arms'. A player must 
  decide, given limited resources, which levers to pull to have the greatest 
  chance of hitting the jackpot. Here, the trees are the 'arms' and the 
  robot must decide how to choose between them.
</p>
<br /><br />
<p class="body-text">
  Observe how the robot makes choices between the two trees and receives the
  reward. This reward information is stored in what is called a Q-value, which
  reflects the expected reward for each action based on the history of
  experienced rewards. In this case, the robot maintains two Q-values: one for
  Tree A and one for Tree B.
</p>
<br /><br />
<p class="body-text">
  Initially, the robot prefers to select Tree A, having known it 
  yields bananas. However, upon occassionally sampling Tree B, it starts 
  reinforcing its decision to select Tree B more, as it is more fruitful. 
  This phenomenon is discussed in the next section.

</p>

<table>
  <tr>
    <th class="table-head">Agent</th>
    <th class="table-head">Environment</th>
    <th class="table-head">State</th>
    <th class="table-head">Actions</th>
    <th class="table-head">Reward</th>
  </tr>
  <tr>
    <td>Robot</td>
    <td>Two Options</td>
    <td>None</td>
    <td>Tree A, Tree B</td>
    <td>Number of Bananas</td>
  </tr>
</table>

<div id="graph-container">
  <div id="simulation-chart">
    <SimulationBandit />
  </div>
  <div id="scatter-chart">
    <ScatterBandit />
  </div>
</div>

<div id="buttons-container">
  <button on:click={() => runBanditTrials(5)}>Select 5 Action</button>
  <button on:click={() => runBanditTrials(10)}>Select 10 Actions</button>
  <button on:click={() => reset()}>Reset</button>
</div>

<style>
  table {
    border-collapse: collapse;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 20px;
    font-family: var(--font-main);
  }

  td,
  th {
    border: 3px solid #dddddd;
    text-align: left;
    padding: 8px;
    color: var(--squid-ink);
  }

  th:nth-child(1) {
    border: 0;
  }

  .table-head {
    font-family: var(--font-heavy);
    color: var(--squid-ink);
    border: none;
  }

  #buttons-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: var(--secondary);
    border: none;
    color: var(--paper);
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 10px 5px;
    cursor: pointer;
    opacity: 0.9;
    width: 150px;
  }

  button:hover {
    outline: 2px solid var(--squidink);
  }

  button:active {
    color: var(--squidink);
  }

  button:visited {
    color: var(--white);
  }

  #graph-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    table {
      max-width: 95%;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 15px;
    }

    #graph-container {
      flex-direction: column;
    }
    button {
      margin: 0px 4px;
    }
  }
</style>
