  
  
  function Envoyer() {
      console.log("test&");
    let age = document.getElementById("lage");
        if  (age.innerHTML< 18){
            
            
            document.getElementById("demo").innerHTML = "Bonjour, cher visiteur!</br> Selon votre age, poids et Hauteur, vous devez réussir votre règime, vous devez manger tots ce qui contients des proteines pour ajàuter le plus a ta croissance;<br> et pratiquer du sport miniumum 2h jour apres <br>jour.(musculation)  ";
            console.log("ggg");
        }
        else if (age.innerHTML>= 18){
            document.getElementById("demo").innerHTML = " hoho";
            console.log("ttt");
            
          }
          console.log("test&ggg");

      
  }
  function Envoyer() {
    console.log("test&");
  let age = document.getElementById("lage");
      if  (age.innerHTML< 18){
          
          
          document.getElementById("demo").innerHTML = "Bonjour, cher visiteur!</br> Selon votre age, poids et Hauteur, vous devez réussir votre règime, vous devez manger seulement les noriture biothique maximum 3 fois par jour,<br> pratiquer du sport jour par jour minimum 2H<br> (musculation + tapis) ";
          console.log("ggg");
      }
      else if (age.innerHTML<= 18){
          document.getElementById("demo").innerHTML = " hoho";
          console.log("ttt");
          
        }
        console.log("test&ggg");

    
}
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
  