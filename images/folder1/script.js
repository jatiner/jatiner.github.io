const imageContainer = document.querySelector('.gallery-container');
const imageNames = ["SpringPattern3", "SpringPattern4", "SpringPattern6", "SpringPattern8", "SpringPattern9", "SpringPattern10", "SpringPattern12", "SpringPattern14", "SpringPattern16", "SpringPattern21"/* ... add your 10 image names */];

imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = imageName; 
    imageContainer.appendChild(img); 
});
