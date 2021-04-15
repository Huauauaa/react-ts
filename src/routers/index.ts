import Home from '../views/Home';
import About from '../views/About';
import Demo from '../views/Demo';
import Login from '../views/Login';

const routers = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: About,
  },
  {
    name: 'demo',
    path: '/demo',
    exact: true,
    component: Demo,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: Login,
  },
];

export default routers;
