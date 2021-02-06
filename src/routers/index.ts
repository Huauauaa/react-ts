import Home from '../views/Home';
import About from '../views/About';
import Demo from '../views/Demo';

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
];

export default routers;
