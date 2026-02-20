import React from "react";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";

import ErrorAlert from "../alerts/ErrorAlert";

function Loader({ loading, error = null, render, renderError = ErrorAlert, size = "md", }) {
  return (
    <>
      {loading && (
        <Spinner type="ripple" className={`d-block mx-auto my-5 spinner-border-${size}`} />
      )}
      {error && renderError({ error, size, })}
      {!(loading || error) && render()}
    </>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  render: PropTypes.func.isRequired,
  renderError: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default Loader;
