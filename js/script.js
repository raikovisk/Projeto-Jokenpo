var round = 0,
  roboScore = 0,
  playerScore = 0;

window.addEventListener("load", () => {
  addEvent();
});

function addEvent() {
  $("#btnStone").bind("click", buttonClick);
  $("#btnPapper").bind("click", buttonClick);
  $("#btnSciss").bind("click", buttonClick);
  $("#btnPlay").bind("click", buttonClick);
}

function getRandom() {
  let min = 1,
    max = 3;
  let retult = Math.floor(Math.random() * (max - min + 1) + min);

  return retult;
}

function buttonClick(event) {
  let currentClick = event.target.id;
  let choice = 0,
    robo = null;

  robo = getRandom();

  switch (currentClick) {
    case "btnStone":
      choice = 1;
      gaming(choice, robo);
      break;
    case "btnPapper":
      choice = 2;
      gaming(choice, robo);
      break;
    case "btnSciss":
      choice = 3;
      gaming(choice, robo);
      break;
  }
}

function gaming(player, robo) {
  var msg = "";

  switch (player) {
    case 1: {
      if (robo == 2) {
        msg = "Você perdeu!";
        roboScore++;
        break;
      } else if (robo == 3) {
        msg = "Você ganhou!";
        playerScore++;
        break;
      } else {
        msg = "Empatou!";
        break;
      }
    }
    case 2: {
      if (robo == 3) {
        msg = "Você perdeu!";
        roboScore++;
        break;
      } else if (robo == 1) {
        msg = "Você ganhou!";
        playerScore++;
        break;
      } else {
        msg = "Empatou!";
        break;
      }
    }
    case 3: {
      if (robo == 1) {
        msg = "Você perdeu!";
        roboScore++;
        break;
      } else if (robo == 2) {
        msg = "Você ganhou!";
        playerScore++;
        break;
      } else {
        msg = "Empatou!";
        break;
      }
    }
  }

  round++;
  render(robo, msg);
}

// ---------------- RENDER RESULT ----------------

function render(robo, msg) {
  switch (robo) {
    case 1: {
      img = `
            <div class="card">
                <input id="btnStone" class="button btn btn-outline-dark" src="./imgs/pedra.png" alt="punhofechado" type="image">
                <p><strong>Pedra</strong></p>
            </div>
            `;
      break;
    }
    case 2: {
      img = `
            <div class="card">
                <input id="btnPapper" class="button btn btn-outline-warning" src="./imgs/papel.png" alt="mão aberta" type="image">
                <p><strong>Papel</strong></p>
            </div>           
            `;
      break;
    }
    case 3: {
      img = `
            <div class="card">
                <input id="btnSciss" class="button btn btn-outline-danger" src="./imgs/tesoura.png" alt="dedos abertos em tesoura" type="image">
                <p><strong>Tesoura</strong></p>
            </div>
            `;
      break;
    }
  }

  $("#divResult").html(`

    <span class = "fs-4"><strong>${msg}</strong></span>
    <div class="card-body">
    <span><strong>Robô Jogou </strong></span>
    ${img}
    </div>
    <ul>
    <li>
    <span class="liPlayer fs-5"><strong>Player: </strong> ${playerScore}</span>
    </li>
    <li>
    <span class="liRobo fs-5"><strong>Robô: </strong> ${roboScore}</span>
    </li>
    <li>
    <span class="fs-5"><strong>Rodada(s): </strong> ${round}</span>
    </li>
    </ul>
    `);
    
    // ---------------- RENDER RESULT NAVBAR ------------------

  $("#divPlacar").html(
    `
        <ul>
        <li id="player" class="liPlayer">PLAYER: ${playerScore}</li>
        <li id="robo" class="liRobo">ROBÔ: ${roboScore}</li>
        </ul>
        `
  );

  toast(msg);
}

// -------------------TOAST-----------------------
function toast(msg) {
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);

  $("#toastMsg").html(
    `
        <span>${msg}</span>
        `
  );

  toast.show();
}

// ---------------- NAVBAR -------------------------

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("navActive");
    } else {
      $(".navbar").removeClass("navActive");
    }
  });
});
