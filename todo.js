// javascript for to-do list

// variable declaration
const myButton = document.getElementById("myButton");

document.body.onload = addElement;

function addElement() {
    const newButton = document.createElement("input");

    //const linebreak = document.createElement("br");
    //addElement.appendChild(linebreak);

    const currentButton = document.getElementById("myButton");
    document.body.insertBefore(newButton, currentButton);

    
}


