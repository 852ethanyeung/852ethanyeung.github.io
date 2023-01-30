const myImage = document.querySelector("img")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/samoyed.jpeg") {
        myImage.setAttribute("src", "images/samoyed-2.jpeg");
    } else {
        myImage.setAttribute("src", "images/samoyed.jpeg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} adores samoyeds`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} adores samoyeds`;
}

myButton.onclick = () => {
    setUserName();
};
