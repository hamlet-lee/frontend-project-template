 <template>
	<div>
		<div>首页</div>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<router-link to="/about">跳转到 about</router-link>
		<router-link :to=" getTarget() " replace>跳转到user</router-link>
		<button @click="handleClick">跳转到user</button>
		<button @click="handleClickReplace">跳转到user (replace)</button>
	</div>
 </template>
 <script>
	export default {
		methods: {
			getTarget: function(){
				return "/user/135";
			},
			handleClick: function(){
				this.$router.push('/user/453');
			},
			handleClickReplace: function(){
				this.$router.replace('/user/453');
			}
		}
	}
 </script>