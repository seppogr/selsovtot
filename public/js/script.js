function getInfo() {
    var z;
    var x = document.getElementById("name").value;
    var y = document.getElementById("age").value;
    var s;
    if (y < 50) {
        z = "Oletpa nuori!";
    }
    else {
        z = "Ikäloppu!";
    }

    s = "Vaikuttaa siltä että nimesi on " + x + " ja ikäsi on " + y + "! " + z;
    var infoHere = document.createElement("div");
    infoHere.id = "infohere";
    var closeButton = document.createElement("button");
    closeButton.id = "closebutton";
    var buttonText = document.createTextNode("Poista tiedot");
    closeButton.appendChild(buttonText);


    closeButton.onclick = function () {
        document.getElementById("infohere").remove();
        document.getElementById("closebutton").remove();
    }

    infoHere.innerHTML = s;

    document.getElementById("element2").appendChild(infoHere);
    document.getElementById("element2").appendChild(closeButton)

}

function useModal() {
    var modal = document.getElementById("myModal");

    var openModalButton = document.getElementById("myBtn");

    var closeModalButton = document.getElementById("closeModal");

    openModalButton.onclick = function () {
        modal.style.display = "block";
    }

    closeModalButton.onclick = function () {
        modal.style.display = "none";
    }

}