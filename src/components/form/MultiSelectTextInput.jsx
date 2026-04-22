import React from "react";

import ReactCreatableSelect from "react-select/creatable";

import { selectStyles } from "./data";

// constants
const components = {
  DropdownIndicator: null,
};

export default function MultiSelectTextInput(props) {
  const { defaultElements, onElementsChange, ...toPassProps } = props;

  const [inputValue, setInputValue] = React.useState("");
  const [inputList, setInputList] = React.useState(() => defaultElements || []);

  const onChange = React.useCallback(
    (v) => {
      const nextList = v || [];
      setInputList(nextList);
      onElementsChange(nextList.map((el) => el.value));
    },
    [onElementsChange]
  );
  const onInputChange = v => setInputValue(v);
  const handleKeyDown = event => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setInputList((prevInputList) => {
          if (prevInputList.some((el) => el.value === inputValue))
            return prevInputList;

          const nextList = [
            ...prevInputList,
            { label: inputValue, value: inputValue, },
          ];
          onElementsChange(nextList.map((el) => el.value));
          return nextList;
        });
        setInputValue("");
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <ReactCreatableSelect
      isClearable
      isMulti
      menuIsOpen={false}
      components={components}
      styles={selectStyles}
      value={inputList}
      inputValue={inputValue}
      onChange={onChange}
      onInputChange={onInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      {...toPassProps}
    />
  );
}

