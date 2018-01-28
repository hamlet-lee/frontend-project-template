 <template>
	<div>
		<div>首页</div>
		{{$store.state.count}}<br>
		{{count}}
		<button @click="handlePlus">+1</button>
		<button @click="handleRandomAdd">random add</button>
		<Controller></Controller>
		filtered list: {{ filteredList }}
		filtered list new: {{ filteredListNew }}
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<router-link to="/about">跳转到 about</router-link>
		<router-link :to=" getTarget() " replace>跳转到user</router-link>
		<button @click="handleClick">跳转到user</button>
		<button @click="handleClickReplace">跳转到user (replace)</button>
	</div>
 </template>
 <script>
	import Controller from './controller.vue';
	export default {
		components: {Controller},
		computed: {
			count () {
				return this.$store.state.count;
			},
			filteredList (){
				return this.$store.getters.filteredList;
			},
			filteredListNew(){
				return this.$store.getters.filteredListNew;
			}
		},
		methods: {
			handlePlus(){
				this.$store.commit('increment');
			},
			getTarget: function(){
				return "/user/135";
			},
			handleClick: function(){
				this.$router.push('/user/453');
			},
			handleClickReplace: function(){
				this.$router.replace('/user/453');
			},
			handleRandomAdd: function (){
				const num = Math.floor(Math.random() * 100 + 1);
				this.$bus.emit('add', num);
			}
		}
	}
 </script>