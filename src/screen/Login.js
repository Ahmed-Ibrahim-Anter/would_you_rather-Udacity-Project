import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router';
import { usertSelectors } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addauth } from '../redux/authSlice'
import { showLoading, hideLoading } from 'react-redux-loading-bar';


const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [autUser, setautUser] = useState();
  const user = useSelector(usertSelectors.selectAll);
  const ele = user.map(e => { return (<option key={e.id} value={e.id} style={{ backgroundImage: `url(${e.avatarURL})` }} >{e.name}</option>) });
  let avatar = user.find(e => e.id === autUser);
  const handelClick = (e) => {
    if (autUser) {
      e.preventDefault();
      dispatch(showLoading());
      dispatch(addauth({ id: autUser, auth: autUser }));
      localStorage.setItem('autUser', autUser)
      history.push('/dashboard');
      dispatch(hideLoading());
    }
    else { alert('you should Sign in'); return }



  }






  return (
    <div className='text-center'>
      <div className="form-signin">
        <form>
          <img className="mb-4" src={autUser === undefined ? 'https://images.freeimages.com/images/small-previews/7ac/yellow-dice-1425810.jpg' : avatar.avatarURL} alt="logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <select value={autUser} className="form-select" aria-label="Default select example" onChange={(e) => { setautUser(e.target.value) }}>
              <option hidden>Open this select menu</option>
              {ele}
            </select>

          </div>


          <br />
          <button onClick={(e) => { handelClick(e) }} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; Would_you_rather_App</p>
        </form>
      </div>
    </div>
  );
}

export default Login;


