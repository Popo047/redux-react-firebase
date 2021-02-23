import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardLink from "./DashboardLink";
// import Dashboard from "../dashboard/Dashboard";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo right">
          Popo
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
        <DashboardLink />
      </div>
    </nav>
  );
};

export default Navbar;

// export class Navbar extends Component {
//   handleChange = () => {};
//   render() {
//     return (
//       <div>
//         <nav className="nav-wrapper grey darken-3">
//           <div className="container">
//             <NavLink
//               to="/"
//               className="brand-logo right"
//               onClick={this.handleChange}
//             >
//               Popo
//             </NavLink>
//             <SignedInLinks />
//             <SignedOutLinks />
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
