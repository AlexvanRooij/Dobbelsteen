item = document.getElementById('dobbelsteen');
item.addEventListener("click", roll);
document.querySelector('body').addEventListener("keydown", roll);

dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
allRolls = [];

roll();
function roll() {
    num = Math.floor(Math.random() * 6 + 1 );
    console.log(num);
    item.innerHTML = dices[num -1 ];
    allRolls.push(num);
    calcMid();
    addList(num);
    addNum(num);
}

function calcMid() {
    count = 0;
    length = allRolls.length;
    allRolls.forEach((element) => {
         count = count + element;
    })
    final = Math.round(count / length);
    document.getElementById('dobbelsteen-klein').innerHTML = dices[final -1];
}

function addList(x) {
    list = document.querySelector('.list');
    li = document.createElement('li');
    li.setAttribute("class", "dobbelsteen");
    li.innerHTML = dices[x -1];
    list.insertBefore(li, list.children[0]);
}

function addNum(x) {
    listItem = document.getElementById('a'+x);
    listItem.innerHTML = Number(listItem.innerHTML) + 1;
}