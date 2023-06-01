import React, { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    fetch("https://api.exchangerate.host/symbols")
      .then((res) => res.json())
      .then((country) => setCountries(country));
  }, []);

  const countriesList = [];
  for (const key in countries.symbols) {
    countriesList.push({
      description: countries.symbols[key].description,
      code: key,
    });
  }
  return countriesList;
};

// console.log(useCountries())
export default useCountries;
