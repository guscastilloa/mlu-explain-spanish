<script>
  import katexify from "../katexify";
  import { tooltip } from "../tooltip";
</script>

<section>
  <p class="body-text">
    Linear Regression is a simple and powerful model for predicting a numeric
    response from a set of one or more independent variables. This article will
    focus mostly on how the method is used in machine learning, so we won't
    cover common use cases like casual inference or experimental design. And
    although it may seem like linear regression is overlooked in modern machine
    learning's ever-increasing world of complex neural network architectures,
    the algorithm is still widely used across a large number of domains because
    it is effective, easy to interpret, and easy to extend. The key ideas in
    linear regression are recycled everywhere, so understanding the algorithm is
    a must-have for a strong foundation in machine learning.
  </p>
  <br />
  <p class="body-text">
    <span class="bold">Let's Be More Specific</span>
    <br />
    Linear regression is a supervised algorithm
    <span
      class="info-tooltip"
      title="supervised algorithms learn to predict a specific value based on historical data."
      use:tooltip
    >
      [&#8505;]
    </span>
    that learns to model a dependent variable, {@html katexify(`y`, false)}, as
    a function of some independent variables (aka "features"), {@html katexify(
      `x_i`,
      false
    )}, by finding a line (or surface) that best 'fits' the data. In general, we
    assume {@html katexify(`y`, false)} to be some number and each
    {@html katexify(`x_i`, false)} can be basically anything. For example: predicting
    the price of a house using the number of rooms in that house ({@html katexify(
      `y`,
      false
    )}: price, {@html katexify(`x_1`, false)}: number of rooms) or predicting
    weight from height and age ({@html katexify(`y`, false)}: weight, {@html katexify(
      `x_1`,
      false
    )}: height, {@html katexify(`x_2`, false)}: age).
    <br /><br />
    In general, the equation for linear regression is
  </p>
  <br />
  <p class="body-text">
    {@html katexify(
      `y=B_0 + B_1x_1  + B_2x_2 + ... + B_px_p + \\epsilon`,
      true
    )}
  </p>

  <br />
  <p class="body-text">
    where: <br />
  </p>
  <ul class="body-text">
    <li>
      {@html katexify(`y`, false)}: the dependent variable; the thing we are
      trying to predict.<span
        class="info-tooltip"
        title="E.g., if we are using the number of bathrooms to
      predict housing price, housing price is the dependent variable."
        use:tooltip
      >
        [&#8505;]
      </span>
    </li>

    <li>
      {@html katexify(`x_i`, false)}: the independent variables: the features
      our model uses to model y.<span
        class="info-tooltip"
        title=" E.g., if we are using the number of bathrooms to
        predict housing price, the number of bathrooms is the independent variables."
        use:tooltip
      >
        [&#8505;]
      </span>
    </li>
    <li>
      {@html katexify(`\\beta_i`, false)}: the coefficients (aka the weights) of
      our regression model. These are the foundations of our model. They are
      what our model ‘learns’ during optimization.<span
        class="info-tooltip"
        title="The coefficient B0 represents the
      intercept of our model, and each other coefficient Bi (i > 0) is a slope
      defining how variable xi contributes to the model. We discuss how to
      interpret regression coefficients further on in the article."
        use:tooltip
      >
        [&#8505;]
      </span>
    </li>
    <li>
      {@html katexify(`\\epsilon`, false)}: the irreducible error in our model.
      A term that collects together all the unmodeled parts of our data.
    </li>
  </ul>
  <br />

  <p class="body-text">
    Fitting a linear regression model is all about finding the set of
    cofficients that best model y as a function of our features. We may never
    know the true parameters for our model, but we can estimate them (more on
    this later). Once we've estimated these coefficients, {@html katexify(
      `\\hat{\\beta_i}`,
      false
    )}, we predict future values, {@html katexify(`\\hat{y}`, false)}, as:
  </p>
  <br />
  <p class="body-text">
    {@html katexify(
      `\\hat{y}=\\hat{B_0} + \\hat{B_1}x_1  + \\hat{B_2}x_2 + ... + \\hat{B_p}x_p  `,
      true
    )}
  </p>
  <p class="body-text">
    So predicting future values (often called inference), is as simple as
    plugging the values of our features {@html katexify(`x_i`, false)} into our equation!
  </p>
  <br />
</section>

<style>
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
  /* mobile */
  @media screen and (max-width: 950px) {
    ul {
      max-width: 80%;
    }
    li {
      padding: 0.25rem 0;
    }
  }
</style>