const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/runnin-people.png") {
    myImage.setAttribute("src", "images/a-c-hm.png");
  } else {
    myImage.setAttribute("src", "images/runnin-people.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You need to get off your ass and train, ${myName}!!`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Refreshing ain't gonna do shit, ${storedName}, get out there and run!`;
}
myButton.onclick = () => {
  setUserName();
};