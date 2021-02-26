import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardLink from "./DashboardLink";
// import Dashboard from "../dashboard/Dashboard";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  // const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo right">
          Popo
        </Link>
        {auth.uid ? (
          <>
            <SignedInLinks profile={profile} /> <DashboardLink />
          </>
        ) : (
          <SignedOutLinks />
        )}
        {/* {links} */}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state); // to know the state

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);

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
