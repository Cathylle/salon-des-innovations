const url=window.location.search,detailUrl=url.split("="),ticketExposant=document.querySelectorAll(".ticketExposant"),ticketEntreprise=document.querySelector(".ticketEntreprise"),ticketSponsor=document.querySelectorAll(".ticketSponsor"),h1=document.querySelector("h1"),h2=document.querySelector("h2");"exposantwallon"==detailUrl[1]&&(console.log("exposant wallon"),ticketExposant[0].style="display:flex"),"exposantbrabant"==detailUrl[1]&&(ticketExposant[1].style="display:flex"),"grandeentreprise"==detailUrl[1]&&(ticketEntreprise.style="display:flex"),"sponsorBronze"==detailUrl[1]&&(ticketSponsor[0].style="display:flex",h1.innerText="Souhaitez-vous sponsoriser le salon?",h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"),"sponsorArgent"==detailUrl[1]&&(ticketSponsor[1].style="display:flex",h1.innerText="Souhaitez-vous sponsoriser le salon?",h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"),"sponsorOr"==detailUrl[1]&&(ticketSponsor[2].style="display:flex",h1.innerText="Souhaitez-vous sponsoriser le salon?",h2.innerText="Merci beaucoup pour votre participation! Contactez dès à présent un de nos conseillers"),console.log(ticketSponsor);const outilrecherche=document.querySelector("#search_SVG"),searchInput=document.querySelector(".searchInput");function barreDeRechercheApparait(){searchInput.classList.contains("invisibleSearch")?searchInput.classList.remove("invisibleSearch"):(searchInput.classList.remove("slidesearch"),searchInput.classList.add("noslidesearch"),setTimeout(function(){searchInput.classList.add("slidesearch"),searchInput.classList.remove("noslidesearch"),searchInput.classList.add("invisibleSearch")},500))}outilrecherche.addEventListener("click",barreDeRechercheApparait),searchInput.addEventListener("keyup",function(e){13===e.keyCode&&(e.preventDefault(),window.location.replace("resultat-de-recherche.html"))});var formulaireNom1=document.getElementById("NameExposantid"),formulaireEntreprise1=document.getElementById("EntrepriseExposantid"),formulaireMail1=document.getElementById("MailExposantid"),formulaireMessage1=document.querySelector("textarea"),bouttonEnvoyer1=document.getElementById("formulaireEnvoyer2"),selectPME=document.getElementById("PMEWallonneExposant");function envoyerLeMessage1(e){e.preventDefault(),formulaireMail1.value.includes("@")&&formulaireMessage1.value?(formulaireNom1.value="",formulaireMessage1.value="",formulaireNom1.value="",formulaireEntreprise1.value="",formulaireMessage1.placeholder="Votre message a bien été envoyé!",formulaireMail1.value="",formulaireMail1.value="",selectPME.value=""):(formulaireMessage1.value||(formulaireMessage1.placeholder="Vous n'avez pas écrit de message*"),formulaireMail1.value&&formulaireMail.value.includes("@")||(formulaireMail1.value="",formulaireMail1.placeholder="Entrez une adresse mail valide*"))}bouttonEnvoyer1.addEventListener("click",envoyerLeMessage1);var formulaireNom=document.getElementById("Nameid"),formulaireMail=document.getElementById("Mailid"),formulaireMessage=document.getElementById("Commentid"),bouttonEnvoyer=document.getElementById("formulaireEnvoyer");function envoyerLeMessage(e){e.preventDefault(),formulaireMail.value.includes("@")&&formulaireMessage.value?(formulaireNom.value="",formulaireMessage.value="",formulaireMessage.placeholder="Votre message a bien été envoyé!",formulaireMail.placeholder=formulaireMail.value,formulaireMail.value=""):(formulaireMessage.value||(formulaireMessage.placeholder="Vous n'avez pas écrit de message."),formulaireMail.value&&formulaireMail.value.includes("@")||(formulaireMail.value="",formulaireMail.placeholder="Entrez une adresse mail valide"))}bouttonEnvoyer.addEventListener("click",envoyerLeMessage);const fermerNewsletter=document.querySelector(".IconCroixFermer"),popupNewsletter=document.querySelector(".popupNewsletter"),bouttonNewsletterinscription=document.querySelector(".bouttonNewsletterinscription"),newsletterInscription=document.querySelector("#newsletterInscription"),Newsletterid=document.querySelector("#Newsletterid"),checkboxNewsletter=document.querySelector("#checkboxNewsletter");function ouvrirpopUpNews(){popupNewsletter.style="display:block;"}function fermerpopUpNews(){popupNewsletter.classList.add("noshowrapide"),setTimeout(function(){popupNewsletter.style="display:none;",popupNewsletter.classList.remove("noshowrapide")},500)}bouttonNewsletterinscription.addEventListener("click",ouvrirpopUpNews),fermerNewsletter.addEventListener("click",fermerpopUpNews),newsletterInscription.addEventListener("click",inscrireAlaNewsLetter);const newsid=document.querySelector("#abonnement");function inscrireAlaNewsLetter(){1==newsid.checked?Newsletterid.value.includes("@")?(Newsletterid.value="",Newsletterid.placeholder="Vous êtes inscrit!",checkboxNewsletter.style="color:#004181;",newsid.checked=!1):Newsletterid.placeholder="Entrez une adresse mail valide":0==newsid.checked&&(checkboxNewsletter.style="color:red;",Newsletterid.value.includes("@")||(Newsletterid.placeholder="Entrez une adresse mail valide"))}
