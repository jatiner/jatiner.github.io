const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["SpringPattern3.png", "SpringPattern4.png", "SpringPattern6.png", "SpringPattern8.png", "SpringPattern9.png", "SpringPattern10.png", "SpringPattern12.png", "SpringPattern14.png", "SpringPattern16.png", "SpringPattern21.png"/* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = imageName; 
    imageContainer.appendChild(img); 
});
