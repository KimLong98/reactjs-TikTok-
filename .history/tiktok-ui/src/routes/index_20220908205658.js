import Home from '~/pages/Home';
import Following from '~/pages/Following';

const publicRouters = [
   {path:'/',component:Home},
   {path:'/',component:Following},
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
