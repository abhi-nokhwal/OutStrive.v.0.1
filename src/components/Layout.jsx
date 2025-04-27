import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Head from "./Head";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div>
        {!isHome && (
          <div className="relative z-20">
            <Head />
          </div>
        )}

        <main className="relative z-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
