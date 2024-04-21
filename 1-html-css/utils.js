let section = document.querySelector("section");
let palabras = ["desarrollo", "software"];

function convertirNegritas(element, arrayPalabras) {
    let text = element.innerHTML;
    arrayPalabras.forEach(palabra => {
        text = text.replace(new RegExp(palabra, "g"), `<b>${palabra}</b>`);
    });
    return text;
}

section.innerHTML = convertirNegritas(section, palabras);