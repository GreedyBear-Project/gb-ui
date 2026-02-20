import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

/**
 * @type {component}
 * @param props
 */
function TernaryCheckbox({ value, onChange, trueLabel = "Yes", falseLabel = "No", undefLabel = "All", ...rest }) {
  return (
    <ButtonGroup {...rest}>
      <Button
        color={value ? "secondary" : "tertiary"}
        onClick={() => onChange(true)}
        outline={!value}
        active={value}
      >
        {trueLabel}
      </Button>
      <Button
        color={value === false ? "secondary" : "tertiary"}
        onClick={() => onChange(false)}
        outline={value !== false}
        active={value === false}
      >
        {falseLabel}
      </Button>
      <Button
        color={typeof value === "undefined" ? "secondary" : "tertiary"}
        onClick={() => onChange(undefined)}
        outline={typeof value !== "undefined"}
        active={typeof value === "undefined"}
      >
        {undefLabel}
      </Button>
    </ButtonGroup>
  );
}

TernaryCheckbox.propTypes = {
  value: PropTypes.oneOf([true, false, undefined]).isRequired,
  onChange: PropTypes.func.isRequired,
  falseLabel: PropTypes.string,
  trueLabel: PropTypes.string,
  undefLabel: PropTypes.string,
};

export default React.memo(TernaryCheckbox);
