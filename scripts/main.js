const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/comprimidos-fundo.jpg") {
    myImage.setAttribute("src", "imagens/comprimidos-icone.png");
  } else {
    myImage.setAttribute("src", "imagens/comprimidos-fundo.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bem vindo, ${myName}`;
    }
  }
  
  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bem vindo de volta, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};