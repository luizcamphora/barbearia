import React from 'react';

function HourCheckbox({ hour, selected, onHourToggle }) {
  return (
    <label>
      <input
        type="checkbox"
        value={hour}
        checked={selected}
        onChange={() => onHourToggle(hour)}
        disabled={selected}
      />
      {hour}:00
    </label>
  );
}

export default HourCheckbox;
