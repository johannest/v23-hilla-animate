import {Route, Router} from '@vaadin/router';
import "./main-view";
import "./about-view";
import "./home-view";
import {Flow} from '@vaadin/flow-frontend';

const {serverSideRoutes} = new Flow({
    imports: () => import('../target/frontend/generated-flow-imports')
});

export const routes: Route[] = [
    {
        path: '/',
        component: 'main-view',
        animate: true,
        children: [
            {path: '/home', component: 'home-view', animate: true},
            {path: '/about', component: 'about-view', animate: true},
        ]
    },
];
export const router = new Router(
    document.querySelector('#outlet'));
router.setRoutes(routes);



