

function BeBolt(){
   document.getElementById("area-text").style.fontWeight="bold";

    }
function BeItalic(){
      document.getElementById("area-text").style.fontStyle="italic";
    
        }
function Underline(){

            document.getElementById("area-text").style.textDecorationLine="underline";
            document.getElementById("area-text").style.textDecorationStyle="solid";
          
          
              }

function sizes(){
    document.getElementById("area-text").style.fontSize=document.getElementById("mySelect").value;
}
function changeFamily(){
    document.getElementById("area-text").style.fontFamily=document.getElementById("mySelectPolice").value;
}