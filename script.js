const menuBtn = document.querySelector('.menu-hamburger');

const div = document.createElement('DIV');
div.style.height = "100vh";
div.style.width = '30vw';
div.style.position = "absolute"
div.style.top = 0;
div.style.right = 0;
div.style.background = "rgba(61, 49, 49, .4)";
div.style.animation = "fromTop .4s  ease";
div.style.padding = "125px 15px";


const link = document.createElement('p');
link.innerHTML = "Link";
link.style.fontSize = '1.3rem';
link.style.margin = '15px';
link.classList.add('link');
div.appendChild(link);

const linkContent = document.createElement('a');
linkContent.innerHTML = "Alternate way you can help the planet";
linkContent.style.fontSize = '1.3rem';
linkContent.style.margin = '15px';
linkContent.style.color = "white";
div.appendChild(linkContent);
linkContent.href="heyimjustjoking.html";
linkContent.classList.add('linkContent');

const tip = document.createElement('p');
tip.innerHTML = "Tip";
tip.style.fontSize = '1.3rem';
tip.style.margin = '15px';
div.appendChild(tip);
tip.classList.add('tip');


const tipContent = document.createElement('p');
tipContent.innerHTML = "You should carry a plant  with you to replace the oxygen you waste.";
tipContent.style.fontSize = '1.3rem';
tipContent.style.margin = '15px';
tipContent	.style.color = "white";
div.appendChild(tipContent);
tipContent.classList.add('tipContent');






let toggled = false;

menuBtn.addEventListener('click', _=>{
	if(!toggled){
document.body.appendChild(div);
	toggled=true;
	}else{
	document.body.removeChild(div);
	toggled=false;
	}
})