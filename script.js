// Coloca a classe dos elementos que contem o texto que precisa das Reticências entre Aspas!
// Exemplo: ".description .jet-listing-dynamic-field__content" 
const classOfElement = "#title_moblie h2"

const getAllDescription = document.querySelectorAll(classOfElement)

// Defina o limit de Caracte
const LIMIT = 30
if (getAllDescription && window.screen.width < 500) {
    getAllDescription.forEach(item => {
        const dots = item.innerText.length > LIMIT ? "..." : "";
        item.innerText = item.innerText.substring(0, LIMIT) + " " + dots;
    })
}


