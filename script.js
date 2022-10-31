let i = 0;
// permettant de de calculer le total 
function calcul(e) {
  const i = parseInt(e.parentElement.children[0].textContent);
  const restant = document.querySelectorAll(".resultat");
  for (let rest of restant){
    rest.textContent = Number(rest.textContent) + i;
  }
  afficher(e);
  article();
}

// compte des articles
let r = 0;
function article(){
  const compte = document.getElementById('article');
  compte.innerText = Number(compte.innerText);
  compte.innerText++;
}

// Supprimer tous
function clearCart(){
  const restant = document.querySelectorAll(".resultat");
  let dataContent = document.getElementById('modal');
  const compte = document.getElementById('article');
  for (let rest of restant){
    rest.textContent = 0;
  }
  dataContent.innerHTML = " ";
  compte.textContent = 0;
}

// Insertion des articles dans le modal
function afficher(e){
  let dataContent = document.getElementById('modal');
      dataContent.innerHTML += 
        `<div id='commande${i}' class="row">
              <div class="col d-flex justify-content-center align-items-center" >
                <img style="border-radius:50%; width: 100px; height: 100px" src=${e.parentElement.parentElement.parentElement.children[0].src} />      
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                  <p>${(e.parentElement).parentElement.children[0].textContent}</p>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                  <p>${e.parentElement.children[0].textContent}</p>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <button onClick= 'supprimer(${i}, ${parseInt(e.parentElement.children[0].textContent)})' class="btn btn-outline-danger">
                <i class="bi bi-x-square-fill"></i>
                </button>
              </div>
        </div>`;
  i++;
}

// Fonction permettant de supprimer un article 
function supprimer(i, number){
  console.log(`suppression de la commande ${i}`);
  let dataContent = document.getElementById('modal');
  let commande = document.getElementById(`commande${i}`);
  const compte = document.getElementById('article');
  dataContent.removeChild(commande);

  const restant = document.querySelectorAll(".resultat");
  for (let rest of restant){
    rest.textContent = Number(rest.textContent) - number;
  }
  compte.textContent = Number(compte.innerText);
  compte.innerText--;
}