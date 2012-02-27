/***************************/
//@Author: Adrian "yEnS" Mato Gondelle &amp;amp;amp; Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "general":
				//change status &amp;amp;amp; style menu
				$("#general").addClass("active");
				$("#tutorials").removeClass("active");
				$("#links").removeClass("active");
				//display selected division, hide others
				$("div.general").fadeIn();
				$("div.tutorials").css("display", "none");
				$("div.links").css("display", "none");
			break;
			case "tutorials":
				//change status &amp;amp;amp; style menu
				$("#general").removeClass("active");
				$("#tutorials").addClass("active");
				$("#links").removeClass("active");
				//display selected division, hide others
				$("div.tutorials").fadeIn();
				$("div.general").css("display", "none");
				$("div.links").css("display", "none");
			break;
			case "links":
				//change status &amp;amp;amp; style menu
				$("#general").removeClass("active");
				$("#tutorials").removeClass("active");
				$("#links").addClass("active");
				//display selected division, hide others
				$("div.links").fadeIn();
				$("div.general").css("display", "none");
				$("div.tutorials").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});
