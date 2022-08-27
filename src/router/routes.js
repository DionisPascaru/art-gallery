import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    }
]