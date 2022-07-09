import "./style.css";

function whatsapp() {
  const number = prompt("Ingrese el numero de telefono") || "";
  const cleanNumber = number.replace(/[^0-9]/g, "");

  if (number != null && number != "" && number == cleanNumber) {
    const result = confirm(
      "Enviaremos el mensaje a " + number + " ¿Desea continuar?"
    );
    if (result)
      window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
  }
}

whatsapp();

document.querySelector("#app").innerHTML = `
  <h1><h1>Nothing to see here!</h1></h1>
`;
