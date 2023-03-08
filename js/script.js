var round = 0,
    roboScore = 0,
    playerScore = 0;

window.addEventListener('load', () => {
    addEvent();
});

function addEvent(){
    $("#btnStone").bind('click', buttonClick);
    $("#btnPapper").bind('click', buttonClick);
    $("#btnSciss").bind('click', buttonClick);
    $("#btnPlay").bind('click', buttonClick);
}

function getRandom() {
    let min = 1,
        max = 3;
    let retult = Math.floor(Math.random() * (max-min+1) + min);

    return retult;
}

function buttonClick(event){
    let currentClick = event.target.id;
    let choice = 0,
        robo = null;
    
        robo = getRandom();

        switch(currentClick) {
            case 'btnStone':
                $("#radStone").prop("checked", true);
                choice = 1;
                gaming(choice, robo);
                break;
                case 'btnPapper':
                    $("#radPapper").prop("checked", true);
                    choice = 2;
                    gaming(choice, robo);
                    break;
                    case 'btnSciss':
                        $("#radSciss").prop("checked", true);
                        choice = 3;
                        gaming(choice, robo);
                break;
        }   
}


function gaming(player, robo){
    var msg = '';

    switch(player){
        case 1: {
            if(robo == 2){
                msg = "Você perdeu!";
                roboScore++;
                break;
            }
            else if(robo == 3){
                msg = "Você ganhou!";
                playerScore++;
                break;
            }
            else{
                msg = "Empatou!";
                break;
            }
        }
        case 2: {
            if(robo == 3){
                msg = "Você perdeu!";
                roboScore++;
                break;
            }
            else if(robo == 1){
                msg = "Você ganhou!";
                playerScore++;
                break;
            }
            else{
                msg = "Empatou!";
                break;
            }
        }
        case 3: {
            if(robo == 1){
                msg = "Você perdeu!";
                roboScore++;
                break;
            }
            else if(robo == 2){
                msg = "Você ganhou!";
                playerScore++;
                break;
            }
            else{
                msg = "Empatou!";
                break;
            }
        }
    }
    
    round++;
    console.log("player: "+ player);
    console.log("robo: "+ robo);
    console.log(msg);

    render(robo);
}

function render(robo){

    switch(robo){
        case 1:{
            img = 
            `
            <div class="card">
                <input id="btnStone" class="button btn btn-outline-dark" src="./imgs/pedra.png" alt="punhofechado" type="image">
                <p><strong>Pedra</strong></p>
            </div>
            `
            break;
        }
        case 2:{
            img = 
            `
            <div class="card">
                <input id="btnPapper" class="button btn btn-outline-warning" src="./imgs/papel.png" alt="mão aberta" type="image">
                <p><strong>Papel</strong></p>
            </div>           
            `
            break;
        }
        case 3:{
            img = 
            `
            <div class="card">
                <input id="btnSciss" class="button btn btn-outline-danger" src="./imgs/tesoura.png" alt="dedos abertos em tesoura" type="image">
                <p><strong>Tesoura</strong></p>
            </div>
            `
            break;
        }
        
    }

    $("#divResult").html(`
        <h3>Robô</h3>
        <div class="card-body">
            ${img}
        </div>
        <ul>
            <li>
                <span><strong>Player: </strong> ${playerScore}</span>
            </li>
            <li>
                <span><strong>Robô: </strong> ${roboScore}</span>
            </li>
            <li>
                <span><strong>Rodada(s): </strong> ${round}</span>
            </li>
        </ul>
    `);
}
