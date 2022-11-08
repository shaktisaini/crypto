import "./app.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Buy from "./components/BuySell/Buy";
import BuyCheckout from "./components/BuySell/BuyCheckout";
import SellCheckout from "./components/BuySell/SellCheckout";
import Sell from "./components/BuySell/Sell";
import Settings from "./components/Settings/Settings";
import Wallet from "./components/Wallet/Wallet";
import Promotions from "./components/Promotions/Promotions";
import Privacy from "./components/Privacy/Privacy";
import Notifications from "./components/Notifications/Notifications";
import Home from "./components/Home/Home";
import FAQ from "./components/FAQ/FAQ";
import ExchangeTransfer from "./components/ExchangeTransfer/Exchange";
import Depositwithdraw from "./components/DepositWithdraw/Depositwithdraw";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserContext } from "./context/user-context";
import RequireAuth from "./components/ProtectedRoute/RequireAuth";
import RequireAuthAdmin from "./components/ProtectedRoute/RequireAuthAdmin";
import AdminExchange from "./components/ExchangeTransfer/AdminExchange";
import ViewTransaction from "./components/ExchangeTransfer/ViewTransaction";
import {
  getNewToken,
  getNewUser,
  setNewToken,
  setNewUser,
} from "./lib/localstorage";
import Assets from "./components/Assets/Assets";
import moment from "moment";
import { HomePage } from "./pages/HomePage";
import SupportClient from "./components/SupportClient/SupportClient";
import UserManagement from "./components/UserManagement/UserManagment";
import ViewUser from "./components/UserManagement/ViewUser";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "lufgalight-webfont",
    },
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [order, setOrder] = useState({
    asset: null,
    assetAmount: 0,
    ngnAmount: 0,
    txRef: "",
    date: moment(Date.now()).format("LLL").toString(),
  });

  useEffect(() => {
    setUser(getNewUser());
    setToken(getNewToken());
  }, []);

  const setUserToken = (token) => {
    setNewToken(token);
    setToken(token);
  };

  const setLocalStorageUser = (user) => {
    setUser(user);
    setNewUser(user);
  };

  const setTransactionOrder = (order) => {
    setOrder(order);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        order,
        token,
        setUser: setLocalStorageUser,
        setToken: setUserToken,
        transaction: order,
        setTransactionOrder: setTransactionOrder,
      }}
    >
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route exact path="/Buy" element={<Buy />} />
            <Route exact path="/Settings" element={<Settings />} />
            <Route exact path="/Wallet" element={<Wallet />} />
            <Route exact path="/Sell" element={<Sell />} />
            <Route exact path="/Notifications" element={<Notifications />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/SupportClient" element={<SupportClient />} />
            <Route
              exact
              path="/Depositwithdraw"
              element={<Depositwithdraw />}
            />

            <Route
              exact
              path="/ExchangeTransfer"
              element={<ExchangeTransfer />}
            />

            {/*  Admin Access */}
            <Route element={<RequireAuthAdmin />}>
              <Route exact path="/Assets" element={<Assets />} />
              <Route
                exact
                path="/ViewTransactions/:id"
                element={<ViewTransaction />}
              />
              <Route exact path="/ViewUser/:id" element={<ViewUser />} />
              <Route
                exact
                path="/UserManagement"
                element={<UserManagement />}
              />
              <Route
                exact
                path="/AdminTransactions"
                element={<AdminExchange />}
              />
              {/* <Route exact path="/SupportClient" element={<SupportClient />} /> */}
            </Route>
            <Route exact path="/BuyCheckout" element={<BuyCheckout />} />
            <Route exact path="/SellCheckout" element={<SellCheckout />} />
          </Route>
          <Route exact path="/Promotions" element={<Promotions />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
