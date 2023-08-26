const imageLocation = ["./images/CBMW.png", "./images/game_image.png"];
const strings = ["My First Hackaton: \n Created an website that helps with cost of living crisis and information about the users credit score", "Dissertation: \ncreated a snake game environment with multiple different path finding algorithms and one trained model using evolutionary algorithm and supervised learning methodology."];

let image;
const imageSection = document.querySelector(".images_section");
let section;
let string;
let holderImage;
let holderString;

for (let i = 0; i < imageLocation.length; i++){

    image = document.createElement("img");
    section = document.createElement("div");
    string = document.createElement("h7");
    string.appendChild(document.createTextNode(strings[i]));

    holderImage = document.createElement("div");
    holderString = document.createElement("div");

    image.src = imageLocation[i];

    image.alt = imageLocation[i].split("/")[2];
    holderImage.appendChild(image)
    holderString.appendChild(string)

    // if even (start placing on the left)
    if (i % 2 == 0){
        section.appendChild(document.createElement("div").appendChild(holderImage));
        section.appendChild(document.createElement("div").appendChild(holderString));
    }else{
        section.appendChild(document.createElement("div").appendChild(holderString));
        section.appendChild(document.createElement("div").appendChild(holderImage));
    }

    imageSection.appendChild(section)
    imageSection.appendChild(document.createElement("br"))
}