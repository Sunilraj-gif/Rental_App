import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const renderList = () => {
    if (state) {
      return [
        <li key="profile"><Link to="/profile">Profile</Link></li>,
        <li key="createPost"><Link to="/create">Create Post</Link></li>,
        <li key="logout">
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: 'CLEAR' }); // Ensure to clear user state
              navigate("/login");
            }}
          >
            Logout
          </button>
        </li>
      ];
    } else {
      return [
        <li key="login"><Link to="/login">Login</Link></li>,
        <li key="signUp"><Link to="/signUp">Sign Up</Link></li>
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">Home Rental</Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
