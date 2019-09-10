var displayedImage = document.querySelector('.displayed-img'); // The large image
var thumbBar = document.querySelector('.thumb-bar'); // The thumbnails

var btn = document.querySelector('button'); // The "darken" button
var overlay = document.querySelector('.overlay'); // The overlay that causes the "darken" effect

/* Looping through images */

for (i=1; i <= 5; i++) {
  var newImage = document.createElement('img'); // Creates a new (empty) image in the thumbBar
  newImage.setAttribute('src', `images/pic${i}.jpg`); // Pulls an image from the "images" folder
  thumbBar.appendChild(newImage); // Adds that picture to the thumbBar, then loops again for each picture
  
  // Pseudo code: add a new eventListener to each newImage
  // onclick, set source of displayedImage to the src of the clicked image
  
  // Find the value of the src attribute of the current image
  /*
  function findSrc() { // Origionally used two functions, combined them into one --> so commented out this func, and the first line of the setImg func below
    let fromSrc = event.target.getAttribute('src');
    return fromSrc;
  }*/
  
  
  function setImg() {
    //let fromSrc = findSrc();
    let fromSrc = event.target.getAttribute('src'); // Targets the event that triggered the action, ie the img clicked, and returns the 'src' attribute
    displayedImage.setAttribute('src', fromSrc); // Uses the returned 'src' attribute and inserts it into the displayedImage
  }

  newImage.addEventListener('click', setImg); // When the newImage is clicked, runs the setImg function
  

}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', clickBtn);

function clickBtn () {
  let statusBtn = btn.getAttribute('class'); // Get the current status of the button
  if (statusBtn === 'dark') { // If it's already dark --> turn it light
    btn.setAttribute('class', 'light'); // Turns class to 'light'
    btn.innerHTML = 'Lighten'; // Changes the text on the button to "Lighten"
    overlay.setAttribute('style', 'background-color: rgba(0,0,0,0.5)'); // Set's the overlay to a 50% transperancy
  } else { // If it's not 'dark' (aka, if its 'light), set it to 'dark'
    btn.setAttribute('class', 'dark'); // Set button class to "dark"
    btn.innerHTML = 'Darken'; // Change the text of button to "Darken"
    overlay.setAttribute('style', 'background-color: rgba(0,0,0,0)'); // Make the overlay transparent again
  }
}



/* All of my failed attempts to get the code to work

  let imageTarget;
  newImage.getAttribute('src', imageTarget);

  function setImg (fromSrc) {
    displayedImage.setAttribute('src', fromSrc);
  }

  newImage.addEventListener('click', setImg, false);




  displayedImage.onclick = function fromSrc(e) {
    e.target.getAttribute('src', fromSrc);
  }

  function makeLarge(e) {
    let fromSrc;
    e.target.getAttribute('src', fromSrc);
    displayedImage.setAttribute('src', `images/pic1.jpg`);
  }

  newImage.addEventListener('click', makeLarge);
}


  


  let eachImage = 'newImage' + i;
  eachImage.onclick = function(e) {
    let fromSrc;
    e.target.getAttribute('src', fromSrc);
    displayedImage.setAttribute('src', fromSrc);
  }


// Pseudo code: add a new eventListener to each newImage
// onclick, set source of displayedImage to the src of the clicked image


let fromSrc = "";
newImage.addEventListener('click', getAttribute('src', fromSrc));
displayedImage.setAttribute('src', fromSrc);





newImage.addEventListener('click', makeLarge);

function makeLarge(e) {
  let fromSrc = "";
  e.target.getAttribute('src', fromSrc);
  displayedImage.setAttribute('src', fromSrc);
}

  newImage.onclick = showImage(e);
  
  function showImage(e) {
    srcPath = `images/pic${e}.jpg`;
    displayedImage.setAttribute('src', srcPath);
  }



  
  newImage.addEventListener('click', showImage); // When clicked, run the showImage function
  

  function showImage() {
    let imgNum = `pic${i}.jpg`;
    let srcPath = newImage.getAttribute('src');
    displayedImage.setAttribute('src', srcPath);
  }*/