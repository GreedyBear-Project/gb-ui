import React from "react";
import PropTypes from "prop-types";

import ReactJson from "react-json-view";

function NewJsonRenderer({ jsonData = null, ...rest }) {
  return (
      <ReactJson
        name={null}
        theme="harmonic"
        src={jsonData}
        displayObjectSize={false}
        displayDataTypes={false}
        {...rest}

    />
  );
}

NewJsonRenderer.propTypes = {
  jsonData: PropTypes.object,
};

export default React.memo(NewJsonRenderer);
