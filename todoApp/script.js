var TODOArray = [];
var completedArray = [];
var editIndex = -1;
var editIndex2 = 0;
function todoAdd(){
        var k=document.getElementById("addButton").innerHTML;
       
        if(k=="Add"){
            var itemTodo = document.getElementById("new-task").value; 
        
            TODOArray.push(itemTodo);

            var printTODO = "";
            for(var i=0;i<TODOArray.length;i++){
                printTODO+= '<li><input type="checkbox" onchange="transferToCompleated(this)"><label>'+TODOArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
            
                document.getElementById('incomplete-tasks').innerHTML = printTODO;
            }
        }
        else if(k == "Update" && editIndex>-1){
            var itemTodo = document.getElementById("new-task").value; 
            document.getElementById("addButton").innerHTML = "Add";
            //TODOArray.splice(1, 0, itemTodo)
            TODOArray[editIndex] = itemTodo;
            var printTODO = "";

            for(var i=0;i<TODOArray.length;i++){
                printTODO+= '<li><input type="checkbox" onchange="transferToCompleated(this)"><label>'+TODOArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete"  onclick = "btnDeleteTodo(this)">Delete</button></li>';
            
                document.getElementById('incomplete-tasks').innerHTML = printTODO;
            }
            editIndex=-1;
        }
        else if(k == "Update" && editIndex2>-1){
            var itemTodo = document.getElementById("new-task").value; 
            document.getElementById("addButton").innerHTML = "Add";
            //TODOArray.splice(1, 0, itemTodo)
            completedArray[editIndex2] = itemTodo;
            var printTODO = "";
            for(var i=0;i<completedArray.length;i++){
                printTODO+= '<li><input type="checkbox" checked onchange="transferToInCompleated(this)"><label>'+completedArray[i]+'</label><input type="text"><button class="edit" onclick ="editComplete(this)">Edit</button><button class="delete"  onclick = "btnDeleteComplete(this)">Delete</button></li>';
            
                document.getElementById('completed-tasks').innerHTML = printTODO;
            }
            editIndex2=-1;
        } 

}
function transferToCompleated(chkProduct){
        var l=chkProduct.parentElement;
        var node=Array.from(l.parentElement.children);
        var anc=node.indexOf(l);
        completedArray.push(TODOArray[anc]);
        TODOArray.splice(anc, 1);
        console.log(TODOArray);
        console.log(completedArray);

        var printCompleted = "";
       
        for(var i=0;i<completedArray.length;i++){
            printCompleted+= '<li><input type="checkbox" checked onchange="transferToInCompleated(this)"><label>'+completedArray[i]+'</label><input type="text"><button class="edit" onclick ="editComplete(this)">Edit</button><button class="delete"  onclick = "btnDeletecomplete(this)">Delete</button></li>';
            
            document.getElementById('completed-tasks').innerHTML = printCompleted;
        }

        var ul = document.getElementById("incomplete-tasks");
        ul.innerHTML = "";
        var printTODO="";
        for(var i=0;i<TODOArray.length;i++){
            printTODO+= '<li><input type="checkbox" unchecked onchange="transferToCompleated(this)"><label>'+TODOArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete"  onclick = "btnDeleteTodo(this)">Delete</button></li>';
            
            document.getElementById('incomplete-tasks').innerHTML = printTODO;
        }

}
function transferToInCompleated(chkInComplete){
    var l=chkInComplete.parentElement;
    var node=Array.from(l.parentElement.children);
    var anc=node.indexOf(l);
    TODOArray.push(completedArray[anc]);
    completedArray.splice(anc, 1);
    console.log(TODOArray);
    console.log(completedArray);

    var printCompleted = "";
    var al = document.getElementById("completed-tasks");
    al.innerHTML = "";
    for(var i=0;i<completedArray.length;i++){
        printCompleted+= '<li><input type="checkbox" checked onchange="transferToInCompleated(this)"><label>'+completedArray[i]+'</label><input type="text"><button class="edit" onclick ="editComplete(this)">Edit</button><button class="delete"  onclick = "btnDeleteComplete(this)">Delete</button></li>';
        
        document.getElementById('completed-tasks').innerHTML = printCompleted;
    }

    var ul = document.getElementById("incomplete-tasks");
    ul.innerHTML = "";
    var printTODO="";
    for(var i=0;i<TODOArray.length;i++){
        printTODO+= '<li><input type="checkbox" unchecked onchange="transferToCompleated(this)"><label>'+TODOArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
        
        document.getElementById('incomplete-tasks').innerHTML = printTODO;
    }

}
function editTodo(editProduct){

        var l=editProduct.parentElement;
        var node=Array.from(l.parentElement.children);
        editIndex=node.indexOf(l);
        //TODOArray[anc];
        document.getElementById("addButton").innerHTML = "Update";
        document.getElementById("new-task").value = TODOArray[editIndex];
        
        //TODOArray.splice(anc, 1);

}
function editComplete(editProduct){

    var l=editProduct.parentElement;
    var node=Array.from(l.parentElement.children);
    editIndex2=node.indexOf(l);

    //TODOArray[anc];
    document.getElementById("addButton").innerHTML = "Update";
    document.getElementById("new-task").value = completedArray[editIndex2];
    
    //TODOArray.splice(anc, 1);

}


function btnDeleteTodo(dlt1){
    var l=dlt1.parentElement;
    var node=Array.from(l.parentElement.children);
    var anc=node.indexOf(l);
    TODOArray.splice(anc, 1);
    var printTODO="";
    var Tk = document.getElementById("incomplete-tasks");
    Tk.innerHTML = "";
    for(var i=0;i<TODOArray.length;i++){
        printTODO+= '<li><input type="checkbox" onchange="transferToCompleated(this)"><label>'+TODOArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
    
        document.getElementById('incomplete-tasks').innerHTML = printTODO;
    }
}
function btnDeletecomplete(dlt2){
    var l=dlt2.parentElement;
    var node=Array.from(l.parentElement.children);
    var anc=node.indexOf(l);
    completedArray.splice(anc, 1);
    var printTODO="";
            var T = document.getElementById("completed-tasks");
            T.innerHTML = "";
            for(var i=0;i<completedArray.length;i++){
                printTODO+= '<li><input type="checkbox" onchange="transferToInCompleated(this)" checked><label>'+completedArray[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeletecomplete(this)">Delete</button></li>';
            
                document.getElementById('completed-tasks').innerHTML = printTODO;
            }
}
