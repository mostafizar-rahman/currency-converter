import formReducer, { initialState } from "../FormReducer/FormReducer";
const { createContext, useReducer } = require("react");

export const FORM_CONTEXT = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <>
      <FORM_CONTEXT.Provider value={{ state, dispatch }}>
        {children}
      </FORM_CONTEXT.Provider>
    </>
  );
};

export default FormProvider;
