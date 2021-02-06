import Home from '../views/Home';
import Tool from '../views/Tool';

const routers = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'tool',
    path: '/tool',
    exact: true,
    component: Tool,
  },
];

export default routers;
