
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
    switch(key){

        case "w":
           let audio1 = new Audio("./sounds/tom-1.mp3");
           audio1.play();
          break;

          case "a":
           let audio2 = new Audio("./sounds/tom-2.mp3");
           audio2.play();
          break;
          case "s":
           let audio3 = new Audio("./sounds/tom-3.mp3");
           audio3.play();
          break;
          case "d":
           let audio4 = new Audio("./sounds/tom-4.mp3");
           audio4.play();
          break;
          case "j":
           let audio5 = new Audio("./sounds/snare.mp3");
           audio5.play();
          break;
          case "k":
           let audio6 = new Audio("./sounds/crash.mp3");
           audio6.play();
          break;

          case "l":
           let audio7 = new Audio("./sounds/kick-bass.mp3");
           audio7.play();
          break;

          default:console.log(buttonInnerHTML)
      

   }
}
function buttonAnimation(currentKey){

 let  activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function () {
activeButton.classList.remove("pressed")
 },100)

}















// let audios = ["./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3","./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"]

//         let audio = new Audio(audios[i]);
//         audio.play();


































// for(let i = 0; i < 6; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("i got clicked")
//     });
// }

// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert("i got clicked")
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     alert("i got clicked")
// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     alert("i got clicked")
// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     alert("i got clicked")
// });
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     alert("i got clicked")
// });
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     alert("i got clicked")
// });

