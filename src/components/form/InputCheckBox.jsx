import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Input, FormGroup, FormFeedback, Label } from "reactstrap";

function InputCheckBox({ label, name, valid = true, feedback = null, ...rest }) {
  // props

  return (
    <FormGroup check>
      <Input
        type="checkbox"
        name={name}
        bsSize="sm"
        className={classnames(
          "bg-dark border-0 d-flex-start-center",
          `is-${valid ? "valid" : "invalid"}`
        )}
        valid={valid}
        {...rest}
      />
      <Label check>{label}</Label>
      {feedback && <FormFeedback>{feedback}</FormFeedback>}
    </FormGroup>
  );
}

InputCheckBox.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  feedback: PropTypes.string,
};

export default InputCheckBox;
