var pokemonArray = pokemons
var elWrapper = document.querySelector("#wrapper");

function renderPokemon(array, wrapper) {
    elWrapper.innerHTML = null

    for (const item of array) {
        let newH3 = document.createElement("h3")
        newH3.textContent = item.name;
        newH3.classList = "text-center"

        let newHeight = document.createElement("p")
        newHeight.textContent = item.height;
        newHeight.classList = "height text-center fw-bold m-0";

        let newWeight =document.createElement("p")
        newWeight.textContent = item.weight;
        newWeight.classList = "weight text-center fw-bold m-0"

        let newImg = document.createElement("img");
        newImg.src = item.img;
        newImg.width = "120";
        newImg.height = "120"

        let newWrapper = document.createElement("div")
        newWrapper.classList = "text__wrapper"

        let newLi = document.createElement("li")
        newLi.classList = "main__item list-unstyled bg-warning pe-5 ps-5 rounded d-flex flex-column align-items-center"


        newWrapper.appendChild(newH3)
        newWrapper.appendChild(newHeight)
        newWrapper.appendChild(newWeight)
        newLi.appendChild(newImg)
        newLi.appendChild(newWrapper)

        wrapper.appendChild(newLi)

        console.log(newLi);
    }
}

renderPokemon(pokemonArray, elWrapper)