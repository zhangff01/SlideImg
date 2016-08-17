//       name--SlideImg
//       user--zhangff01
//    version--v0.0.1
//       time--2016.08
//description--a test plug-ins for sliding image
;(function(Window,jQuery,document,undefined){
	"use strict";
	var Settings;
	if(!Settings){
		Settings={
			width:400,
			height:300,
			num:0,
			interval:4000,
			jsondata:{
				"ImgObj":[{"imgurl":"image/z1.jpg","alink":"http://www.tianlian.com"},
				{"imgurl":"image/z2.jpg","alink":"http://www.tianlian.cn"},
				{"imgurl":"image/z3.jpg","alink":"http://www.tmall.com"}]
			}
		};
	}
	function SlideImg(element,options){
		this._element=element;
		this.options=$.extend({},Settings,options||Settings);
		this.init();
	}
	SlideImg.prototype={
		constructor:SlideImg,
		init:function(){
			this.renderHtml();
			this.bindEvent();
			setInterval(this.autoclick,this.options.interval);
		},
		renderHtml:function(){
			var _this=this;
			var options=this.options;
			var _width=options.width+"px";
			var _height=options.height+"px";
			var sum=0;
			var html=[];
			html.push('<div class="slider" style="width:'+_width+';height:'+_height+'"><div class="slider-body"><ul class="slider-main">');
			$.each(options.jsondata.ImgObj,function(i,obj){
				if(i==0){
					html.push('<li><a href="'+obj.alink+'">');
				}else{
					html.push('<li style="display:none;"><a href="'+obj.alink+'">');
				}
				html.push('<img src="'+obj.imgurl+'" height='+_height+' width='+_width+' /></a></li>');
				sum++;
			});
			html.push('</ul></div><div class="slider-nav"><ul class="nav_ul">');
			$.each(options.jsondata.ImgObj,function(i,obj){
				if(i==0){
					html.push('<li class="active nav_li"></li>');
				}else{
					html.push('<li class="nav_li"></li>');
				}
				
			});
			html.push('</ul></div><div class="slider-page" style="display:none;">');
			html.push('<a href="javascript:void(0)" class="slider-prev">&lt;</a>');
			html.push('<a href="javascript:void(0)" class="slider-next">&gt;</a>');
			html.push('</div></div>');
			var html_str=html.join("");
			_this._element.append(html_str);
			options.num=sum;
		},
		bindEvent:function(){
			var _this=this;
			_this._element.on("hover",".nav_ul li",function(){
				var _index=$(this).index();
				$(this).removeClass("close").addClass("active");
				$(this).siblings().removeClass("active").addClass("close");
				$(".slider-main li").eq(_index).show();
				$(".slider-main li").eq(_index).siblings().hide();
			});
			_this._element.on("mouseover mouseout",".slider-body,.slider-nav,.slider-page a",function(event){
				if(event.type == "mouseover"){
					$(".slider-page").show();
 				}else if(event.type == "mouseout"){
					var s = event.toElement||event.relatedTarget;
					if(s.className=="nav_ul"||s.parentNode.className=="slider-page")
						return false;
					$(".slider-page").hide();
 				}
			});
			_this._element.on("click",".slider-prev",function(){
				var nums=_this.options.num-1;
				var _index=$(".nav_ul .active").index();
				(_index==0)?_index=nums:_index=_index-1;
				_this.othercode(_index);
			});
			_this._element.on("click",".slider-next",function(){
				var nums=_this.options.num-1;
				var _index=$(".nav_ul .active").index();
				(_index==nums)?_index=0:_index=_index+1;
				_this.othercode(_index);
			});
		},
		othercode:function(your_num){
			$(".slider-main li").eq(your_num).show();
			$(".slider-main li").eq(your_num).siblings().hide();
			$(".nav_ul li").eq(your_num).removeClass("close").addClass("active");
			$(".nav_ul li").eq(your_num).siblings().removeClass("active").addClass("close");
		},
		autoclick:function(){
			$(".slider-next").trigger("click");
		}
	}
	Window.slideImg = SlideImg;
})(window,jQuery,document)
