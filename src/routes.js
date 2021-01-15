import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import AddNewTariff from "./views/AddNewTariff";
import AddNewEvent from "./views/AddNewEvent";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import PostsList from "./views/PostsList";
import TariffsList from "./views/TariffsList";
import EventsList from "./views/EventsList";
import BlogPosts from "./views/BlogPosts";
import EditPost from "./views/EditPost";
import EditEvent from "./views/EditEvent";
import EditTariff from "./views/EditTariff";
import HomeLogin from "./components/Login/HomeLogin";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/posts-list" />
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/add-new-tariff",
    layout: DefaultLayout,
    component: AddNewTariff
  },
  {
    path: "/add-new-event",
    layout: DefaultLayout,
    component: AddNewEvent
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/posts-list",
    layout: DefaultLayout,
    component: PostsList
  },
  {
    path: "/tariffs-list",
    layout: DefaultLayout,
    component: TariffsList
  },
  {
    path: "/events-list",
    layout: DefaultLayout,
    component: EventsList
  },
  {
    path: "/edit-post/:id",
    layout: DefaultLayout,
    component: EditPost
  },
  {
    path: "/edit-event/:id",
    layout: DefaultLayout,
    component: EditEvent
  },
  {
    path: "/edit-tariff/:id",
    layout: DefaultLayout,
    component: EditTariff
  },
  {
    path: "/home-login",
    layout: DefaultLayout,
    component: HomeLogin
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/sign-up",
    layout: DefaultLayout,
    component: SignUp
  }
];
