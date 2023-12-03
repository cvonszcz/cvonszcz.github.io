const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-image.png") {
    myImage.setAttribute("src", "images/test-image2.png");
  } else {
    myImage.setAttribute("src", "images/test-image.png");
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
      myHeading.textContent = `You need to get off your ass, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Refreshing ain't gonna do shit, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };