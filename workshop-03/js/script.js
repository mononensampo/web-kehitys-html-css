// harjoitus 1

function showTable() {
    
    const animal = "Norsu";
    const habitat = "Savanni";
    const diet = "Kasvit";

   
    const tableHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ravinto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    
    const container = document.querySelector("#tableContainer");
    container.innerHTML = tableHTML;
}

// harjoitus 2

const harjoitus1 = document.querySelector("#harjoitus-1");
harjoitus1.addEventListener("click", function() {
    harjoitus1.style.color = "red";
    harjoitus1.textContent = "Bye bye mouse!";
});


// harjoitus 3

const textArea = document.querySelector("#feedback");
const statusElement = document.querySelector("#status");
const charCount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

textArea.addEventListener("focus", function () {
    statusElement.textContent = "Kirjoitetaan viestiä...";
    statusElement.style.backgroundColor = "green";
    statusElement.classList.add("active");
    textArea.classList.add("active-focus");
});


textArea.addEventListener("blur", function () {
    statusElement.textContent = "";
    statusElement.classList.remove("active");
    textArea.classList.remove("active-focus");
});


textArea.addEventListener("input", function () {
    const currentLength = textArea.value.length;
    const maxLength = 200;

    
    charCount.textContent = `${currentLength}/${maxLength}`;


    if (textArea.value.trim() === "") {
        preview.innerHTML = '<span class="placeholder-text">Esikatseluteksti ilmestyy tähän...</span>';
    } else {
        preview.textContent = textArea.value;
    }
});

// harjoitus 4

const feedbackInput = document.querySelector("#feedback");
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

                const textValue = feedbackInput.value.trim();
                const textLength = textValue.length;

               
                statusElement.classList.add("hidden");

               
                if (textLength < 10 || textLength > 200) {
                   
                    statusElement.textContent = `Virhe: Palautkeen tulee olla 10–200 merkkiä pitkä! (Nyt: ${textLength} merkkiä)`;
                    statusElement.className = "p-3 rounded-xl text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/30";
                    statusElement.classList.remove("hidden");
                } else {
                  
                    statusElement.textContent = "Thank you for your feedback!";
                    statusElement.className = "p-3 rounded-xl text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
                    statusElement.classList.remove("hidden");

                   
                    feedbackInput.value = "";
                    charCount.textContent = "0/200";
                    preview.innerHTML = '<span class="text-slate-500 not-italic">Esikatseluteksti ilmestyy tähän...</span>';
                }
            });


// harjoitus 5


document.addEventListener("keydown", function (event) {
    console.log("keydown", event.key, event.code);

});  

const keybox = document.querySelector("#keybox");
document.addEventListener("keydown", function (event) {
    keybox.textContent = ` ${event.key}`;
    keybox.style.fontSize = "4rem";
});