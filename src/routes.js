import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const User_dashboard = React.lazy(() => import('./UserSide/Components/user_dashboard/User_dashboard'));
const Holidays = React.lazy(() => import('./components/holidays/Holidays'));
const Users = React.lazy(() => import('./components/tables/Tables'));
const User_profile = React.lazy(() => import('./UserSide/Components/User_profile/User_profile'))
const Forgot_password = React.lazy(() => import('./UserSide/Components/forget_password/Forgot_password'))
const Leave_list = React.lazy(() => import('./UserSide/Components/Leave_list/Leave_list'))

const routes = [
  { path: '/user_dashboard', exact: true , name: 'User_dashboard', component: User_dashboard },
  { path: '/User_profile', exact: true , name: 'User_profile', component: User_profile },
  { path: '/dashboard', exact: true , name: 'Dashboard', component: Dashboard },
  { path: '/holidays', exact: true , name: 'Holidays', component: Holidays },
  { path: '/users', exact: true , name: 'Users', component: Users },
  { path: '/Forgot_password', exact: true , name: 'Forgot_password', component: Forgot_password },
  { path: '/Leave_list', exact: true , name: 'Leave_list', component: Leave_list },
];

export default routes;
