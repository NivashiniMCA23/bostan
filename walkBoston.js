import { boston } from "./boston.js";
var newBoston=boston.data
var element=" ";
for(let i=0;i<newBoston.length;i++)
    {
      for(let j=i+1;j<newBoston.length;j++)
      {
         if(newBoston[i][11]<newBoston[j][11])
      {
         let temp=newBoston[i];
         newBoston[i]=newBoston[j]
         newBoston[j]=temp
      }
      }
   }
       //console.log(newBoston[i][8],newBoston[i][11])  
       var data=newBoston.slice(0,5);
       for(let i=0;i<5;i++)
       {
         element=element+"<h1>" + newBoston[i][8] + "</h1>" + "<h1>" + newBoston[i][11] + "</h1>"
       }
    

    document.getElementById("app").innerHTML=element;