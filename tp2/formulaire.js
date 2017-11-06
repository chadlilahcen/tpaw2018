function error(){
   var nom,prenom,error,resultat;
       
  
 nom = document.getElementById("lastname").value;
 prenom =document.getElementById("prenom").value;
 error=document.getElementById("error");
resultat=document.getElementById("result");
error.innerHTML=="";
resultat.innerHTML=="";

	if(nom=="")
	{
		document.getElementById("error").removeAttribute("hidden");
		resultat=document.getElementById("error").innerHTML="la saisie du nom "
		document.getElementById("result").setAttribute("hidden","hidden");
	}

  	if(nom.length <=5){
		document.getElementById("error").removeAttribute("hidden");
    		document.getElementById("error").innerHTML="le nom doit avoir au moins 5 caractéres";
		document.getElementById("result").setAttribute("hidden","hidden");
  	}else{
		document.getElementById("result").removeAttribute("hidden");
		document.getElementById("result").innerHTML="bienvenue " +nom;
		document.getElementById("error").setAttribute("hidden","hidden");
	}
}
