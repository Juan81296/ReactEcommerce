
import "../styles/global.scss"
import Layout from "../containers/Layouts";
import RecoveryPassword from "../containers/RecoveryPassword";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Login from "../pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recoveryPassword" element={<RecoveryPassword />} />
        <Route exact path="/send-email" element={<SendEmail />} />
        <Route exact path="/new-password" element={<NewPassword />} />
        <Route exact path="/account" element={<MyAccount />} />
        <Route exact path="/signup" element={<CreateAccount />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="*" element={<NotFound />} />

      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
