var employeeObj=[];
 employeeObj[0] = {EmpId:"1",EmpName:"John",EmpSal:8000,UpdatedSalary:0};

 class Employee {
    constructor(ID, Name, Salary) {
     this.ID 		= 	ID;
     this.Name 		= 	Name;
     this.Salary 	= 	Salary;
    
    }
}
var objE=[];
var JSONAr=[];
var value;
function addEmployeeWithObj(){
    var Table = document.getElementById("tbl1");
    Table.innerHTML = "";
    
    var eId = document.getElementById("id").value;  
  
    var eName = document.getElementById("name").value;

    var eSal = document.getElementById("sal").value;  
  
   
   
    if(!(eId=='' && eName=='' && eSal=='' )){
    employeeObj.push({EmpId:eId,EmpName:eName,EmpSal:eSal});
    }
    
    
      

    for(var i=0;i<employeeObj.length;){
        var row = tbl1.insertRow(0);
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = employeeObj[i].EmpId;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = employeeObj[i].EmpName;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = employeeObj[i].EmpSal;
            
            i++;
        
    }
   
}




function addEmployeeWithClass(){
				var Table = document.getElementById("tbl2");
    			Table.innerHTML = "";

			var ID = document.getElementById("eId").value;  
			var Name = document.getElementById("eName").value;

    		var Salary = document.getElementById("eSal").value;  
  
	

		
		var i=Number(objE.length);
			if(!(ID=='' && Name=='' && Salary=='' )){
				objE[i] = new Employee(ID,Name,Salary);  
			}


		for(var i=0;i<=objE.length;i++){
        	var row = tbl2.insertRow(0);
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = objE[i].ID;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = objE[i].Name;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = objE[i].Salary;
    	}
}

function addEmployeeWithJSON(){
			var ID = document.getElementById("jId").value;  
			var Name = document.getElementById("jName").value;

    		var Salary = document.getElementById("jSal").value;  
  
		var Table = document.getElementById("tbl3");
    	Table.innerHTML = "";

		let D1 = new Employee (ID, Name, Salary);
        value=JSON.stringify(D1);
        JSONAr.push(value);

	
		for(var i=0;i<=JSONAr.length;i++){
            let text=JSON.parse(JSONAr[i]);

            var row = tbl3.insertRow(0);
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = text.ID;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = text.Name;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = text.Salary;
			
        	
    	}
}

function salaryTry(){
    var Table = document.getElementById("tbl5");
    Table.innerHTML = "";
    
    var eId = document.getElementById("tId").value;  
  
    var eName = document.getElementById("tName").value;

    var eSal = document.getElementById("tSal").value;  
  
   
   
    if(!(eId=='' && eName=='' && eSal=='' )){
       employeeObj.push({EmpId:eId,EmpName:eName,EmpSal:eSal});
    }
    

	for(var i=0;i<employeeObj.length;i++){
        	var k = employeeObj[i].EmpSal;
			try{
			    if(k<=0)  throw "Enter Valid Salary" ;
					employeeObj[i].UpdatedSalary = k*1.10 ;
					
			}catch(msg){
					document.getElementById("tryMe").innerHTML = msg;
				}
			

     }

	
      

    for(var i=0;i<employeeObj.length;i++){
        var row = tbl5.insertRow(0);
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = employeeObj[i].EmpId;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = employeeObj[i].EmpName;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = employeeObj[i].EmpSal;
			var cell4 = row.insertCell(3);
            cell4.innerHTML = employeeObj[i].UpdatedSalary;
     }
   
}

function arrowInc(){
    var Table = document.getElementById("tbl6");
    Table.innerHTML = "";
    
      

    for(var i=0;i<employeeObj.length;i++){
  
        var sal = employeeObj[i].EmpSal; 
         
            var row = tbl6.insertRow(0);
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = employeeObj[i].EmpName;
            
			var cell2 = row.insertCell(1);
            sum = (sal) => {
                return(Number(sal)*0.15)
              }
            //cell2.innerHTML =sum(sal);

            sum1=(sal)=> Number(sal)*0.15;
            cell2.innerHTML =sum1(sal); 

            
            
     }
   
}


