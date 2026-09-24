// harjoitus 1

const taskOneHeading = document.querySelector("#taskOneHeading")
const headingButton = document.querySelector("#changeHeadingButton")

headingButton.addEventListener("click", function() {
    taskOneHeading.textContent = "Muokattu otsikko!";

});

const changeStyleButton = document.querySelector("#changeStyleButton")
changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
});

const changeTextbutton = document.querySelector("#changeTextButton") 
const elainteksti = document.querySelector("#animalText")

changeTextbutton.addEventListener("click", function() {
    elainteksti.textContent = "Norsu on suuri nisäkäs, joka elää savanneilla ja metsissä. Se on kasvinsyöjä ja syö pääasiassa ruohoa, lehtiä ja hedelmiä.";
});

// harjoitus 2

const animalcontent = document.querySelector("#animalContent");
const h3 = document.createElement("h3");
h3.textContent = "Päivän eläin";
animalcontent.appendChild(h3);
const elainteksti2 = document.createElement("p");
elainteksti2.textContent = "Norsu on suuri nisäkäs, joka elää savanneilla ja metsissä. Se on kasvinsyöjä ja syö pääasiassa ruohoa, lehtiä ja hedelmiä.";
animalcontent.appendChild(elainteksti2);
const image = document.createElement("img");
image.src = "images/elephant.png";
image.alt = "Norsu";
animalcontent.appendChild(image);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
        hideAnimalButton.addEventListener("click", function() {
            animalcontent.style.display = "none";
        });
const showAnimalButton = document.querySelector("#showAnimalButton");
        showAnimalButton.addEventListener("click", function() {
            animalcontent.style.display = "block";
        });


// harjoitus 3

const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");

animalSelect.addEventListener("change", function() {
    const selectedAnimal = animalSelect.value;

    console.log("Valittu eläin:", selectedAnimal);

    if (selectedAnimal === "elephant") { 
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Norsu";
        animalDescription.textContent = "Norsu on suuri nisäkäs.";
        animalName.textContent = "Elefantti";
    }

    if (selectedAnimal === "penguin") {
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Pingviini";
        animalDescription.textContent = "Pingviini on lintu, joka ei lennä.";
        animalName.textContent = "Pingviini";
    }

    if (selectedAnimal === "tiger") {
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiikeri";
        animalDescription.textContent = "Tiikeri on suuri kissaeläin.";
        animalName.textContent = "Tiikeri";
    }

    if (selectedAnimal === "panda") {
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Panda on suuri karhu, joka syö bambua.";
        animalName.textContent = "Panda";
    }
});


