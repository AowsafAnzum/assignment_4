// image container color chaingin
var imgContainer = document.querySelector('.img-container');
imgContainer.style.setProperty('background-color', 'blue', 'important');

// text-denger color change
var textDangerElements = document.querySelectorAll('.text-danger');
textDangerElements.forEach(function(element) {
  element.style.setProperty('color', 'blue', 'important'); 
});

// button text color
var button = document.getElementById('iits-btn');
button.classList.add('btn-primary'); 

// i have added a picture in that folder.
var image = document.getElementById('iits-img');
image.src = 'taqi.jpeg'; 

// Change the copyright message
var copyrightMessage = document.getElementById('iits-cr-msg');
copyrightMessage.textContent = 'welcome'; 

// Modifing the text information 
document.getElementById('iits-name').textContent = 'Aowsaf Anzum';
document.getElementById('iits-prof').textContent = 'graduation student';
document.getElementById('iits-edu').textContent = 'Computer Science and Engineering';
document.getElementById('iits-study').textContent = 'IUBAT';
document.getElementById('iits-school').textContent = 'Thakurgaon government college';
document.getElementById('iits-passion').textContent = 'Full-stack-development';
document.getElementById('iits-numYears').textContent = 'almost 6 months';
document.getElementById('iits-hobby').textContent = 'reading books and travelling';
document.getElementById('iits-crc').textContent = 'a debater from school life';
document.getElementById('iits-ability').textContent = 'to think diversively and give me that ability to take proper decisions';
document.getElementById('iits-goal').textContent = 'make the internet more safe and more interective';

// button padding color
var button = document.getElementById('iits-btn');
button.classList.remove('btn-danger'); 
button.style.backgroundColor = 'blue';


// Change the social media links
 
document.getElementById('iits-email').href = 'mailto:tawsiftaqibd07@gmail.com'; 
document.getElementById('iits-github-link').href = 'https://github.com/AowsafAnzum'; 



