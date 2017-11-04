const checkUser=function(i){
	     let rel=/^[0-9a-zA-z_]{6,}$/
          if(rel.test(i)){
          	return true
          }else{
          	return false
          }
}
const checkPassword=function(i){
   let rel=/^[0-9]{6}$/
   if(rel.test(i)){
      return true
   }else{
   	  return false
   }
}
const checkEmail=function(i){
   let rel=/^[0-9a-zA-z_]+@\w{1,}(\.)\w{1,}$/
   if(rel.test(i)){
      return true
   }else{
   	  return false
   }
}
export default{checkUser,checkPassword,checkEmail}