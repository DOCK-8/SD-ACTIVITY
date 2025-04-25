import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import NotFound from "@/components/NotFound";
import Login from "@/components/Login";
import ChangePassword from "@/components/ChangePassword"

const PublicRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/change-password" component={ChangePassword} />
    <Route component={NotFound} />
  </Switch>
);

export { PublicRoutes, PrivateRoutes };
