import NavBar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow"><Outlet/></main>
        <Footer/>
      </div>
    );
  }

  export default Layout