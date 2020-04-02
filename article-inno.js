// **************************************************************************Chargement et changement de contenu pour les innovations **************************************************************************//
//au lieu de générer toute la page avec javascript, insérer le contenu généré dans les balises déjà présentes sur l'html, ce sera plus facile pour afficher les images en grand et les fermer


const requeteUsers = fetch('innovations.json');
const url=window.location.search
const detailUrl=url.split("=")
const titre=document.getElementById("Nom-innovation");
const desc=document.getElementById("description");
const categ=document.getElementById("categorie");
const artic=document.getElementById("texte");
const img=document.getElementById("apercu");
const entrep=document.getElementById("entreprise");
const adRue=document.getElementById("adresseRue");
const adLoc = document.getElementById("localite");
const adPays = document.getElementById("pays");
const mail = document.getElementById("mail");
const gsm = document.getElementById("gsm");
const site = document.getElementById("site"); 
const gdImg = document.getElementById("gdImg"); 
const nomInnovationPop=document.querySelector("#nomInnovation"); 
var i=0
var nbId = 0

if(!detailUrl[1]){
    window.location.replace(window.location+"?id=1")
}


requeteUsers
    .then(function(res) { return res.json() })
    .then(function(resultat) {
        // console.log(resultat)
        for(i;i<resultat.length;i++){
            if(detailUrl[1]==resultat[i].id){
            nbId = resultat.length
            titre.innerHTML = resultat[i].innovation;
            nomInnovationPop.innerHTML= resultat[i].innovation;
document.title= "SIW: "+resultat[i].innovation;
            desc.innerHTML = resultat[i].description;

            categ.innerHTML = resultat[i].categorie;

            artic.innerHTML = resultat[i].article;
            
            img.src =resultat[i].photos[0].src 
                  
            
            metadesc = resultat[i].description
            document.querySelector('meta[name="description"]').setAttribute("content", metadesc);

            img.alt=resultat[i].photos[0].alt 
            img.title=resultat[i].photos[0].titre
            //générer les ronds en fonction du nombre d'images
            var photoListe= resultat[i].photos
            for(let i=0;i<photoListe.length;i++){
                const rondPhotos=document.createElement("div");
                rondPhotos.classList.add("rond");
                document.querySelector('#groupeRonds').appendChild(rondPhotos);
            }

            //Quand je clique sur un des ronds générés, il affiche une photo
            //Si la photo est affichée, le rond correspondant sera opaque
            const rondPhotos=document.querySelectorAll(".rond")
            //je déclare ici les ronds que j'ai créé au dessus. Ils ont une place dans un array. Je peux me servir de ca pour aller rechercher la place de la photo dans le json
            for(let j=0;j<rondPhotos.length;j++){
                rondPhotos[j].addEventListener("click",function(e){choixPhoto(img,j,photoListe)})
            }
            rondPhotos[0].classList.add("rondSelected")
            //je dois changer img en rondPhoto a l'intérieur d'une boucle afin qu'il reconnaisse quel rond je prends. Si je clique sur le deuxième rond, il reconnaitra sa position [1]. Il pourra alors aller dans resultat[1]

  
            entrep.innerHTML = resultat[i].entreprise + "</br></br>"+resultat[i].innovateur  + "</br>";

            adRue.innerHTML = resultat[i].rue;
      
            adLoc.innerHTML = resultat[i].localite;
      
            adPays.innerHTML = resultat[i].pays;
            
            mail.innerHTML = resultat[i].mail;
             
            gsm.innerHTML = resultat[i].telephone;
                
            site.innerHTML = resultat[i].site;
            
            }
        }
        // console.log(i);
        // return i
//image a afficher et rond sélectionné
        })
        function choixPhoto(img,j,element){
            const rondPhotos=document.querySelectorAll(".rond")
            img.classList.add("noshowrapide")
            setTimeout(function(){
                img.src=element[j].src
                img.alt=element[j].alt
                img.title=element[j].titre
                img.classList.remove("noshowrapide")
                img.classList.add("show")
            },500)
            
            
            for(let k=0;k<rondPhotos.length;k++){
                if(rondPhotos[k].classList.contains("rondSelected")){
                    rondPhotos[k].classList.remove("rondSelected")
                }
            }
            rondPhotos[j].classList.add("rondSelected")
    }


    img.addEventListener('click',gdImage)

function gdImage(e){

}

// VOTER
const heartIcon= document.querySelector(".heartIcon");
const popupVote=document.querySelector(".popupVote");
const fermerNewsletter = document.querySelector(".IconCroixFermer");
const checkvote=document.getElementById("votecheck");


heartIcon.addEventListener("click", ouvertureVote);

function ouvertureVote(){
    popupVote.style="display:block;"   
}

fermerNewsletter.addEventListener("click",fermerpopUpVote)

function fermerpopUpVote(){
popupVote.classList.add("noshowrapide")
    setTimeout(function(){popupVote.style="display:none;"
    popupVote.classList.remove("noshowrapide")},400)
	
}


const VoteButton=document.querySelector("#VoteButton")
const Voteid = document.querySelector("#Voteid")
const checkboxvoter=document.querySelector("#checkboxvoter")

VoteButton.addEventListener("click",votefunction)

function votefunction(){

    if(checkvote.checked==true){
        if(Voteid.value.includes("@")){
            Voteid.value="";
            Voteid.placeholder=("Vous êtes inscrit!");
            checkboxvoter.style="color:#004181;"
            Voteid.checked=false
        }
        else{
                Newsletterid.placeholder=("Entrez une adresse mail valide");
        }
    }
    else if(Voteid.checked==false){
        checkboxvoter.style="color:red;"
        if(Voteid.value.includes("@")){
        }
        else{
            Voteid.placeholder=("Entrez une adresse mail valide");
        }
    }

}


















//Precedent Suivant
var urltotale=window.location.href
var urltotalesplitee=urltotale.split("?id=")



function idSuivant()
{
    // alert("HEEEEOOOOOO")

    var idNext=Number(urltotalesplitee[1])+1
    if(idNext > nbId){

        window.location.replace("innovations.html")
    }
    else
    {
        window.location.replace(urltotalesplitee[0]+"?id="+idNext)
    }
}

function idPrec()
{
    var idNext=Number(urltotalesplitee[1])-1
    if(idNext <= 0){

        window.location.replace("innovations.html")
    }
    else
    {
        window.location.replace(urltotalesplitee[0]+"?id="+idNext)
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
const fermerNewsletter2 = document.querySelector(".IconCroixFermer2");
const popupNewsletter = document.querySelector(".popupNewsletter");
const bouttonNewsletterinscription = document.querySelector(".bouttonNewsletterinscription");
const newsletterInscription=document.querySelector("#newsletterInscription");
const Newsletterid=document.querySelector("#Newsletterid");
const checkboxNewsletter=document.querySelector("#checkboxNewsletter");


bouttonNewsletterinscription.addEventListener("click", ouvrirpopUpNews)

function ouvrirpopUpNews(){
	popupNewsletter.style="display:block;"
}

fermerNewsletter2.addEventListener("click",fermerpopUpNews2)

function fermerpopUpNews2(){
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








// **************************************************************************newsletter**************************************************************************//

