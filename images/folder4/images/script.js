const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["image1.jpg", "image2.jpg", /* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = "images/" + imageName; 
    imageContainer.appendChild(img); 
});
