import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Bar from "./components/Bar";
import Line from "./components/Line";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
       <Switch>
         {/*<Route path="/"  component={IndexPage}/>*/}
         <IndexPage path='/' component={IndexPage}>
           <Route path='/bar' component={Bar}/>
           <Route path='/line' component={Line}/>
           <Redirect to='/bar'/>
         </IndexPage>
       </Switch>
    </Router>
  );
}
{/*<IndexPage path='/IndexPage' component={IndexPage}>*/}
{/*  <Route path='/IndexPage/bar' component={Bar}/>*/}
{/*  <Route path='/IndexPage/Line' component={Line}/>*/}
{/*</IndexPage>*/}
export default RouterConfig;
