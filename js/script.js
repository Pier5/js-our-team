// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere 
// nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale, e viene stampata una nuova card con 
// tutte le informazioni inserite dall'utente.




// Viene fornito un layout di base. Come prima cosa nel file js definitevi un array 
// di oggetti che rappresentano i membri del team (prendete i dati dallo screen fornito). 
// Ogni membro deve avere le informazioni necessarie per stampare 
// la relativa card: Nome, Ruolo e Foto.

let arrTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'img/walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'developer',
        img : 'img/scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'img/barbara-ramos-graphic-designer.jpg'
    },
];



// Prendendo come riferimento la card di esempio presente nell'html, stampiamo 
// dinamicamente una card per ogni membro del team.

let teamContainer = document.querySelector('.team-container');

for (let i = 0; i < arrTeam.length; i++) {
    let teamCard = document.createElement('div');
    
    let cardImage = document.createElement('div');
    let eleImg = document.createElement('img');
    let cardText = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    
    eleImg.src = arrTeam[i].img;
    let eleName = arrTeam[i].name;
    let eleRole = arrTeam[i].role;

    cardImage.classList.add('card-image');
    cardText.classList.add('card-text');
    teamCard.classList.add('team-card');

    h3.innerHTML = `${eleName}`;
    p.innerHTML = `${eleRole}`;
    
    cardImage.append(eleImg);
    cardText.append(h3, p);
    teamCard.append(cardImage, cardText);

    teamContainer.append(teamCard);
}