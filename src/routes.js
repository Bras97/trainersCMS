import React, {useState} from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import  LoginLayout  from "./layouts/LoginLayout";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import AddNewTariff from "./views/AddNewTariff";
import AddNewEvent from "./views/AddNewEvent";
import PostsList from "./views/PostsList";
import TariffsList from "./views/TariffsList";
import EventsList from "./views/EventsList";
import EditPost from "./views/EditPost";
import EditEvent from "./views/EditEvent";
import EditTariff from "./views/EditTariff";
import ReportInfo from "./views/ReportInfo";
import ReportsList from "./views/ReportsList";
import UsersList from "./views/UsersList";
import CitiesList from "./views/CitiesList";
import FacultiesList from "./views/FacultiesList";
import HomeLogin from "./components/Login/HomeLogin";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" /> 
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
    path: "/info-report/:id",
    layout: DefaultLayout,
    component: ReportInfo
  },
  {
    path: "/reports-list",
    layout: DefaultLayout,
    component: ReportsList
  },
  {
    path: "/home-login",
    layout: LoginLayout,
    component: HomeLogin
  },
  {
    path: "/login",
    layout: LoginLayout,
    component: Login
  },
  {
    path: "/sign-up",
    layout: LoginLayout,
    component: SignUp
  },
  {
    path: "/users-list",
    layout: DefaultLayout,
    component: UsersList
  },
  {
    path: "/user-profile/:id",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/cities-list",
    layout: DefaultLayout,
    component: CitiesList
  },
  {
    path: "/faculties-list",
    layout: DefaultLayout,
    component: FacultiesList
  }
];
