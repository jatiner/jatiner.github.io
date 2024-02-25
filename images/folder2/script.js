const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["ChildPattern1.png", "ChildPattern2.png", "ChildPattern3.png", "ChildPattern4.png", "ChildPattern5.png", "ChildPattern6.png", "ChildPattern7.png", "ChildPattern8.png", "ChildPattern9.png", "ChildPattern10.png" /* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = "images/" + imageName; 
    imageContainer.appendChild(img); 
});
