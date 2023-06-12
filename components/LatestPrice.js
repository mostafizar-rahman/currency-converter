import useCountries from "@/hooks/useCountries";
import { useEffect, useState } from "react";

const LatestPrice = () => {
  const [rates, setRates] = useState({});
  const countriesList = useCountries();

  useEffect(() => {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month =
      fullDate.getMonth().toString().length < 2
        ? `0${fullDate.getMonth() + 1}`
        : fullDate.getMonth() + 1;
    const date =
      fullDate.getDate().toString().length < 2
        ? `0${fullDate.getDate()}`
        : fullDate.getDate();

    const newDate = `${year}-${month}-${date}`;

    fetch(
      `https://api.exchangerate.host/timeseries?start_date=${newDate}&end_date=${newDate}&base=USD`
    )
      .then((res) => res.json())
      .then((data) => setRates(data.rates[newDate]));
  }, []);

  //   ------------- Create a object with country name, country code and latest rate
  const latestRates = [];
  for (const key in rates) {
    countriesList.forEach((country) => {
      if (country.code === key) {
        const rate = {
          countryName: country.description,
          countryCode: country.code,
          rate: rates[key],
        };
        latestRates.push(rate);
      }
    });
  }

  return (
    <div className="mt-36 mx-auto max-w-5xl flex justify-center flex-col">
      <h3 className="text-xl font-semibold mb-8 text-[#20e04ae4]">
        Latest currency rate base on USD
      </h3>
      <div>
        <div className="hidden sm:grid sm:grid-cols-[330px_150px_120px] md:grid-cols-[430px_150px_120px] lg:grid-cols-[400px_200px_120px] mb-5">
          <h5 className="text-lg font-semibold">Country Name</h5>
          <h5 className="text-lg font-semibold">Currency Code</h5>
          <h5 className="text-lg font-semibold">Rate</h5>
        </div>

        {latestRates.map(({ countryName, countryCode, rate }, index) => {
          return (
            <ul
              key={index}
              className="sm:grid sm:grid-cols-[330px_150px_120px] md:grid-cols-[430px_150px_120px] lg:grid-cols-[400px_200px_120px] sm:mt-4 mt-12"
            >
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Country Name: </span>
                <span className="text-sm sm:text-base">{countryName}</span>
              </li>
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Currency Code: </span>
                <span className="text-sm sm:text-base">{countryCode}</span>
              </li>
              <li className="flex sm:space-x-0 space-x-3 items-center mb-2">
                <span className="block sm:hidden ">Rate: </span>
                <span className="text-sm sm:text-base">{rate}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default LatestPrice;
