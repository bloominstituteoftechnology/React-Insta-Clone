export const chgeckAuth = () =>{
	if(!localStorage.getItem('user')){
		return false
	}else{
		return true
	}
}
