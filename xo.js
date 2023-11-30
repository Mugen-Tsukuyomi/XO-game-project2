let turn = "x" 

let cancel = 0

let title = document.querySelector(".title")

let boxes =[]

let allbox = document.querySelectorAll(".box")

function play(element){

if (turn === "x"  && element.innerHTML === "" && cancel===0){

   element.innerHTML = "x"
    turn = "o" 
    title.innerHTML = "o"
    
}
else if(turn === "o" && element.innerHTML === ""&&cancel===0){

    element.innerHTML = "o"
    turn = "x" 
    title.innerHTML = "x"
    
}
winner()

}

function end(num1,num2,num3){

   title.innerHTML= `${boxes[num1]} winner`
   cancel = 1
   document.getElementById('box'+ num1).style.background='darkturquoise'
   document.getElementById('box'+ num2).style.background='darkturquoise'
   document.getElementById('box'+ num3).style.background='darkturquoise'
   
   allbox.forEach(box => {
    box.classList.remove("hover")
  });
  
    setInterval(function(){title.innerHTML+= "." }, 1000)
    setTimeout(function(){location.reload()},4000)

}

function winner(){
    for(i=1 ; i < 10 ; i++){
        boxes[i] = document.getElementById("box"+i).innerHTML
        
        }

if(boxes[1]== boxes[2]&& boxes[2]== boxes[3] && boxes[1]!=""){

end(1,2,3)
}

if(boxes[4]== boxes[5]&& boxes[5]== boxes[6] && boxes[4]!=""){

   end(4,5,6)
 }

 if(boxes[7]== boxes[8]&& boxes[8]== boxes[9] && boxes[7]!=""){

   end(7,8,9)
 }

 if(boxes[1]== boxes[4]&& boxes[4]== boxes[7] && boxes[1]!=""){

   end(1,4,7)
 }

 if(boxes[2]== boxes[5]&& boxes[5]== boxes[8] && boxes[2]!=""){

   end(2,5,8)
 }

 if(boxes[3]== boxes[6]&& boxes[6]== boxes[9] && boxes[3]!=""){

   end(3,6,9)
 }

 if(boxes[1]== boxes[5]&& boxes[5]== boxes[9] && boxes[1]!=""){

   end(1,5,9)
 }

 if(boxes[3]== boxes[5]&& boxes[5]== boxes[7] && boxes[3]!=""){

   end(3,5,7)
 }

}




