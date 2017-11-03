<template>
 <div class="reg">
  <div class="item">
  	<label>User:</label>
  	<input type="" v-model="user">
  	<span>{{errorUser}}</span>
  </div>
  <div class="item">
  	<label>Email:</label>
  	<input type="" v-model="email">
  </div>
  <div class="item">
  	<label>Password:</label>
  	<input type="" v-model="password">
  </div>
  <div class="item">
  	<label>ConfirmPassword:</label>
  	<input type="" v-model="confirmPassword">
  </div>
  <div class="item">
  	<button>Reg</button>
  </div>	
 </div>	
</template>
<script type="text/javascript">
 export default{

 	data(){
 		return {
           user:'',
           email:'',
           password:'',
           confirmPassword:''
 		}
 	},
 	methods:{
        checkUser(i){
          let rel=/^[0-9a-zA-z_]{6,}$/
          if(rel.test(i)){
          	return true
          }else{
          	return false
          }
        },
 	},
 	computed:{
      errorUser:function(){
      	let error='';
      	if(this.checkUser(this.user)){
           error+=''
      	}else{
      	   error='请输入至少6位的数字或英文字母'
      	}
      	return error
      }
 	},
 	components:{}
 }	
</script>
<style type="text/css" scoped>
 .item{margin:5px 8px;font-size:16px;}	
 .item label{display:inline-block; width:135px;}
 .item input{border:1px solid #ccc;height:25px;width:200px;}
 .item button {display:block; margin:0px auto;width:75px;height:31px;border-radius:5px;}
</style>