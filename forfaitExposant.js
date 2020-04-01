const url=window.location.search;
const detailUrl=url.split("=");
const ticketExposant= document.querySelectorAll(".ticketExposant");
const ticketEntreprise= document.querySelector(".ticketEntreprise");
const ticketSponsor= document.querySelectorAll(".ticketSponsor");
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");

if (detailUrl[1]=="exposantwallon"){
    console.log('exposant wallon')
    ticketExposant[0].style="display:flex"
}

if (detailUrl[1]=="exposantbrabant"){
    ticketExposant[1].style="display:flex"
}


if (detailUrl[1]=="grandeentreprise"){
    ticketEntreprise.style="display:flex"
}

if (detailUrl[1]=="sponsorBronze"){
    ticketSponsor[0].style="display:flex"
    h1.innerText="Souhaitez-vous sponsoriser le salon?"
    h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"
}

if (detailUrl[1]=="sponsorArgent"){
    ticketSponsor[1].style="display:flex"
    h1.innerText="Souhaitez-vous sponsoriser le salon?"
    h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"
}

if (detailUrl[1]=="sponsorOr"){
    ticketSponsor[2].style="display:flex"
    h1.innerText="Souhaitez-vous sponsoriser le salon?"
    h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"
}


console.log(ticketSponsor)








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



// **************************************************************************formulaire d'inscription**************************************************************************//


var formulaireNom1=document.getElementById('NameExposantid');
var formulaireEntreprise1=document.getElementById('EntrepriseExposantid');
var formulaireMail1=document.getElementById('MailExposantid');
var formulaireMessage1=document.querySelector("textarea");
var bouttonEnvoyer1=document.getElementById('formulaireEnvoyer2');
var selectPME=document.getElementById('PMEWallonneExposant');


bouttonEnvoyer1.addEventListener("click",envoyerLeMessage1)

function envoyerLeMessage1(e){
	e.preventDefault()
	
	if(formulaireMail1.value.includes("@") && formulaireMessage1.value){
		formulaireNom1.value="";
		formulaireMessage1.value="";
		formulaireNom1.value="";
		formulaireEntreprise1.value="";
		formulaireMessage1.placeholder=("Votre message a bien été envoyé!");
		formulaireMail1.value="";
		formulaireMail1.value="";
		selectPME.value=""
	}
	
	else{
		if(!formulaireMessage1.value){
			formulaireMessage1.placeholder=("Vous n'avez pas écrit de message*");
		}
		if(!formulaireMail1.value || !formulaireMail.value.includes("@")){
			formulaireMail1.value="";
			formulaireMail1.placeholder=("Entrez une adresse mail valide*");
		}
	}
}


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



