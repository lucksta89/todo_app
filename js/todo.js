function user() {
    var a = document.getElementById("input-answer").value;
    if (a === "yes"){
        b = "<ol><li>Go to shop</li>" +
                "<li>Ring doctors</li>" + 
                "<li>Pay phone bill</li>" + 
                "<li>Go shopping</li></ol>"
    }
    else if( a === "no"){
        b = "Ok!"
    }
    document.getElementById("answer").innerHTML = b;
}




const newUser = ["dan", "matt", "john"];
const myJSON = JSON.stringify(newUser);
document.getElementById("json").innerHTML = myJSON;

const testParse = '[" Dan ", " Matt ", " John "]';
const parseTest = JSON.parse(testParse);
document.getElementById("parse").innerHTML = parseTest[0]+parseTest[2];







function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null){
    todos = JSON.parse(todos_str);
    }
    return todos 
}

function add(){
    var task = document.getElementById('task').value
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false
}

function show(){
    var todos = get_todos();
    var html = '<ul';
    for (var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button</li>';
    }
    html += '</ul>';
    document.getElementById('todo').innerHTML = html
}

document.getElementById('add').addEventListener('click', add);
show();


























































































