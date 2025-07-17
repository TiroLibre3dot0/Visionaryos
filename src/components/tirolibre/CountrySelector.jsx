import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountrySelector = ({ value, onChange }) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <Select
      options={options}
      value={options.find(opt => opt.value === value)}
      onChange={onChange}
      placeholder="Seleziona un paese"
      className="w-full"
    />
  );
};

export default CountrySelector;
