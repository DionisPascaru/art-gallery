import GalleryView from '../views/GalleryView';
import AboutView from '../views/AboutView';
import EventsView from '../views/EventsView';
import CommintSoonView from '../views/CommingSoonView';
import ContactView from '../views/ContactView';

export default [
    {
        path: '/',
        name: 'GalleryView',
        component: GalleryView
    },
    {
        path: '/events',
        name: 'EventsView',
        component: EventsView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/comming-soon',
        name: 'CommingSoonView',
        component: CommintSoonView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    }
]