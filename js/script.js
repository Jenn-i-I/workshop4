//tehtävä1

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const taskOneHeading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");
const changeColor = document.querySelector("#changeColor");

changeHeadingButton.addEventListener("click", function() {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
})

changeTextButton.addEventListener("click", function() {
    animalText.textContent += " Elefantit ovat myös upeita";
});

changeColor.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});


// tehtävä2

const animalContent = document.querySelector("#animalContent");

const animalContentHeading = document.createElement("h3");
animalContentHeading.textContent = "Päivän eläin";
animalContentHeading.classList.add("animal-heading");
animalContent.append(animalContentHeading);

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Päivän eläimestä olisi niin paljon kerrottavaa, etten tiedä mistä aloittaisin.";
animalContent.append(animalParagraph);

const animalImage2 = document.createElement("img");
animalImage2.src = "images/elephant.png";
animalContent.append(animalImage2);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function() {
    animalContent.classList.add("hidden");
});

showAnimalButton.addEventListener("click", function() {
    animalContent.classList.remove("hidden");
});

// tehtävä3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");


animalSelect.addEventListener("change", function() {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Kuva elefantista";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    };

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Kuva tiikeristä";
        animalDescription.textContent = "Tiikeri on uhanalainen kissaeläin.";
    };

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Kuva pingviinistä";
        animalDescription.textContent = "Pingviinit ovat hyviä uimaan, mutta eivät osaa lentää.";
    };

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Kuva pandasta";
        animalDescription.textContent = "Mustavalkoinen ja sympaattisen näköinen isopanda on erikoistunut elämään bamburavinnolla.";
    };

});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function() {
    animalImage.classList.remove("image-highlight");
});

// tehtävä 4

const animalForm = document.querySelector("#animalForm");
const submit = document.querySelector("#submit");
const observationTable = document.querySelector("#observationTable");

const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;

    if ( animal === "" || location === "" || date === "") {
        return;
    };

    const row = document.createElement("tr");

    const animaltd = document.createElement("td");
    animaltd.textContent = animal;

    const locationtd = document.createElement("td");
    locationtd.textContent = location;

    const datetd = document.createElement("td");
    datetd.textContent = date;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista rivi";
    const deletetd = document.createElement("td");
    deletetd.append(deleteButton);

    row.append(animaltd, locationtd, datetd, deletetd);

    observationTable.append(row);  
    
    deleteButton.addEventListener("click", function () {
    row.remove();
    });

});







