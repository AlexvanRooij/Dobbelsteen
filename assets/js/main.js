// Hier maak de de addEventListeners aan die de functie uitvoeren wanneer je iets klikt
item = document.getElementById('dobbelsteen');
item.addEventListener("click", roll);
document.querySelector('body').addEventListener("keydown", roll);

// Hier maak de de array met de dices en Rolls erin
dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
allRolls = [];

// Functie roll die zorgt dat hij de dobbelsteen rolt
roll();
function roll() {
    // Hier kiest hij een random getal
    num = Math.floor(Math.random() * 6 + 1 );
    // Gooit hij hem in de console
    console.log(num);
    item.innerHTML = dices[num -1 ];
    allRolls.push(num);
    // Berekent hij het gemiddelde
    calcMid();
    // Voegt het nummer aan de lijst van nummers toe
    addList(num);
    // Voeg de nummer toe aan de scoreboard
    addNum(num);
}

// Hier bereken ik het gemiddelde en push hem naar de div
function calcMid() {
    count = 0;
    length = allRolls.length;
    allRolls.forEach((element) => {
         count = count + element;
    })
    final = Math.round(count / length);
    document.getElementById('dobbelsteen-klein').innerHTML = dices[final -1];
}

// Hier voeg ik de nummer toe aan de lijst voor de andere nummers door insertBefore
function addList(x) {
    list = document.querySelector('.list');
    li = document.createElement('li');
    li.setAttribute("class", "dobbelsteen");
    li.innerHTML = dices[x -1];
    list.insertBefore(li, list.children[0]);
}

// Hier voeg ik de nummer toe aan de scoreboard met innerHTML + 1
function addNum(x) {
    listItem = document.getElementById('a'+x);
    listItem.innerHTML = Number(listItem.innerHTML) + 1;
}