//******************************************************Changement de navigation en fonction d'ou on se trouve sur la page************************************************//

var myNav = document.getElementById('mynav');
window.addEventListener("scroll", function () { 
    // console.log(window.scrollY)
    if (window.scrollY >= 400 ) {
		myNav.classList.remove("nav-transparent");
        myNav.classList.add("nav-colored");
        
    } 
    else {
		myNav.classList.remove("nav-colored");
        myNav.classList.add("nav-transparent");
    }
});

var myNavLinks=document.querySelectorAll('.myNavLink');

for(let i=0; i<myNavLinks.length; i++){
    myNavLinks[i].addEventListener("load", scrollAnchors);
}


//**************************************************************************Code pour smooth scrool**************************************************************************//

//Code de https://perishablepress.com/vanilla-javascript-scroll-anchor/ //

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('nav a, .lienAncre');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top -40);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		// if (distanceToTop(targetAnchor) === 0 || atBottom) {
		// 	targetAnchor.tabIndex = '-1';
		// 	targetAnchor.focus();
		// 	window.history.pushState('', '', targetID);
		// 	clearInterval(checkIfDone);
		// }
	}, 100);
}

// **************************************************************************Code decompte salon **************************************************************************//

// var today= new Date()
// console.log(today)
// var thatDay = new Date("April 8, 2020 00:00:00");


var dateCalendrier=document.querySelector(".dateCalendrier")
var expoDay, today, theDay, diff, days; //declaration de variables
expoDay = [8,4]; //28 octobre//
today = new Date(); //c'est la date d'aujourd'hui
theDay = new Date(today.getFullYear(),expoDay[1]-1,expoDay[0]);

diff = theDay.getTime()-today.getTime();
days = Math.ceil(diff/(1000*60*60*24));
if (days !=0){
	if(days >0){
	dateCalendrier.innerHTML="J-" +days;}
	if(days <0){
		dateCalendrier.innerHTML="Fini";
	}
}
else{
	dateCalendrier.innerHTML="Jour J!"
}


// **************************************************************************Conferenciers**************************************************************************//
var conferenciersContenu=document.querySelectorAll(".confBig");
var confContenu1=document.getElementById("conf1");
var confContenu2=document.getElementById("conf2");
var confContenu3=document.getElementById("conf3");
var confContenu4=document.getElementById("conf4");

var conferenciersSelect=document.querySelectorAll(".confSmall");


for(let m=0;m<conferenciersSelect.length;m++){
	console.log(conferenciersSelect[m])
	conferenciersSelect[m].addEventListener("click",function(){
		boxConferencier(m)
	})
}
function boxConferencier(m){
	for(let i=0;i<conferenciersContenu.length;i++){
		conferenciersContenu[i].classList.remove("show");
		conferenciersContenu[i].classList.add("noshowrapide");
		setTimeout(function(){
			conferenciersContenu[i].classList.add("show");
			conferenciersContenu[i].classList.remove("noshowrapide");
			conferenciersContenu[i].style="display:none"
		},400)
		}
setTimeout(function(){
	switch (m) {
		case 0:
			confContenu1.style="display:flex"
		  break;
		case 1:
			confContenu2.style="display:flex"
			break;
		case 2:
			confContenu3.style="display:flex"
			break;
		case 3:
			confContenu4.style="display:flex"
		  break;
	  }
},400)

}

// **************************************************************************Forfait**************************************************************************//
var tousLesForfaits=document.querySelectorAll(".forfait")
var forfaitVisiteur=document.querySelector("#visiteur");
var forfaitExposant=document.querySelector("#Exposant");
var forfaitGdEntreprise=document.querySelector("#GdEntreprise");
var forfaitSponsor=document.querySelector("#Sponsor");


var bouttonVisiteur=document.querySelector(".bouttonVisiteur");
var bouttonExposant=document.querySelector(".bouttonExposant");
var bouttonGdEntreprise=document.querySelector(".bouttonGdEntreprise");
var bouttonSponsor=document.querySelector(".bouttonSponsor");
var tousLesBoutons=[bouttonVisiteur, bouttonExposant,bouttonGdEntreprise,bouttonSponsor];


var bouttonGlissant=document.querySelector(".part ul");
//*** */
bouttonExposant.addEventListener("click",afficherExposant)
function afficherExposant(e){
	hiddeForfaits()
	setTimeout(function(){
		forfaitExposant.style="display:flex"
	},500)
	bouttonExposant.style.color="white"
	bouttonGlissant.style="background-position:32%"
}
//*** */
bouttonVisiteur.addEventListener("click",afficherVisiteur)
function afficherVisiteur(e){
	hiddeForfaits()
	setTimeout(function(){
		forfaitVisiteur.style="display:flex"
	},500
	)
	bouttonVisiteur.style.color="white"
	bouttonGlissant.style="background-position:-1%"
}
//*** */
bouttonGdEntreprise.addEventListener("click",afficherGdEntreprise)
function afficherGdEntreprise(e){
	hiddeForfaits()
	setTimeout(function(){
		forfaitGdEntreprise.style="display:flex"
	},500
	)
	bouttonGdEntreprise.style.color="white"
	bouttonGlissant.style="background-position:67%"
}
//*** */
bouttonSponsor.addEventListener("click",afficherSponsor)
function afficherSponsor(e){
	hiddeForfaits()
	setTimeout(function(){
		forfaitSponsor.style="display:flex"
	},500
	)
	bouttonSponsor.style.color="white"
	bouttonGlissant.style="background-position:101%"
}
	
function hiddeForfaits(){
	for(let i=0;i<tousLesForfaits.length;i++){
		tousLesForfaits[i].classList.remove("slide")
		tousLesForfaits[i].classList.add("noshowrapide")
		tousLesBoutons[i].style.color="#a1a4a9"
		setTimeout(function(){
			tousLesForfaits[i].classList.remove("noshowrapide")
			tousLesForfaits[i].classList.add("slide")
			tousLesForfaits[i].style="display:none"
		},500)
		
		
		
		
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




// **************************************************************************apparition au fur et a mesure des elements de la page**************************************************************************//

const $ = document.querySelector.bind(document);
window.addEventListener('scroll', scroll);

// $('h1').classList.add('slide');
// $('h2').classList.add('slide');



function scroll(){

	let apos = $('#missionsforapparition').getBoundingClientRect();
	let innovatechETsalon = $('#innovatechETsalon').getBoundingClientRect();
	let categorieanim = $('#categorieanim').getBoundingClientRect();
	let tpos = $('#progBox').getBoundingClientRect();
	let animationscrollparticiper = $('#visiteur').getBoundingClientRect();
	let sponsorapparition = $('#sponsor').getBoundingClientRect();
	let ticketpresseforscroll = $('#ticketpresseforscroll').getBoundingClientRect();
	let confSmallBox = $('#confSmallBox').getBoundingClientRect();
	let confBigBox = $('#confBigBox').getBoundingClientRect();

	if(apos.top < window.innerHeight && apos.bottom >= 0) {
		$('#missionsforapparition').classList.remove('noshow');
        $('#missionsforapparition').classList.add('show');
	}
	
	if(innovatechETsalon.top < window.innerHeight && innovatechETsalon.bottom >= 0) {
		$('#innovatechETsalon').classList.remove('noshow');
        $('#innovatechETsalon').classList.add('show');
	}
	
	if(categorieanim.top < window.innerHeight && categorieanim.bottom >= 0) {
		$('#categorieanim').classList.remove('noshow');
        $('#categorieanim').classList.add('show');
    }

    if(tpos.top < window.innerHeight && tpos.bottom >= 0 ) {
		$('#progBox').classList.remove('noshow');
		$('#progBox').classList.add('show');
	}

	if(confSmallBox.top < window.innerHeight && confSmallBox.bottom >= 0 ) {
		$('#confSmallBox').classList.remove('noshow');
		$('#confSmallBox').classList.add('show');
	}

	if(confBigBox.top < window.innerHeight && confBigBox.bottom >= 0 ) {
		$('#confBigBox').classList.remove('noshow');
		$('#confBigBox').classList.add('show');
	}

	if(animationscrollparticiper.top < window.innerHeight && animationscrollparticiper.bottom >= 0 ) {
		$('#visiteur').classList.remove('noshow');
		$('#visiteur').classList.add('slide');
	}
	if(sponsorapparition.top < window.innerHeight && sponsorapparition.bottom >= 0 ) {
		$('#sponsor').classList.remove('noshow');
		$('#sponsor').classList.add('show');
	}
	if(ticketpresseforscroll.top < window.innerHeight && ticketpresseforscroll.bottom >= 0 ) {
		$('#ticketpresseforscroll').classList.remove('noshow');
		$('#ticketpresseforscroll').classList.add('slide');
	}




	if(apos.top >= window.innerHeight || apos.bottom < 0) {
		$('#missionsforapparition').classList.remove('show');
		$('#missionsforapparition').classList.add('noshow');
	}
	
	if(innovatechETsalon.top >= window.innerHeight || innovatechETsalon.bottom < 0) {
		$('#innovatechETsalon').classList.remove('show');
		$('#innovatechETsalon').classList.add('noshow');
	}
	
	if(categorieanim.top >= window.innerHeight || categorieanim.bottom < 0) {
		$('#categorieanim').classList.remove('show');
		$('#categorieanim').classList.add('noshow');
    }
    if(tpos.top >= window.innerHeight || tpos.bottom < 0 ) {
		$('#progBox').classList.remove('show');
		$('#progBox').classList.add('noshow');
	}

	if(confSmallBox.top >= window.innerHeight || confSmallBox.bottom < 0 ) {
		$('#confSmallBox').classList.remove('show');
		$('#confSmallBox').classList.add('noshow');
	}

	if(confBigBox.top >= window.innerHeight || confBigBox.bottom < 0 ) {
		$('#confBigBox').classList.remove('show');
		$('#confBigBox').classList.add('noshow');
	}



	if(animationscrollparticiper.top >= window.innerHeight || animationscrollparticiper.bottom < 0 ) {
		$('#visiteur').classList.remove('slide');
		$('#visiteur').classList.add('noshow');
	}
	if(sponsorapparition.top >= window.innerHeight || sponsorapparition.bottom < 0 ) {
		$('#sponsor').classList.remove('show');
		$('#sponsor').classList.add('noshow');
	}
	if(ticketpresseforscroll.top >= window.innerHeight || ticketpresseforscroll.bottom < 0 ) {
		$('#ticketpresseforscroll').classList.remove('slide');
		$('#ticketpresseforscroll').classList.add('noshow');
	}



}



// **************************************************************************presse slider**************************************************************************//


const btn_switch=document.querySelectorAll(".btn_switch");
const articlelistepresse=document.querySelectorAll(".ticketContainerTriplePresse");
console.log(btn_switch)
for(let x=0;x<btn_switch.length;x++){
	btn_switch[x].addEventListener("click", function(e){
		fctcacherlistearticle(e, x);
	  })
}
function fctcacherlistearticle(e, x){
if(!e.target.classList.contains("pressebuttonselected")){
	for(let p=0;p<articlelistepresse.length;p++){
		btn_switch[p].classList.remove("pressebuttonselected");

		articlelistepresse[p].classList.remove("slide");
		articlelistepresse[p].classList.add("noshowrapide");
		setTimeout(function(){
			articlelistepresse[p].classList.remove("noshowrapide");
			articlelistepresse[p].classList.add("slide");
			articlelistepresse[p].classList.add("cacher");
		},450)
	}

	setTimeout(function(){
		articlelistepresse[x].classList.remove("cacher");
	},450)

e.target.classList.add("pressebuttonselected");
	
}}





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

