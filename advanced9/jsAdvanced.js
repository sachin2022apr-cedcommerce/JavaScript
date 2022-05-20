function addCheckDetails(){


   var name1 = document.getElementById("Name1").value;
   let regex = /^[A-Za-z]+$/;
   
   try{
      if(!name1.match(regex))  throw "Name contains number or whitespace";
   }

   catch(err)
   {
       document.getElementById("pID").innerHTML = err;
   }

}
