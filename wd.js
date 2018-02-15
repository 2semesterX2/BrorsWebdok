// javascript for webdok example
window.addEventListener("load", armMyEvents() );

function armMyEvents() {
		window.addEventListener("scroll", 
		   function(){
			var nodes = document.querySelectorAll("[boom-anim]");
			for (var i=0; i<nodes.length; i++){
				if(nodes[i].getBoundingClientRect().top>=0 &&
					nodes[i].getBoundingClientRect().bottom<window.innerHeight)
				{
					nodes[i].setAttribute("class","active");
				} else {	
					nodes[i].setAttribute("class","");
				}
			}

			var nodes= document.getElementsByTagName("P");
			for (var i=0; i<nodes.length; i++){
		//		if(nodes[i].getBoundingClientRect().top>=0 &&
		//			nodes[i].getBoundingClientRect().bottom<window.innerHeight)
				if(elFllVsbl(nodes[i]))
				{
					nodes[i].setAttribute("class","fading");
				} else {	
					nodes[i].setAttribute("class","");
				}
			}

			var mySound= document.getElementById("myaudio");
				if(elFllVsbl(mySound.parentElement))
				{
					if (!(mySound.currentTime>0)){
						mySound.play();
						console.log("PLAY");
					}
				} else {	
					mySound.pause();
					mySound.currentTime=0;
					console.log("PAUSE");
				}
		   }
		)
}
function elFllVsbl(el){
		return (el.getBoundingClientRect().top>=0 &&
				el.getBoundingClientRect().bottom<window.innerHeight)
} 