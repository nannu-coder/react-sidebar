import { appContext } from "./context";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(appContext);
};

export default useGlobalContext;
