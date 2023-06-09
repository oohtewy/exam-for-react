import layout from "./style.css";
import { Link, Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <nav style={layout}>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/404">Error</Link>
          </li>
          <li className="Login" >
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
     
      <Outlet />
      
    </>
  );
}

export default Layout;
