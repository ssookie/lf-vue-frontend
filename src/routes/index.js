import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import DataGridView from '../views/DataGridView.vue';
import ChartView from '../views/ChartView.vue';
import ChartContainer from '../views/ChartContainer.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // 페이지를 다시 로드하지 않고도 URL 탐색 가능
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : url 주소.
            path: '/news',
            // component : url 주소로 갔을때 표시될 컴포넌트.
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            // Router에 라우팅 정보 추가.
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/dataGrid',
            component: DataGridView,
        },
        {
            path: '/localChart',
            component: ChartView,
        },
        {
            path: '/apiChart',
            component: ChartContainer,
        }
    ]
});