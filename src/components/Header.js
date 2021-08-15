import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { useSelector, useDispatch } from 'react-redux';
import { usertSelectors } from '../redux/userSlice';
import { deleteauthUser } from '../redux/authSlice';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let his = localStorage.getItem('autUser');
  const user = useSelector(state => usertSelectors.selectById(state, his));
  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(deleteauthUser());
    localStorage.clear();
    history.push('/');

  }



  return (
    <div className="p-3 mb-3 border-bottom head">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 H ">
            <li><NavLink to="/dashboard" className="nav-link px-2  link-dark btn btn-warn">Dashboard</NavLink></li>
            <li><NavLink to="/add" className="nav-link px-2 link-dark btn btn-warn">New Question</NavLink></li>
            <li><NavLink to="/leader" className="nav-link px-2 link-dark btn btn-warn">Leader Board</NavLink></li>
          </ul>
          <div className="dropdown text-end">
            <NavLink to={'/dashboard'} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={user.avatarURL} alt="mdo" width="32" height="32" className="rounded-circle" />
            </NavLink>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><h5>Name:{user.name}</h5></li>
              <li><h5>Questions Created: <span className="badge bg-secondary">{user.questions.length}</span></h5></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button onClick={(e) => { handelLogout(e) }} type="button" className="dropdown-item"><h5>Sign out</h5></button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;