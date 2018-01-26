import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import './style.css';

Vue.use(VueRouter);

const Routes = [
	{
		path: '/index',
		component: (resolve) => require(['./views/index.vue'], resolve),
		meta: {
			title: "首页"
		}
	},
	{
		path: '/about',
		component: (resolve) => require(['./views/about.vue'], resolve),
		meta: {
			title: "关于"
		}
	},
	{
		path: '/user/:id',
		component: (resolve) => require(['./views/user.vue'], resolve),
		meta: {
			title: "用户"
		}
	},
	{
		path: '*',
		redirect: '/index'
	}
];

const RouterConfig = {
	mode: 'history',
	routes: Routes
};

const router = new VueRouter(RouterConfig);
router.beforeEach( (to,from,next) => {
	window.document.title = to.meta.title;
	next();
});
router.afterEach( (to,from,next) => {
	window.scrollTo(0,0);
});
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});