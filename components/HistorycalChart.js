import { FORM_CONTEXT } from "@/context/FormProvider/FormProvider";
import { getCountryCode } from "@/localStroge/localStroge";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useRouter } from "next/router";
import { actionTypes } from "@/context/ActionTypes/ActionTypes";
Chart.register(...registerables);

const HistorycalChart = ({ startDate }) => {
  const [timeSeriseData, setTimeSeriseData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(FORM_CONTEXT);
  const { fromContary, toContary } = state;
  const [countryCodeFromLocalstroge, setCountryCodeFromLocalstroge] =
    useState("");

  const { query } = useRouter();

  useEffect(() => {
    // ------------- Pick Today date
    const date = new Date();
    const endDate = `${date.getFullYear()}-0${
      date.getMonth() + 1
    }-0${date.getDate()}`;

    // ----------- Get localStroge country code
    setCountryCodeFromLocalstroge(getCountryCode());

    // -------- This api call for get currency time series
    const url = `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${fromContary}&symbols=${
      toContary || countryCodeFromLocalstroge
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setLoading(true);
        if (data.success) {
          dispatch({
            type: actionTypes.FROM_CONTARY_NAME,
            payload: query.id,
          });
          setTimeSeriseData(data);
        }
        // setLoading(false);
      })
      .catch((error) => console.log("Somthing is worring"));
  }, [fromContary, toContary, countryCodeFromLocalstroge, startDate]);

  // console.log(timeSeriseData)
  //   ----------- Time serise object convert in array
  const labels = [];
  const data = [];
  let label = "";
  for (const key in timeSeriseData.rates) {
    labels.push(key);
    data.push(
      timeSeriseData.rates[key][toContary || countryCodeFromLocalstroge]
    );
    label = toContary || countryCodeFromLocalstroge;
  }

  //   ---------- Recevied time serices array for showing chart
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
        // backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        // beginAtZero: true,
      },
    },
  };

  // if (loading) return <h1>Loading</h1>;
  return <Line data={chartData} options={chartOptions} />;
};

export default HistorycalChart;
