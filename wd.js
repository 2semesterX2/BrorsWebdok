// javascript for webdok example
window.addEventListener("load", armMyEvents() );

var myPauseTime=0;

function armMyEvents() {
		window.addEventListener("scroll", 
		   function(){
			var nodes = document.querySelectorAll("[boom-anim]");
			for (var i=0; i<nodes.length; i++){
				if(elFllVsbl(nodes[i]))
				{
					nodes[i].setAttribute("class","active");
				} else {	
					nodes[i].setAttribute("class","");
				}
			}

			var nodes= document.getElementsByTagName("P");
			for (var i=0; i<nodes.length; i++){
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
//						console.log("PLAY");
					}
				} else {	
					mySound.pause();
					mySound.currentTime=0;
//					console.log("PAUSE");
				}

			var myVid = document.getElementById("myvideo");
				if (elFllVsbl(myVid))
					{
						if (!(myVid.currentTime>0) || (myVid.currentTime==myPauseTime)){
							myVid.play();
							console.log("VideoPLAY");
						}
					} else {	
						myVid.pause();
						myPauseTime = myVid.currentTime;
						console.log("VideoPAUSE");
					}
		   }
		)
}
function elFllVsbl(el){
		return (el.getBoundingClientRect().top>=0 &&
				el.getBoundingClientRect().bottom<window.innerHeight)
} 