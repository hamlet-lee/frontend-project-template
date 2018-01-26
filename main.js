import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Routes = [
	{
		path: '/index',
		component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
		path: '/about',
		component: (resolve) => require(['./views/about.vue'], resolve)
	},
	/*{
		path: '/user/:id',
		component: (resolve) => require(['./views/user'], resolve)
	},*/
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

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});