import { Outlet } from "react-router-dom";
import "../../App.css";

import Header from "../../components/general/Header/Header";
import Footer from "../../components/general/Footer/Footer";

export default function MainApp() {
  return (
    <section className="app-container">
      <Header />
      <section className="page-container">
        <Outlet />
        <Footer />
      </section>
    </section>
  );
}
