import { createContext } from "react";
import moment from "moment";

export const UserContext = createContext({
  user: null,
  token: "",
  transaction: {
    asset: null,
    assetAmount: 0,
    ngnAmount: 0,
    txRef: "",
    date: moment(Date.now()).format("LLL").toString(),
  },
});
