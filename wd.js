// javascript for webdok example
window.addEventListener("load",
	function(){
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
				if(nodes[i].getBoundingClientRect().top>=0 &&
					nodes[i].getBoundingClientRect().bottom<window.innerHeight)
				{
					nodes[i].setAttribute("class","fading");
				} else {	
					nodes[i].setAttribute("class","");
				}
			}



		})
	})
