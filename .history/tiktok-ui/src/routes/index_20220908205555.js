import Home from '~/pages/Home';
import Following from '~/pages/Following';

const publicRouters = [
    {path="/" element={<Home />}
    {path="/Following" element={<Following />}
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
