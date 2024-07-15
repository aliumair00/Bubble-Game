var timer = 60;
var score = 0;
var hitscore = 0;
var finalres = 0;
//event bubbling 
// jis par click kray gay us element par event raise hu ga
//or us element par event listner dhonday ga or milna ki sorat mein 
//wo us event element ka parent par listner par dhonda ga ,wha bhi na 
//milna par us ka parent ky parent par listner dhonday ga.
function makebubble(){

    var clutter = ""
for (var i = 0; i<= 71; i++) {
  var rn = Math.floor(Math.random()* 10)
    clutter+=`<div class="bubble">${rn}</div>`

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makebubble();

function timechng(){
   var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = 
            `<h1>Game Over😎</h1>
             <br>
             <h1> final Score: ${finalres} </h1>  `
        }
        },1000)
        }
timechng();

function forhit(){
    hitscore = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitscore;
}
forhit();
        
function incscore(){
 score += 10;
   finalres = document.querySelector("#hitscore").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
  var num = Number( dets.target.textContent);
  if(num === hitscore){
    incscore();
    makebubble();
    forhit();
  }
})