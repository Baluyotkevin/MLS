import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()
  const currUser = useSelector(state => state.session.user)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu}>
        {currUser ? <>
        <i className="fas fa-user-circle" /> Welcome, {currUser?.first_name}!
         </>
          : <i className="fas fa-user-circle" /> }
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
          <NavLink to='/profilePage'>
            <li className='profileDrop'>My Profile</li>
          </NavLink>
          <NavLink to='/comments/current'>
            <li className='profileDrop'>My Comments</li>
          </NavLink>
          <NavLink to='/favorites'>
          <li className='profileDrop'>My Bookmarks</li>
          </NavLink>
              <button className='logOut profileDrop' onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
