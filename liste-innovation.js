const requeteUsers=fetch("innovations.json"),url=window.location.search,h1=document.querySelector("h1"),ulLien=document.querySelectorAll(".sectionInnoListe>li>a"),li=Array.from(document.querySelectorAll("li"));function apparitionInno(e,n){const o=document.createElement("div");o.classList.add(""+n[e].categorie+[e]),o.classList.add("innovationsToutes"),o.classList.add("ticketBox"),document.querySelector(".wrapperListeInno").appendChild(o);const a=document.createElement("img");a.classList.add("apercu"),document.querySelector("."+n[e].categorie+[e]).appendChild(a),a.src=n[e].miniature,a.alt=n[e].alt;const t=document.createElement("h2");t.classList.add("innovation"),t.innerHTML=n[e].innovation,document.querySelector("."+n[e].categorie+[e]).appendChild(t);const r=document.createElement("h4");r.classList.add("entreprise"),r.innerHTML=n[e].entreprise,document.querySelector("."+n[e].categorie+[e]).appendChild(r);const l=document.createElement("h3");l.classList.add("description"),l.innerHTML=n[e].description,document.querySelector("."+n[e].categorie+[e]).appendChild(l);const i=document.createElement("a");i.classList.add("lien"+[e]),i.classList.add("btn_blue"),i.href=n[e].lien,document.querySelector("."+n[e].categorie+[e]).appendChild(i);const s=document.createElement("button");s.classList.add("btn_blue"),s.innerHTML="En lire plus",document.querySelector(".lien"+[e]).appendChild(s)}requeteUsers.then(function(e){return e.json()}).then(function(e){if(url){switch(url.split("=")[1]){case"1":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'AgroAlimentaire</span>",colorUl=0,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Agroalimentaire"==e[n].categorie&&apparitionInno(n,e);break;case"2":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Logistique</span>",colorUl=1,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Logistique"==e[n].categorie&&apparitionInno(n,e);break;case"3":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Santé</span>",colorUl=2,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Sante"==e[n].categorie&&apparitionInno(n,e);break;case"4":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Construction</span>",colorUl=3,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Construction"==e[n].categorie&&apparitionInno(n,e);break;case"5":h1.innerHTML="Innovons dans le domaine de </br> <span class=domaineInno>l'Environnement</span>",colorUl=4,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Environnement"==e[n].categorie&&apparitionInno(n,e);break;case"6":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'Industrie</span>",colorUl=5,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Industrie"==e[n].categorie&&apparitionInno(n,e);break;case"7":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>l'Informatique</span>",colorUl=6,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Informatique"==e[n].categorie&&apparitionInno(n,e);break;case"8":h1.innerHTML="Innovons dans le domaine de </br><span class=domaineInno>la Vie Quotidienne</span>",colorUl=7,ulLien[colorUl].style.color="#fc752b";for(n=0;n<e.length;n++)"Quotidienne"==e[n].categorie&&apparitionInno(n,e)}}else{ulLien[8].style.color="#fc752b";for(var n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add(""+e[n].categorie+[n]),o.classList.add("innovationsToutes"),o.classList.add("ticketBox"),document.querySelector(".wrapperListeInno").appendChild(o);const a=document.createElement("img");a.classList.add("apercu"),document.querySelector("."+e[n].categorie+[n]).appendChild(a),a.src=e[n].miniature,a.alt=e[n].alt;const t=document.createElement("h2");t.classList.add("innovation"),t.innerHTML=e[n].innovation,document.querySelector("."+e[n].categorie+[n]).appendChild(t);const r=document.createElement("h4");r.classList.add("entreprise"),r.innerHTML=e[n].entreprise,document.querySelector("."+e[n].categorie+[n]).appendChild(r);const l=document.createElement("h3");l.classList.add("description"),l.innerHTML=e[n].description,document.querySelector("."+e[n].categorie+[n]).appendChild(l);const i=document.createElement("a");i.classList.add("lien"+[n]),i.classList.add("btn_blue"),i.href=e[n].lien,document.querySelector("."+e[n].categorie+[n]).appendChild(i);const s=document.createElement("button");s.classList.add("btn_blue"),s.innerHTML="En lire plus",document.querySelector(".lien"+[n]).appendChild(s)}}});const outilrecherche=document.querySelector("#search_SVG"),searchInput=document.querySelector(".searchInput");function barreDeRechercheApparait(){searchInput.classList.contains("invisibleSearch")?searchInput.classList.remove("invisibleSearch"):(searchInput.classList.remove("slidesearch"),searchInput.classList.add("noslidesearch"),setTimeout(function(){searchInput.classList.add("slidesearch"),searchInput.classList.remove("noslidesearch"),searchInput.classList.add("invisibleSearch")},500))}outilrecherche.addEventListener("click",barreDeRechercheApparait),searchInput.addEventListener("keyup",function(e){13===e.keyCode&&(e.preventDefault(),window.location.replace("resultat-de-recherche.html"))});var formulaireNom=document.getElementById("Nameid"),formulaireMail=document.getElementById("Mailid"),formulaireMessage=document.getElementById("Commentid"),bouttonEnvoyer=document.getElementById("formulaireEnvoyer");function envoyerLeMessage(e){e.preventDefault(),formulaireMail.value.includes("@")&&formulaireMessage.value?(formulaireNom.value="",formulaireMessage.value="",formulaireMessage.placeholder="Votre message a bien été envoyé!",formulaireMail.placeholder=formulaireMail.value,formulaireMail.value=""):(formulaireMessage.value||(formulaireMessage.placeholder="Vous n'avez pas écrit de message."),formulaireMail.value&&formulaireMail.value.includes("@")||(formulaireMail.value="",formulaireMail.placeholder="Entrez une adresse mail valide"))}bouttonEnvoyer.addEventListener("click",envoyerLeMessage);

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

