const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["Norse1.png", "Norse2.png", "Norse3.png", "Norse5.png", "Norse6.png", "Norse7.png", "Norse8.png", "Norse9.png", "Norse10.png"/* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = "images/" + imageName; 
    imageContainer.appendChild(img); 
});
