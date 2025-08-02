import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Navbar from "./Navbar";

function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app-layout">
      <div>
        <Navbar />
      </div>

      <main className="">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
