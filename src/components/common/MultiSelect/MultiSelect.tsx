import React, { useRef } from "react";
import ReactSelect, { PropsValue, components } from "react-select";
import { Permission } from "../../../models/interfaces";
import "./MultiSelect.scss";

interface MultiSelectProps {
  value: Permission[];
  changeValue: any;
  placeholder: string;
  options: Permission[];
}

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}: any) => {
  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={innerProps}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelected}
        onChange={() => {}}
      />
      {children}
    </components.Option>
  );
};

const MultiSelect = ({
  value,
  changeValue,
  placeholder,
  options,
}: MultiSelectProps) => {
  const valueRef = useRef(value);
  valueRef.current = value;

  const selectAllOption = {
    value: "<SELECT_ALL>",
    label: "All",
  };

  const isSelectAllSelected = () => valueRef.current.length === options.length;

  const isOptionSelected = (option: Permission) =>
    valueRef.current.some(({ value }: any) => value === option.value) ||
    isSelectAllSelected();

  const getOptions = () => [selectAllOption, ...options];

  const getValue = (): PropsValue<Permission> | undefined =>
    isSelectAllSelected() ? [selectAllOption] : value;

  const onChange = (newValue: any, actionMeta: any) => {
    const { action, option, removedValue } = actionMeta;

    if (action === "select-option" && option.value === selectAllOption.value) {
      changeValue(options, actionMeta);
    } else if (
      (action === "deselect-option" &&
        option.value === selectAllOption.value) ||
      (action === "remove-value" &&
        removedValue.value === selectAllOption.value)
    ) {
      changeValue([], actionMeta);
    } else if (
      actionMeta.action === "deselect-option" &&
      isSelectAllSelected()
    ) {
      changeValue(
        options.filter(({ value }) => value !== option.value),
        actionMeta
      );
    } else {
      changeValue(newValue || [], actionMeta);
    }
  };

  return (
    <ReactSelect
      placeholder={placeholder}
      className={"select"}
      classNamePrefix={"custom"}
      isOptionSelected={isOptionSelected}
      options={getOptions()}
      value={getValue()}
      onChange={onChange}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isMulti
      components={{
        Option: InputOption,
      }}
    />
  );
};

export default MultiSelect;
