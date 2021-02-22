var pe= document.getElementById("pe").style;
pe.textTransform= "capitalize";
pe.color="blue";



document.getElementById("ht").textContent="Mouse Events";
document.getElementById("hth").textContent="Mouse Position";
document.getElementById("hf").textContent="Input Events";


//var x= document.getElementsByClassName("grid-area");
//for(var i=0;i,x.length;i++){
    //var y= document.createElement("p");
    //x[i].appendChild(y);

//}

document.getElementById("lis").style.listStyleType= "none";
document.getElementById("lis").style.color= "green";




document.getElementById("lis2").style.color= "white";
document.getElementById("lis2").style.backgroundColor= "gray";
document.getElementById("lis3").style.backgroundColor= "gray";
document.getElementById("lis3").style.color= "white";



//document.getElementsByTagName("h2").style.textAlign= "center";
//IMPLEMENTING BOTH THE mousover and mouseout EVENTS.
var over= document.getElementById("pid").addEventListener("mouseover", funct);
var out= document.getElementById("pid").addEventListener("mouseout", funct1);

 function funct(){
     document.getElementById("pid1").innerHTML="You've just hovered your mouse on the above line";
     document.getElementById("pid").style.fontSize="20px";

 }

 function funct1(){
     document.getElementById("pid1").innerHTML="";
     document.getElementById("pid").style.fontSize="16px";

 }

 //document.getElementsByClassName("pid1").innerHTML="You've just hovered your mouse on the above line";


 document.getElementById("pid").style.color="red";
 var hz= document.getElementsByTagName("h2");
 //.addEventListener("load", func3);
 //function func3(){
     for(var i=0;i<hz.length; i++){
         hz[i].style.color="red";
         hz[i].style.textAlign="center";
     }

// }
 //IMPLEMENTING BOTH THE mouseenter AND mouseleave EVENTS


var di= document.getElementById("dil");
var st= di.style;
st.height="100px";
st.width="100%";
st.backgroundColor="gray";
st.textAlign="center";
st.padding="20px";

di.innerHTML= "MOVE THE MOUSE IN AND OUT OF THIS REGION";

di.addEventListener("mouseenter", fun);
di.addEventListener("mouseleave", fun1);

function fun(){
    
    st.backgroundColor="turquoise";
    st.color="white";
    st.height="50px";
    st.width="50%";
}

function fun1(){
    st.backgroundColor="gray";
    st.color="black";
    st.height="100px";
    st.width="100%";

}

//document.getElementByTagName("body").addEventListener("mousemove", funk);
//function funk(e){
  //  e.target.style.color= "red";
//}




