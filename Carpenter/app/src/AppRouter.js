import React from "react";
import { Switch, Route } from "react-router-dom";
import AppUrls from './model/constants/AppUrls';
import Home from './views/home/Home';

const AppRouter = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path={AppUrls.Home.Root} component={Home}/>
      {/* <Route path={AppUrls.Assets.Root} component={AssetsSearch}/>
      <Route path={AppUrls.About.Root} component={About}/>
      <Route path={AppUrls.Contact.Root} component={Contact}/>
      <Route path={AppUrls.Users.Root} component={Users}/>`
      <Route path={AppUrls.Login.Root} component={SignIn}/> */}
    </Switch>
);

export default AppRouter;