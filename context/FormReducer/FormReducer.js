import { setCountryCode } from "@/localStroge/localStroge";
import { actionTypes } from "../ActionTypes/ActionTypes";
import { getCookieParser } from "next/dist/server/api-utils";

export const initialState = {
  fromContary: "",
  toContary: "",
  fromAmount: "",
  toAmount: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FROM_CONTARY_NAME:
      if (state.toContary !== action.payload) {
        if (action.payload === undefined) {
          return {
            ...state,
            fromContary: "default",
            // fromAmount: "",
            // toAmount: "",
          };
        }
        return {
          ...state,
          fromContary: action.payload,
          // fromAmount: "",
          // toAmount: "",
        };
      }
      if (state.toContary === action.payload) {
        (state.toContary = state.fromContary),
          (state.fromContary = state.toContary);
      }

    case actionTypes.TO_CONTARY_NAME:
      if (state.fromContary !== action.payload) {
        setCountryCode(action.payload );
        return {
          ...state,
          toContary: action.payload,
          // fromAmount: "",
          // toAmount: "",
        };
      }
      if (state.fromContary === action.payload) {
        (state.fromContary = state.toContary),
          (state.toContary = state.fromContary);
      }

    case actionTypes.FROM_AMOUNT:
      return {
        ...state,
        fromAmount: action.payload,
      };

    case actionTypes.TO_AMOUNT:
      return {
        ...state,
        toAmount: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
