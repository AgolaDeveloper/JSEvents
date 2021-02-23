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




//CREATING AN ARRAY OF STRING VALUES

var arr= ['mouseover','mouseout','mouseenter','mouseleave','mousemove','click','input','change','focus','blur','serach'];

function filtArray(num){
    for(let i=0;i<arr.length;i++){
    var arr1= arr[i].split();
    num=arr1[0];

    //return arr[i].join();
        
    }
    return(num==='m');

}

//var arr= [1,3,7,8,9,40,34,23,23,12,3,4];

//function filtArray(num){
  //  return(num>=20)
    //for(let i=0;i<arr.length;i++){
      //  if(arr[i]>=10)  

       // return arr[i];
        
    //}
//}

document.getElementById("btmouse").addEventListener("click",funcM);
function funcM(){
    document.getElementById("pmouse").innerHTML= arr.filter(filtArray);
}
//document.getElementById("btmouse").inick",)

//practicing the sort() method
var ar= [1,3,7,8,9,40,34,23,23,12,3,4];
document.getElementById("psot").innerHTML= ar;

        //ascending order
 document.getElementById("fb").addEventListener("click", small);
document.getElementById("fs").addEventListener("click", big);

document.getElementById("b").addEventListener("click", large);
document.getElementById("s").addEventListener("click", little);

 function small(){
    var fbst= document.getElementById("fbs");
    fbst.innerHTML= "SORTED IN ASCENDING ORDER "+ ar.sort(function(a,b){return a-b;})
 }
 function big(){
    var fbst1= document.getElementById("fsb");
    fbst1.innerHTML= "SORTED IN DESCENDING ORDER "+ ar.sort(function (a,b){return b-a;})
 }


function large(){
   ar.sort(function (a,b){return b-a;})

    document.getElementById("b").innerHTML= ar[0] +" is the largest numbbere here";
    document.getElementById("b").style.color= "green";

}

function little(){
    ar.sort(function (a,b){return a-b;})
 
     document.getElementById("s").innerHTML= "the smallest digit is " +ar[0];
     document.getElementById("s").style.color= "red";
 }
//giving div of class ndiv a unique backgroundColor within the parent div
//document.getElementByClassName("ndiv").style.backgroundColor="gray";

