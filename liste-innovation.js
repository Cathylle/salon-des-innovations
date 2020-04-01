// **************************************************************************Chargement et changement de contenu pour les innovations **************************************************************************//
const requeteUsers = fetch('innovations.json');
const url=window.location.search
console.log(url)
const h1 = document.querySelector("h1")
// const detailUrl=url.split("=")
// console.log(url) --> pour retrouver la categorie et afficher le contenu qu'il faut grace a un if en fonction de l'url
const ulLien=document.querySelectorAll(".sectionInnoListe>li>a")
console.log(ulLien)

const li=Array.from (document.querySelectorAll("li"))
requeteUsers
    .then(function(res) { return res.json() })
    .then(function(resultat) {
if(!url){
    ulLien[8].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            const box = document.createElement('div');
            box.classList.add(""+resultat[i].categorie+""+[i]);
            box.classList.add("innovationsToutes");
            box.classList.add("ticketBox");
            
            document.querySelector('.wrapperListeInno').appendChild(box);

            const img = document.createElement('img');
            img.classList.add('apercu');
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(img);
            img.src =resultat[i].miniature
            img.alt =resultat[i].alt
            
            const titre = document.createElement('h2');
            titre.classList.add('innovation');
            titre.innerHTML = resultat[i].innovation;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(titre);

            const entrep = document.createElement('h4');
            entrep.classList.add('entreprise');
            entrep.innerHTML = resultat[i].entreprise;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(entrep);

            const desc = document.createElement('h3');
            desc.classList.add('description');
            desc.innerHTML = resultat[i].description;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(desc);
            
            const lien = document.createElement('a');
            lien.classList.add('lien'+[i]);
            lien.classList.add("btn_blue");
            lien.href = resultat[i].lien;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(lien);
            const bouttonLien = document.createElement('button');
            bouttonLien.classList.add("btn_blue");
            bouttonLien.innerHTML="En lire plus";
            document.querySelector(".lien"+[i]).appendChild(bouttonLien);    

            
            
        }
        }
else{
    const detailUrl=url.split("=")
    console.log(detailUrl)
    switch(detailUrl[1]){
        case "1":console.log("Agroalimentaire");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'AgroAlimentaire</span>"
        colorUl=0
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Agroalimentaire"){
                
            apparitionInno(i, resultat)          
        }}
        break;
        case "2":console.log("Logistique");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Logistique</span>"
        colorUl=1
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Logistique"){
                apparitionInno(i, resultat)
        }}
        break;
        case "3":console.log("Sante");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Santé</span>"
        colorUl=2
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Sante"){
                
                apparitionInno(i, resultat)       
        }}
        break;
        case "4":console.log("Construction");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Construction</span>"
        colorUl=3
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Construction"){
                
                apparitionInno(i, resultat)        
        }}
        break;
        case "5":console.log("Environnement");
        h1.innerHTML="Innovons dans le domaine de </br> <span class=domaineInno>l'Environnement</span>"
        colorUl=4
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Environnement"){
                
                apparitionInno(i, resultat) 
        }}
        break;
        case "6":console.log("Industrie");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'Industrie</span>"
        colorUl=5
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Industrie"){
                
                apparitionInno(i, resultat)    
        }}
        break;
        case "7":console.log("Informatique");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'Informatique</span>"
        colorUl=6
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Informatique"){

            apparitionInno(i, resultat)
        }}
        break;
        case "8":console.log("Vie Quotidienne");
        h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Vie Quotidienne</span>"
        colorUl=7
        ulLien[colorUl].style.color="#fc752b"
        for(var i=0;i<resultat.length;i++){
            if(resultat[i].categorie=="Quotidienne"){
            
            apparitionInno(i, resultat)   
        }}
        break;
    }}})



        function apparitionInno(i, resultat){
            const box = document.createElement('div');
            box.classList.add(""+resultat[i].categorie+""+[i]);
            box.classList.add("innovationsToutes");
            box.classList.add("ticketBox");
            document.querySelector('.wrapperListeInno').appendChild(box);

            const img = document.createElement('img');
            img.classList.add('apercu');
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(img);
            img.src =resultat[i].miniature
            img.alt =resultat[i].alt
            
            const titre = document.createElement('h2');
            titre.classList.add('innovation');
            titre.innerHTML = resultat[i].innovation;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(titre);

            const entrep = document.createElement('h4');
            entrep.classList.add('entreprise');
            entrep.innerHTML = resultat[i].entreprise;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(entrep);

            const desc = document.createElement('h3');
            desc.classList.add('description');
            desc.innerHTML = resultat[i].description;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(desc);

            const lien = document.createElement('a');
            lien.classList.add('lien'+[i]);
            lien.classList.add("btn_blue");
            lien.href = resultat[i].lien;
            document.querySelector("."+resultat[i].categorie+""+[i]).appendChild(lien);
            const bouttonLien = document.createElement('button');
            bouttonLien.classList.add("btn_blue");
            bouttonLien.innerHTML="En lire plus";
            document.querySelector(".lien"+[i]).appendChild(bouttonLien);            
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



