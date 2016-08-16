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
			var x=new slideImg($("#container"));
		</script>
		</div>
	</body>
	
	param1:放置该控件的容器
	param2:参数对象(图片的url和链接以json格式保存，长度高度自己可以设置)
	  如 Settings={
			width:400,
			height:300,
			num:0,
			jsondata:{
				"ImgObj":[{"imgurl":"image/z1.jpg","alink":"http://www.tianlian.com"},
				{"imgurl":"image/z2.jpg","alink":"http://www.tianlian.cn"},
				{"imgurl":"image/z3.jpg","alink":"http://www.tmall.com"}]
			}
		};
		
		ps:练习练习 ^ _ ^ . . .

