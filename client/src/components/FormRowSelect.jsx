import React from "react";

function FormRowSelect({ name, labelText, defaultValue, list, onChange }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="form-select"
        onChange={onChange}
      >
        {list.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
