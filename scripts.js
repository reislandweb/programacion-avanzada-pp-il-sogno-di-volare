const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];
const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];
const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

//PRUEBAS CIVIL

// const id = Math.floor(Math.random()*9)+1;
const arrCivil = [...civilAircrafts,...civilHelicopters];
// console.log(arrCivil[id]);

//PRUEBAS MILITAR

// const id = Math.floor(Math.random()*9)+1;
const arrMilitar = [...militaryAircrafts, ...militaryHelicopter];
// console.log(arrMilitar[id]);

// console.log([...arrCivil,...arrMilitar]) global

 
 
class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const id = Math.floor(Math.random()*9)+1;
        const arrCivil = [...civilAircrafts,...civilHelicopters];
        console.log(arrCivil[id]);
        return arrCivil[id];

    }
    getRandomMilitary() {
        const id = Math.floor(Math.random()*9)+1;
        const arrMilitar = [...militaryAircrafts, ...militaryHelicopter];
        console.log(arrMilitar[id]);
        
        return arrMilitar[id];
    }
    
    getAll() {
        const arrVehiculos = [...arrCivil, ...arrMilitar];
        console.log(arrVehiculos);
        return arrVehiculos;
    }
}
let miGallery = new Gallery()
miGallery.getRandomCivil();
miGallery.getRandomMilitary();
miGallery.getAll();


class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        const section = document.createElement("section");
        document.body.appendChild(section);
        this.gallery = section;
    }
    createImageTag(imageUrl) {
        const picture = document.createElement("picture");
        const img = document.createElement("img");

        img.src = imageUrl;
        picture.appendChild(img);
        return picture;
    }
    paintSingleImage(imageUrl) {
        const url = this.createImageTag(imageUrl);
        this.gallery.appendChild(url);
    }
    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(painUrl => {
            this.paintSingleImage(painUrl);
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();