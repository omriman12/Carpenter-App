import React from "react";
import { Switch, Route } from "react-router-dom";
import AppUrls from './model/constants/AppUrls';
import Home from './views/home/Home';
import AssetsSearch from './views/assetsSearch/AssetsSearch';

const AppRouter = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path={AppUrls.Home.Root} component={Home}/>
      <Route path={AppUrls.Assets.Root} component={AssetsSearch}/>
    </Switch>
);

export default AppRouter;