
  
employee=[];
employee[0]={IdOfEmp:"ID",Name:"Name",Salary:0}
employee[1]={IdOfEmp:1,Name:"John",Salary:8000};
employee[2]={IdOfEmp:2,Name:"Mark",Salary:9000};
employee[3]={IdOfEmp:3,Name:"Yash",Salary:10000};


function useStrictHere(){
   "use strict";

   var salary="SALARY";
   for( let i=0;i<employee.length;i++)
   {
      if (employee[i].Salary>0){
         salary=30000;
      }
   var row = useStrictTable.insertRow(-1);  
   var cell1 = row.insertCell(0);
   cell1.innerHTML = employee[i].IdOfEmp;
 
   var cell2 = row.insertCell(1);
   cell2.innerHTML = employee[i].Name;
 
   var cell3 = row.insertCell(2);
   cell3.innerHTML = salary;
   }
}
