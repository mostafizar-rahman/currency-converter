import { useContext, useEffect, useRef, useState } from "react";
import isoCountries from "iso-country-currency";
import useCountries from "@/hooks/useCountries";
import { FORM_CONTEXT } from "@/context/FormProvider/FormProvider";
import { actionTypes } from "@/context/ActionTypes/ActionTypes";
import { getCountryCode } from "@/localStroge/localStroge";

const ConverterForm = ({ countryCode}) => {
  const countriesList = useCountries();
  const { dispatch, state } = useContext(FORM_CONTEXT);
  const resultInput = useRef(null);
  const [getCountry, setGetCountry] = useState('')
  
  useEffect(() => {
    setGetCountry(getCountryCode()) 
    resultInput.current.value = "";

    dispatch({
      type: actionTypes.FROM_CONTARY_NAME,
      payload: countryCode,
    });

    if (!getCountryCode()) {
      dispatch({
        type: actionTypes.TO_CONTARY_NAME,
        payload: "USD",
      });
    }

   
  }, [countryCode]);

  // console.log(getCountry)
  // const xx = state.toContary || getCountryCode()

  const handleConvertFormSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.exchangerate.host/convert?to=${state.toContary||getCountry}&from=${state.fromContary}&amount=${state.fromAmount}`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: actionTypes.TO_AMOUNT, payload: result.result });
        // setResultAmount(result);
        e.target.reset();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="py-8 px-3 bg-white max-w-sm w-full rounded-lg min-h-[300px] flex flex-col justify-center ">
      <h3 className="text-black text-2xl font-bold mb-4">Calclute</h3>
      <form onSubmit={handleConvertFormSubmit}>
        <div>
          <p className="text-black">From</p>
          <select
            value={state.fromContary}
            onChange={(e) =>
              dispatch({
                type: actionTypes.FROM_CONTARY_NAME,
                payload: e.target.value,
               
              })
             
            }
            className="py-3 outline-none rounded-lg w-full"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>
         
          <input
            type="number"
            placeholder="1"
            className="py-3 outline-none rounded-lg w-full px-2 mt-3"
            
            onChange={(e) =>
              dispatch({
                type: actionTypes.FROM_AMOUNT,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <p className="text-black mt-5">To</p>
          <select
            value={state.toContary || getCountry}
            onChange={(e) =>
              dispatch({
                type: actionTypes.TO_CONTARY_NAME,
                payload: e.target.value,
              })
            }
            className="py-3 outline-none rounded-lg w-full"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>

          <input
            readOnly
            type="text"
            name="result"
            placeholder="Result"
            className="py-3 outline-none rounded-lg w-full px-2 mt-3"
            defaultValue={state.toAmount}
            ref={resultInput}
          />
        </div>
        <button className=" btn px-4 py-2 bg-[#30a549e4] rounded-lg mt-7 w-full text-white">
          Convert
        </button>
      </form>
    </div>
  );
};

export default ConverterForm;
