# SlideImg
基于jQuery的图片滚动控件 -- a test plug-ins for sliding image

example:

<script type="text/javascript" language="javascript" src="js/jquery.js"></script>
	<script type="text/javascript" language="javascript" src="js/SlideImg.js"></script>
	<link type="text/css" href="css/SlideImg.css" rel="stylesheet">
	</head>
	<body>
		<div style="" id="container">
		<script type="text/javascript">
			var slideimg=new slideImg($("#container"),{width:600,height:400,interval:3000});
		</script>
		</div>
	</body>
	
	param1:放置该控件的容器
	param2:参数对象(图片的url和链接以json格式保存，长度高度自己可以设置)
	  如 Settings={
			width:400,	//控件长度
			height:300,	//控件高度
			num:0,		//此参数不需要配置
			interval:4000,	//图片自动滚动时间间隔
			jsondata:{	//图片src和链接的json数据
				"ImgObj":[{"imgurl":"image/z1.jpg","alink":"http://www.tianlian.com"},
				{"imgurl":"image/z2.jpg","alink":"http://www.tianlian.cn"},
				{"imgurl":"image/z3.jpg","alink":"http://www.tmall.com"}]
			}
		};
		
		ps:练习练习 ^ _ ^ . . .

