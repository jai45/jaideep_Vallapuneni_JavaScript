function validate() {
	//alert("how are you");
	var uname=document.getElementById("uname").value;
	var pass=document.getElementById("pass").value;
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uname)))
	{
		alert("You have entered incorrect Email");
		return false;
	}
	if(pass.length<6){
		alert("Password must be of length greater than 6");
		return false;
	}
	return true;
}