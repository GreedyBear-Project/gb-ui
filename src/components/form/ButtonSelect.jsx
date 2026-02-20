import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

function ButtonSelect({ choices, value, onChange, buttonProps = {}, ...rest }) {
  return (
    <ButtonGroup {...rest}>
      {choices.map((ch) => (
        <Button
          key={`btn-select-option-${ch}`}
          color={value === ch ? "secondary" : "tertiary"}
          onClick={() => onChange(ch)}
          outline={value !== ch}
          active={value === ch}
          {...buttonProps}
        >
          {ch}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
  buttonProps: PropTypes.object,
};

export default React.memo(ButtonSelect);
