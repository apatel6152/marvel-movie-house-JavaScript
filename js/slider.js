<<<<<<< Updated upstream
var i=0;
var imagefiles=['marvel.jpg','avenger.jpg','avenger3.png','ironman1.jpg','endgame.jpg'];
window.setInterval(startSlider,2000);

=======
<<<<<<< HEAD
var i = 0;
var imagefiles = [
  'marvel.jpg',
  'avenger.jpg',
  'avenger3.png',
  'ironman1.jpg',
  'allhero.jpg',
];
window.setInterval(startSlider, 2000);

function startSlider() {
  document.getElementById('topimg').src = './image/' + imagefiles[i];
  i++;
  if (i > 4) {
    i = 0;
  }
}
=======
var i=0;
var imagefiles=['marvel.jpg','avenger.jpg','avenger3.png','ironman1.jpg','endgame.jpg'];
window.setInterval(startSlider,2000);

>>>>>>> Stashed changes
function startSlider()
{
	document.getElementById("topimg").src="./image/"+imagefiles[i];
	i++;
	if(i>4)
	{
		i=0;
	}
<<<<<<< Updated upstream
}
=======
}
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
