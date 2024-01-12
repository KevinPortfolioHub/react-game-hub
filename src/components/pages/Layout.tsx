import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
