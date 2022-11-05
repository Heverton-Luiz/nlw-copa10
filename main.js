function createGame(player1, hour, player2) {
  return `
   <li> <!--ITENS DA LISTA-->
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
  `
}

let delay = 0;
function createCard(date, day, games) { //função é um pequeno mini programa/ agrupamento de códigos
  delay = delay + 0.4;
  return ` 
    <div id="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul> <!--LISTA NÃO ORDENADA--> <!--CAIXA N*1-->
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "QUINTa",
    createGame("brazil", "16:00", "camaron") +
      createGame("hungria", "16:00", "argentina") +
      createGame("colombia", "16:00", "japan")) + 
  createCard(
    "28/11",
    "SEGUNDa",
    createGame("british colombia", "08:00", "camaron") +
      createGame("india", "13:00", "armenia") +
      createGame("comoros", "20:00", "jodran")) +
  createCard(
    "02/12",
    "SEXTa",
    createGame("portugal", "07:00", "brazil") +
      createGame("switzerland", "07:00", "camaron") +
      createGame("brazil", "16:00", "serbia"))    
  
/*
                        <li> <!--ITENS DA LISTA-->
                            <img src="./assets/icon-hungria.svg" alt="Bandeira da hungria">
                            <strong>13:00</strong>
                            <img src="../NLW/assets/icon-argentina.svg" alt="Bandeira da Argentina">
                        </li>
                         <li> <!--ITENS DA LISTA-->
                            <img src="./assets/icon-colombia.svg" alt="Bandeira da colombia">
                            <strong>20:00</strong>
                            <img src="./assets/icon-japan.svg" alt="Bandeira do japão">
                         </li>
                    </ul>
                </div>
*/
