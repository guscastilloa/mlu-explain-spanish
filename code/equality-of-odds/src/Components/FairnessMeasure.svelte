<script>
  import Scatter from "./charts/Scatter.svelte";
  import StackedBar from "./charts/StackedBar.svelte";
  import Tab_FPRBalance from "./Tab_FPRBalance.svelte";
  import Tab_FNRBalance from "./Tab_FNRBalance.svelte";
  import Tabs from "./Tabs.svelte";
  import { format } from "d3-format";
  import katexify from "../katexify";
  import FprFnr from "./charts/FprFnr.svelte";

  import {
    mobile,
    wrongly_rejected_A,
    wrongly_rejected_B,
    wrongly_accepted_A,
    wrongly_accepted_B,
  } from "../store";

  $: items = [
    {
      label: $mobile ? "FPR" : "False Positive Error Rate Balance",
      value: 1,
      component: Tab_FPRBalance,
    },
    {
      label: $mobile ? "FNR" : "False Negative Error Rate Balance",
      value: 2,
      component: Tab_FNRBalance,
    },
  ];

  const formatter = format(".2f");

  // wrong accepted = FP
  $: fpr_eq1 = $wrongly_accepted_A / ($wrongly_accepted_A + 20);
  $: fpr_eq2 = $wrongly_accepted_B / ($wrongly_accepted_B + 15);
  $: fpr_eq3 = fpr_eq1 - fpr_eq2;
  // wrong rejected = FN
  $: fnr_eq1 = $wrongly_rejected_A / ($wrongly_rejected_A + 30);
  $: fnr_eq2 = $wrongly_rejected_B / ($wrongly_rejected_B + 10);
  $: fnr_eq3 = fnr_eq1 - fnr_eq2;

  $: tp_A = 30 - $wrongly_accepted_A;
  $: tp_B = 10 - $wrongly_accepted_B;
  $: tn_A = 20 - $wrongly_rejected_A;
  $: tn_B = 15 - $wrongly_rejected_B;
  $: acc_A =
    (tp_A + tn_A) / (tp_A + tn_A + ($wrongly_rejected_A + $wrongly_accepted_A));
  $: acc_B =
    (tp_B + tn_B) / (tp_B + tn_B + ($wrongly_rejected_B + $wrongly_accepted_B));
</script>

<section>
  <p class="body-header">Equalized Odds to measure fairness</p>
  <p class="body-text">
    Using the EO equation, we can derive different metrics to measure the
    fairness of a model. For example, we can look at:
  </p>
  <br />
  <Tabs {items} />
  <br />
  <p class="body-text">
    The metrics above show how fair/unfair the model is by measuring either FPR
    or FNR; but according to EO, we need <span class="highlight">
      both values to be the same
    </span>
    (known as <i>Conditional Procedure Accuracy Equality</i>) while
    <span class="highlight"
      >also achieving a certain predictive performance</span
    >
    with the model.
    <br />
    <br />
    Have a look at the beeswarm plot below. It shows how the predictions of a model
    change when the probability threshold (the slider) is moved.
    <br />
    <br />
    Try to find a probability threshold that results in 0 FPR and FNR difference
    at the same time; is it even possible? Also observe what the
    <a href="https://mlu-explain.github.io/precision-recall/">
      model performance</a
    >
    (here: group-wise accuracy) is doing as you move the slider.
    <br />
    <br />
  </p>

  <!-- List of equations -->
  <div class="equation-container">
    <ul class="equation-list" style="list-style-type: none">
      <p class="equation-text">
        <!-- FNR difference -->
        <li>
          {@html katexify(`\\textrm{FNR}`, false)}<sub>
            <svg height="16" width="16">
              <circle
                cx="8"
                cy="10"
                r="4"
                stroke="var(--group_circles)"
                stroke-width="1"
                fill="var(--group_circles)"
              />
            </svg>
          </sub>
          {@html katexify(` - \\, \\textrm{FNR} `, false)}
          <sub>
            <svg height="10" width="10">
              <polygon
                points="5,0 0,10 10,10"
                style="fill:var(--group_triangles);stroke-width:1"
              />
              Sorry, your browser does not support inline SVG.
            </svg></sub
          >
          {@html katexify(
            ` =  ${formatter(fnr_eq1)} - ${formatter(fnr_eq2)} = ${formatter(
              fnr_eq3
            )}`,
            false
          )}
        </li>
        <!-- FPR difference -->
        <li>
          {@html katexify(`\\textrm{FPR}`, false)}<sub>
            <svg height="16" width="16">
              <circle
                cx="8"
                cy="10"
                r="4"
                stroke="var(--group_circles)"
                stroke-width="1"
                fill="var(--group_circles)"
              />
            </svg>
          </sub>
          {@html katexify(` - \\, \\textrm{FPR}`, false)}
          <sub>
            <svg height="10" width="10">
              <polygon
                points="5,0 0,10 10,10"
                style="fill:var(--group_triangles);stroke-width:1"
              />
              Sorry, your browser does not support inline SVG.
            </svg></sub
          >
          {@html katexify(
            ` = ${formatter(fpr_eq1)} - ${formatter(fpr_eq2)} = ${formatter(
              fpr_eq3
            )}`,
            false
          )}
        </li>
        <!-- Accuracy circles -->
        <li>
          {@html katexify(`\\textrm{Accuracy}`, false)}<sub>
            <svg height="16" width="16">
              <circle
                cx="8"
                cy="10"
                r="4"
                stroke="var(--group_circles)"
                stroke-width="1"
                fill="var(--group_circles)"
              />
            </svg>
          </sub>
          {@html katexify(
            `= ${formatter(acc_A)}`, //= \\frac{TP+TN}{TP+FP+TN+FN}
            false
          )}
        </li>
        <!-- Accuracy triangles -->
        <li>
          {@html katexify(`\\textrm{Accuracy}`, false)}<sub>
            <svg height="10" width="16">
              <polygon
                points="8,0 0,16 16,16"
                style="fill:var(--group_triangles);stroke-width:1"
              />
              Sorry, your browser does not support inline SVG.
            </svg></sub
          >
          {@html katexify(
            `= ${formatter(acc_B)}`, //= \\frac{TP+TN}{TP+FP+TN+FN}
            false
          )}
        </li>
      </p>
    </ul>
  </div>

  <!-- Charts -->
  <div id="charts-container">
    <div id="scatter-container">
      <Scatter />
    </div>
    <div id="barchart-container">
      <StackedBar />
    </div>
  </div>
  <p class="body-text">
    Note that as you drag the slider, you might find some so-called <span
      class="highlight"
      >lazy solutions where everyone gets rejected or accepted</span
    >. These are solutions where the FPR or FNR difference is indeed 0. However,
    while these solutions technically meet the relaxed version of EO, they make
    little sense from a general ML performance perspective (check out the
    accuracy values of the model).
    <br /><br />
    You can also verify that there is no probability threshold where FPR and FPR
    are the same for both groups by comparing the values in the chart below:
  </p>
  <br />
  <br />

  <div id="compare-container">
    <FprFnr />
  </div>
</section>

<style>
  div.equation-container {
    text-align: center;
  }

  ul.equation-list {
    display: inline-block;
    text-align: left;
  }

  #charts-container {
    display: grid;
    margin: auto;
    max-height: 48vh;
    width: 80%;
    grid-template-columns: 55% 45%;
    grid-gap: 0%;
    max-width: 1000px;
  }

  #scatter-container {
    max-height: 48vh;
  }
  #barchart-container {
    border: var(--sky);
    max-height: 48vh;
  }

  #compare-container {
    margin: auto;
    height: 55vh;
    width: 55%;
    max-width: 1000px;
  }
  ul {
    max-width: 80%;
    line-height: 1.4;
  }
  li {
    padding: 0.25rem 0.25rem;
  }

  /* mobile */
  @media screen and (max-width: 1050px) {
    #charts-container {
      height: 100vh;
      max-height: 90vh;
      width: 80%;
      grid-template-columns: 100%;
      grid-template-rows: 50% 50%;
    }
    #compare-container {
      height: 70vh;
      width: 100%;
      max-width: 1000px;
    }
    ul {
      max-width: 600px;
      margin: auto;
      color: var(--squid-ink);
      padding-top: 0.5rem;
    }
    li {
      padding: 0.25rem;
      list-style: none;
      color: var(--squid-ink);
    }
  }

  @media screen and (max-width: 850px) {
    #charts-container {
      width: 100%;
    }
  }
</style>
