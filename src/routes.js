/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
// core components/views for User layout
import DashboardUser from "views/User/Dashboard.js";

// core components/views for Auth
import Login from "views/Auth/Login.js";
import Register from "views/Auth/Register";

const adminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/camps",
    name: "Campamentos",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Usuarios",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/payments",
    name: "Pagos",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  }
];

const userRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard User",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: DashboardUser,
    layout: "/user"
  }
];

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: Register,
    layout: "/auth"
  }
];

const landingRoutes = [
  {
    path: "/",
    name: "",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: Register,
    layout: "/app"
  }
]
const allRoutes = [...authRoutes, ...userRoutes, ...adminRoutes, ...landingRoutes];

export default allRoutes;
