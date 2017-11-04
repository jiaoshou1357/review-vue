<template>
 <div class="reg">
  <div class="item">
  	<label>User:</label>
  	<input type="" v-model="user">
  	<span class="error">{{errorUser.error}}</span>
  </div>
  <div class="item">
  	<label>Email:</label>
  	<input type="" v-model="email">
    <span class="error">{{errorEmail.error}}</span>
  </div>
  <div class="item">
  	<label>Password:</label>
  	<input type="password" v-model="password">
    <span class="error">{{errorPassword.error}}</span>
  </div>
  <div class="item">
  	<label>ConfirmPassword:</label>
  	<input type="password" v-model="confirmPassword">
    <span class="error">{{errorConfirmPassword.error}}</span>
  </div>
  <div class="item">
  	<button @click="submit">Reg</button>
  </div>	
 </div>	
</template>
<script type="text/javascript">
import verif from '../../basejs/verification'
 export default{
  mounted(){
     console.log(verif.checkUser)
  },
 	data(){
 		return {
           user:'',
           email:'',
           password:'',
           confirmPassword:'',
           firstEnterUser:true,
           firstEnterEmail:true,
           firstEnterPassword:true,
           firstEnterConfirmPassword:true
 		}
 	},
 	methods:{
       submit(){
          if(this.errorUser.status
            &&this.errorEmail.status
            &&this.errorPassword.status
            &&this.errorConfirmPassword.status
            ){
              let mes={
                    user:this.user,
                    password:this.password,
                    email:this.email
                  }
                this.$http.post('/user',mes)
                .then(function(data){
                  console.log(data)
                },function(error){
                  console.log('post failed')
                })
             }else{
               
             }
       } 
 	},
 	computed:{
      errorUser:function(){
      	let error,status;
        if(verif.checkUser(this.user)){
         error=''
         status=true
        }else{
           error='请输入至少6位的数字或英文字母'
        }
        if(this.firstEnterUser){
          error=''
          this.firstEnterUser=false
        }
      	return {error,status}
      },
      errorEmail:function(){
        let error,status;
        if(verif.checkEmail(this.email)){
          error=""
          status=true
        }else{
          error='请输入正确的邮箱地址'
        }
        if(this.firstEnterEmail){
          error=""
          this.firstEnterEmail=false
        }
        return {error,status}
      },
      errorPassword:function(){
        let error,status;
        if(verif.checkPassword(this.password)){
          error=""
          status=true
        }else{
          error='密码由六位数字组成'
        }
        if(this.firstEnterPassword){
          error=""
          this.firstEnterPassword=false
        }
        return {error,status}
      },
      errorConfirmPassword:function(){
        let error,status;
        if(verif.checkPassword(this.password)&&this.password==this.confirmPassword){
          error=''
          status=true
        }else{
          error='密码不一致'
        }
        if(this.firstEnterConfirmPassword){
          error=""
          this.firstEnterConfirmPassword=false
        }
        return {error,status}
      }
 	},
 	components:{}
 }	
</script>
<style type="text/css" scoped>
 .reg{min-width:500px;}
 .item{margin:5px 8px;font-size:16px;}	
 .item label{display:inline-block; width:135px;}
 .item input{border:1px solid #ccc;height:25px;width:200px;}
 .item button {display:block; margin:0px auto;width:75px;height:31px;border-radius:5px;}
 .error{font-size:12px;color:red;word-break:break-all;display:inline-block;float:right;width:125px;}
</style>