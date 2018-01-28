import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Bus from './vue-bus';
import './style.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Bus);

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

const store = new Vuex.Store({
	//vuex 配置
	state: {
		count: 0,
		list: [1,5,8,10,30]
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	},
	getters: {
		filteredList: state => {
			return state.list.filter( item => item < 10);
		},
		filteredListNew: (state, getters) => {  //依赖另一个getter
			var list = getters.filteredList;
			return list[list.length - 1];
		}
	}
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App)
});