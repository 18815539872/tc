$(document).ready(function(){$("#thumbnail li a").click(function(){$(".zoompic img").hide().attr({"src":$(this).attr("href"),"title":$("> img",this).attr("title")});$("#thumbnail li.currentt").removeClass("currentt");$(this).parents("li").addClass("currentt");return false});$(".zoompic>img").load(function(){$(".zoompic>img:hidden").show()});var $slider=$(".sliderr ul");var $slider_child_l=$(".sliderr ul li").length;var $slider_width=$(".sliderr ul li").width();$slider.width($slider_child_l*$slider_width);var slider_count=0;if($slider_child_l<4){$("#btn-right").css({cursor:"auto"});$("#btn-left").css({cursor:"auto"});$("#btn-right").addClass("dasabled")}$("#btn-right").click(function(){if($slider_child_l<3||slider_count>=$slider_child_l-3){return false}slider_count++;$slider.animate({left:"-="+$slider_width+"px"},"fast");slider_pic()});$("#btn-left").click(function(){if(slider_count<=0){return false}slider_count--;$slider.animate({left:"+="+$slider_width+"px"},"fast");slider_pic()});function slider_pic(){if(slider_count>=$slider_child_l-3){$("#btn-left").css({cursor:"pointer"});$("#btn-right").css({cursor:"auto"});$("#btn-left").removeClass("dasabled");$("#btn-right").addClass("dasabled")}else{if(slider_count>0&&slider_count<=$slider_child_l-3){$("#btn-left").css({cursor:"pointer"});$("#btn-right").css({cursor:"auto"});$("#btn-left").removeClass("dasabled");$("#btn-right").addClass("dasabled")}else{if(slider_count<=0){$("#btn-left").css({cursor:"auto"});$("#btn-right").css({cursor:"pointer"});$("#btn-left").addClass("dasabled");$("#btn-right").removeClass("dasabled")}}}}});