 <template>
	<div>用户{{$route.params.id}}</div>
 </template>
 <script>
	export default {
		mounted(){
			console.log(this.$route);
			console.log("user id="+this.$route.params.id);
		}
	}
 </script>