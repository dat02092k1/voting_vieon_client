import { utilContainer } from "../shared/constants/utilContainer";

class UtilFuncs {
  getStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  removeFromStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  clearStorage = () => {
    localStorage.clear();
  };

  setHeader = () => {
    return {
      "x-api-key": utilContainer.API_KEY,
      "authorization": `Bearer ${utilFuncs.getStorage(utilContainer.HEADER.AUTHORIZATION)}`,
    };
  };
}

export const utilFuncs = new UtilFuncs();
