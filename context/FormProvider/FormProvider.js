import formReducer, { initialState } from "../FormReducer/FormReducer";
const { createContext, useReducer } = require("react");

export const FORM_CONTEXT = createContext();
// export const DATE_PICKER_CONTEXT = createContext()

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
 
  return (
    <>
    <FORM_CONTEXT.Provider value={{state, dispatch}}>{children}</FORM_CONTEXT.Provider>
    {/* <DATE_PICKER_CONTEXT.Provider value={{}}>{children}</DATE_PICKER_CONTEXT.Provider> */}
    </>
  );
};

export default FormProvider;
