
// **************************************************************************recherche**************************************************************************//

const outilrecherche=document.querySelector("#search_SVG");
const searchInput=document.querySelector(".searchInput");


outilrecherche.addEventListener("click", barreDeRechercheApparait)


function barreDeRechercheApparait(){
	if(searchInput.classList.contains('invisibleSearch')){
		searchInput.classList.remove('invisibleSearch')
	}
	else{
		searchInput.classList.remove("slidesearch");
		searchInput.classList.add("noslidesearch");
		setTimeout(function(){
			searchInput.classList.add("slidesearch");
			searchInput.classList.remove("noslidesearch");
			searchInput.classList.add('invisibleSearch')
		},500)
		
	}
	}

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   window.location.replace("resultat-de-recherche.html")
  }
});


// **************************************************************************formulaire de contact**************************************************************************//
var formulaireNom=document.getElementById('Nameid');
var formulaireMail=document.getElementById('Mailid');
var formulaireMessage=document.getElementById('Commentid');
var bouttonEnvoyer=document.getElementById('formulaireEnvoyer');

bouttonEnvoyer.addEventListener("click",envoyerLeMessage)

function envoyerLeMessage(e){
	e.preventDefault()
	
	if(formulaireMail.value.includes("@") && formulaireMessage.value){
		formulaireNom.value="";
		formulaireMessage.value="";
		formulaireMessage.placeholder=("Votre message a bien été envoyé!");
		formulaireMail.placeholder=formulaireMail.value;
		formulaireMail.value="";
	}
	else{
		if(!formulaireMessage.value){
			formulaireMessage.placeholder=("Vous n'avez pas écrit de message.");
		}
		if(!formulaireMail.value || !formulaireMail.value.includes("@")){
			formulaireMail.value="";
			formulaireMail.placeholder=("Entrez une adresse mail valide");
		}
	}
}


// **************************************************************************newsletter**************************************************************************//
const fermerNewsletter = document.querySelector(".IconCroixFermer");
const popupNewsletter = document.querySelector(".popupNewsletter");
const bouttonNewsletterinscription = document.querySelector(".bouttonNewsletterinscription");
const newsletterInscription=document.querySelector("#newsletterInscription");
const Newsletterid=document.querySelector("#Newsletterid");
const checkboxNewsletter=document.querySelector("#checkboxNewsletter");





bouttonNewsletterinscription.addEventListener("click", ouvrirpopUpNews)
function ouvrirpopUpNews(){
	popupNewsletter.style="display:block;"
}
fermerNewsletter.addEventListener("click",fermerpopUpNews)
function fermerpopUpNews(){
	popupNewsletter.classList.add("noshowrapide");
	setTimeout(function(){ popupNewsletter.style="display:none;"
	popupNewsletter.classList.remove("noshowrapide");},500)
}

newsletterInscription.addEventListener("click",inscrireAlaNewsLetter)
const newsid = document.querySelector("#abonnement");
function inscrireAlaNewsLetter(){
if(newsid.checked==true){
	if(Newsletterid.value.includes("@")){
		Newsletterid.value="";
        Newsletterid.placeholder=("Vous êtes inscrit!");
		checkboxNewsletter.style="color:#004181;"
		newsid.checked=false
    }
	else{
			Newsletterid.placeholder=("Entrez une adresse mail valide");
	}
}
else if(newsid.checked==false){
	checkboxNewsletter.style="color:red;"
	if(Newsletterid.value.includes("@")){
    }
	else{
			Newsletterid.placeholder=("Entrez une adresse mail valide");
	}
}
}






