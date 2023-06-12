import { FORM_CONTEXT } from "@/context/FormProvider/FormProvider";
import { getCountryCode } from "@/localStroge/localStroge";
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const HistorycalChart = ({ startDate }) => {
  const [timeSeriseData, setTimeSeriseData] = useState([]);
  const { state } = useContext(FORM_CONTEXT);
  const { fromContary, toContary } = state;
  const [countryCodeFromLocalstroge, setCountryCodeFromLocalstroge] =
    useState("");

  useEffect(() => {
    // ------------- Pick Today date
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

    const endDate = `${year}-${month}-${date}`;


    // ----------- Get localStroge country code
    setCountryCodeFromLocalstroge(getCountryCode());

    // -------- This api call for get currency time series
    fetch(
      `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${fromContary}&symbols=${
        toContary || countryCodeFromLocalstroge
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data.rates).length !== 0) {
          setTimeSeriseData(data);
        }
      })
      .catch((error) => console.log("Somthing is worring"));
  }, [fromContary, toContary, countryCodeFromLocalstroge, startDate]);


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
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
    },
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
