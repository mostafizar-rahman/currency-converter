import React, { useEffect, useRef, useState } from "react";
import HistorycalCart from "./HistorycalCart";
import HistorycalChart from "./HistorycalChart";

const DatePicker = () => {
  const [durationCheck, setDurationCheck] = useState({});
  const [startDate, setStartDate] = useState("");

  const resultInput = useRef(null);

  const date = new Date();
  useEffect(() => {
    // --------- When First time load the page this date by default set 1 month
    if (resultInput.current.value === "1m") {
      const previousDate = `${date.getFullYear()}-0${
        date.getMonth() + 1 - 1
      }-0${date.getDate()}`;

      setStartDate(previousDate);
      setDurationCheck("1m");
    }
  }, []);

  // ---------- When the user clicked the duration button set the duration date as month/year
  const handleDurationCheck = (e) => {
    const value = e.target.value;

    if (value === "1m") {
      const previousDate = `${date.getFullYear()}-0${
        date.getMonth() + 1 - 1
      }-0${date.getDate()}`;

      setStartDate(previousDate);
    } else if (value === "6m") {
      const previousDate = `${date.getFullYear()}-0${
        +date.getMonth() + 1 - 6
      }-0${date.getDate()}`;

      setStartDate(previousDate);
    } else if (value === "1y") {
      const previousDate = `${date.getFullYear() - 1}-0${
        date.getMonth() + 1
      }-0${date.getDate()}`;

      setStartDate(previousDate);
    } else if (value === "2y") {
      const previousDate = `${date.getFullYear() - 2}-0${
        date.getMonth() + 1
      }-0${date.getDate()}`;

      setStartDate(previousDate);
    }
    setDurationCheck(value);
  };
  return (
    <div className="mt-12 lg:mt-0">
      <div className="flex justify-between items-center">
        <div>
          <label
            htmlFor="1m"
            className={`${
              durationCheck === "1m" ? "bg-green-400" : "bg-transparent"
            } w-8 h-8 rounded-full text-center flex justify-center items-center`}
          >
            1M
          </label>
          <input
            ref={resultInput}
            type="radio"
            name="date"
            id="1m"
            value="1m"
            hidden
            onChange={handleDurationCheck}
          />
        </div>
        <div>
          <label
            htmlFor="6m"
            className={`${
              durationCheck === "6m" ? "bg-green-400" : "bg-transparent"
            } w-8 h-8 rounded-full text-center flex justify-center items-center`}
          >
            6M
          </label>
          <input
            type="radio"
            name="date"
            id="6m"
            hidden
            value="6m"
            onChange={handleDurationCheck}
          />
        </div>
        <div>
          <label
            htmlFor="1y"
            className={`${
              durationCheck === "1y" ? "bg-green-400" : "bg-transparent"
            } w-8 h-8 rounded-full text-center flex justify-center items-center`}
          >
            1Y
          </label>
          <input
            type="radio"
            name="date"
            id="1y"
            hidden
            value="1y"
            onChange={handleDurationCheck}
          />
        </div>
        <div>
          <label
            htmlFor="2y"
            className={`${
              durationCheck === "2y" ? "bg-green-400" : "bg-transparent"
            } w-8 h-8 rounded-full text-center flex justify-center items-center`}
          >
            2Y
          </label>
          <input
            type="radio"
            name="date"
            id="2y"
            hidden
            value="2y"
            onChange={handleDurationCheck}
          />
        </div>
      </div>
      {/* <HistorycalCart startDate={startDate} /> */}
      <div className="lg:w-[700px] md:w-[500px] sm:w-[500px] w-[300px]   h-[400px]">
        <HistorycalChart startDate={startDate} />
      </div>
    </div>
  );
};

export default DatePicker;
