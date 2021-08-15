import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnswerView from '../screen/AnswerView';
import LeaderBoard from '../screen/LeaderBoard';
import NewQuestion from '../screen/NewQuestion';
import NotFound from '../screen/NotFound';
import Pagination from './Pagination';


const Home = () => {
    return (
        <>
        <Switch>
         <Route path='/dashboard' exact render={() => (<Pagination />)} />
              <Route path='/answer/:id' exact render={() => (<AnswerView />)} />
              <Route path='/add' exact render={() => (<NewQuestion />)} />
              <Route path='/leader' exact render={() => (<LeaderBoard />)} />
              <Route path='*' component={NotFound} />
              </Switch>
        
        </> 
    );
}

export default Home;