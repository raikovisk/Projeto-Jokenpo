let radStone = null, 
    radPapper = null,
    radSciss = null,
    btnStone = null,
    btnPapper = null,
    btnSciss = null,
    btnPlay = null,

    divResult = null;
    formGame = null;

window.addEventListener('load', () => {
    mapElements();
    addEvent();
});

function mapElements(){
        radStone = document.querySelector('#radStone');
        radPapper = document.querySelector('#radPapper');
        radSciss = document.querySelector('#radSciss');
    
        btnStone = document.querySelector('#btnStone');
        btnPapper = document.querySelector('#btnPapper');
        btnSciss = document.querySelector('#btnSciss');
        btnPlay = document.querySelector('#btnPlay');

        formGame = document.querySelector('#formGame');
        divResult = document.querySelector('#divResult');
};

function addEvent(){
    btnStone.addEventListener('click', buttonClick);
    btnPapper.addEventListener('click', buttonClick);
    btnSciss.addEventListener('click', buttonClick);
    btnPlay.addEventListener('click', buttonClick);
}

function buttonClick(event){
    let currentClick = event.target.id;
    let choice = 0;

    switch(currentClick) {
        case 'btnStone':
            $("radStone").prop("checked", true);
            choice = 1;
            break;
        case 'btnPapper':
            radPapper.checked = true;
            choice = 2;
            break;
        case 'btnSciss':
            radSciss.checked = true;
            choice = 3;
            break;
    }

    console.log(choice);

}