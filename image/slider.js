var i=0;
var imagefiles=['marvel.jpg','avenger.jpg','assemble.jpg','ironman3.jpg','team2.jpg'];
window.setInterval(startSlider,2000);

function startSlider()
{
	document.getElementById("topimg").src="./image/"+imagefiles[i];
	i++;
	if(i>4)
	{
		i=0;
	}
}

// var j=0;
// var image_files=['a.jpg','b.jpg','c.jpg','d.jpg'];
// window.setInterval(startSlider,1000);

