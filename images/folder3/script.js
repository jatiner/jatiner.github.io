const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["LightVoid 1.png", "LightVoid 2.png", "LightVoid 3.png", "LightVoid 4.png", "LightVoid 5.png", "LightVoid 6.png", "LightVoid 7.png", "LightVoid 8.png", "LightVoid 9.png", "LightVoid 10.png" /* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = "images/" + imageName; 
    imageContainer.appendChild(img); 
});
