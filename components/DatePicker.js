import React, { useEffect, useRef, useState } from "react";
import HistorycalCart from "./HistorycalCart";

const DatePicker = () => {
  const [check, setCheck] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const resultInput = useRef(null);

  const date = new Date();
  useEffect(() => {
    if (resultInput.current.value === "1m") {
      const previousDate = `${date.getFullYear()}-${
        date.getMonth() + 1 - 1
      }-${date.getDate()}`;
      const newDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;

      setStartDate(previousDate);
      setEndDate(newDate);
      setCheck("1m");
    }
  }, []);

  const handleActiveCheck = (e) => {
    const value = e.target.value;

    if (value === "1m") {
      const previousDate = `${date.getFullYear()}-${
        date.getMonth() + 1 - 1
      }-${date.getDate()}`;
      const newDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;

      setStartDate(previousDate);
      setEndDate(newDate);
    } else if (value === "6m") {
      const previousDate = `${date.getFullYear()}-${
        date.getMonth() + 1 - 6
      }-${date.getDate()}`;
      const newDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      setStartDate(previousDate);
      setEndDate(newDate);
    } else if (value === "1y") {
      const previousDate = `${date.getFullYear() - 1}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      const newDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      setStartDate(previousDate);
      setEndDate(newDate);
    }
    setCheck(value);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <label
            htmlFor="1m"
            className={`${
              check === "1m" ? "bg-green-400" : "bg-transparent"
            } w-8 h-8 rounded-full text-center flex justify-center items-center`}
          >
            1M
          </label>
          <input
            ref={resultInput}
            type="radio"
            name="date"
            id="1m"
            // defaultChecked={check === "1m"}
            value="1m"
            hidden
            onChange={handleActiveCheck}
          />
        </div>
        <div>
          <label
            htmlFor="6m"
            className={`${
              check === "6m" ? "bg-green-400" : "bg-transparent"
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
            onChange={handleActiveCheck}
          />
        </div>
        <div>
          <label
            htmlFor="1y"
            className={`${
              check === "1y" ? "bg-green-400" : "bg-transparent"
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
            onChange={handleActiveCheck}
          />
        </div>
        <div>
          <label
            htmlFor="2y"
            className={`${
              check === "2y" ? "bg-green-400" : "bg-transparent"
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
            onChange={handleActiveCheck}
          />
        </div>
      </div>
      <HistorycalCart startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default DatePicker;
