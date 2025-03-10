import NavBar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow ml-4 mr-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  export default Layout