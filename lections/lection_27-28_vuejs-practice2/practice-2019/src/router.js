import Vue from 'vue'
import VueRouter from 'vue-router'
import CoinsSorter from '@/view/CoinsSorter';
import Example from '@/view/Example';
import ViewB from '@/components/ViewB';
import ViewA from '@/components/ViewA';
import FieldA from '@/components/FieldA';
import Name from '@/components/Name';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: CoinsSorter,
                popup: FieldA
            }
        },
        {
            path: '/example',
            name: 'example',
            components: {
                default: Example
            },
            children: [
                {
                    path: 'a',
                    components: {
                        default : ViewA
                    },
                },
                {
                    path: 'b',
                    component: ViewB
                }
            ]
        },
        {
            path: '/g-foo',
            name: 'foo',
            component: ViewB
        },
        {
            path: '/name/:id',
            name: 'nameRoute',
            component: Name
        }
    ]
});