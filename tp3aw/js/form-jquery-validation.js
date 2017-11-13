
$(document).ready(function () { //pour chargement de la page
   
       $('#button').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#name').val() == "" || 
		$('#prenom').val() == "" || 
		$('#date').val() == "" || 
		$('#adresse').val() == "" || 
		$('#mail').val() == "") {
   
               $('#myModal').modal("show");
           }
           else {
               $(".modal-body").html('<p>Vous etes nés le '+$('#date').val()+'</p> <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#adresse').val()+'&markers='+$('#adresse').val()+'&size=800x400&zoom=13"/>');
               $(".modal-title").text("Bienvenue "+$("#name").val());
               $('#myModal').modal("show");
   
           }
   
       });
   })
