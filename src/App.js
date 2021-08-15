import React, { Fragment } from 'react';
//import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './screen/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _getQuestions, _getUsers } from './api/_DATA';
import { setuser } from "./redux/userSlice";
import { setQuestion } from './redux/questionSlice';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { authSelectors } from './redux/authSlice';





function App() {
  const authL = useSelector(authSelectors.selectTotal);
  const hist = localStorage.getItem('autUser');
  const dispatch = useDispatch();
  useEffect(() => {
    const handleInitialData = async () => {
      return await Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
          dispatch(showLoading());
          dispatch(setuser(users));
          dispatch(setQuestion(questions));
          dispatch(hideLoading())
        }).catch((error) => {
          console.error(error);
        })
    };
    handleInitialData();


  }, [dispatch]);


  return (

    <div className="container app  d-flex flex-column justify-content-center my-5">
      {((authL === 0) || (hist === undefined)) ? <Login /> :


        <Fragment >
          <Header />
          <Home />

        </Fragment>}



      <Footer />

    </div>
  );
}

export default App;
