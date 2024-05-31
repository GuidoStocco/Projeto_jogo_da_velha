let x = document.querySelector('.hide-x');
let o = document.querySelector('.hide-o');
let boxs = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#button-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;


// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxs
for(let i = 0; i < boxs.length; i++){
    // quando alguém clica na caixa
    boxs[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        
       if(this.childNodes.length == 0){
        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl)

        //computar a jogada
        if(player1 == player2){
            player1++
        } else{
            player2++
        }

        // checa qm venceu
        checkInCondition()

       }
    })
};

// verificar qm vai jogar
function checkEl (player1, player2){
    if(player1 == player2){
        el = x;
    } else {
        el = o;
    }

    return el;
}

// ve qm ganha
function checkInCondition(){

    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0  ){

        let b1Child = b1.childNodes[0].classname;
        let b2Child = b2.childNodes[0].classname;
        let b3Child = b3.childNodes[0].classname;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){

        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            
        }
    }
}