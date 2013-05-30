/*! This is functions JS */

var post = 'dataCwb.php';

function verifyInputCon(){
	var imgStr=$("#imgStr").val();
	var imgUpload=$("#imgUploadTxt").val();
	if(imgStr=='' && imgUpload==''){
		alert("您要转换的内容不能为空!");
		return false;
	}
	return true;
//验证表单
}

function sendCwb(){
	var imgStr=$("#imgStr").val();
	var wbTitle=$("#wbTitle").val();
	var wbName=$("#wbName").val();
	var imgUpload=$("#imgUploadTxt").val();
	var fFont=$('input:radio[name="fFont"]:checked').val();
	if(verifyInputCon()){
		Ajaxload();
		$.post(post,{type:'sendCwb',wbTitle:wbTitle,wbName:wbName,fFont:fFont,cwbCon:imgStr,imgUpload:imgUpload},function(data){
		//返回完成状态
			AjaxRstate(data);
		},'json');
		return false;
	}
}

function AjaxRstate(data){
	if(data.status=='1'){
		//alert('ok');
		//alert(data.cwbCon);
		$(".ajaxload").addClass('dnone');
		$(".cwbResponseWrapper").addClass('dnone');
		$(".cwbResponseWrapper").html(data.cwbCon);
		$(".cwbResponseWrapper").fadeIn(1000);
	}
}

function Ajaxload(){
	$(".cwbTxtWrapper").hide();
	$(".cwbDefaultWrapper").hide();
	$(".ajaxload").removeClass('dnone');
	$("#topads").addClass("dnone");
	$("#topdes").removeClass("dnone");
	$("#ggads728ad").html(getads());
}

function resetCwb(){
	$(".cwbResponseWrapper").html('');
	$(".cwbTxtWrapper").fadeIn(1000);
	$(".cwbDefaultWrapper").fadeIn(1000);
	$("#topads").removeClass("dnone");
	$("#topdes").addClass("dnone");
	$("#topads").html(getads());
	$("#ggads728ad").html(getads());
}


function favSite(){  
	var title='长微博工具-长微博生成器-长微博转换器';//document.title;
	var url=location.href;
	if(document.all){ 
	window.external.AddFavorite( url, title);
	}else{
	alert("对不起，您的浏览器不支持自动收藏，请手动收藏 cwbgj.com");
	return false;  
	} 
}

function tiaoKan(vals){
	if(vals==1){
		alert("╭∩╮（︶︿︶）╭∩╮鄙视你！你认为自己很文艺吗？");
	}else{
		alert("⊙﹏⊙b，听哥的话，这个暂时不适合你！");
	}
}

function randnum(){
	var rnum=Math.round(Math.random())+1;
	return rnum;
}

function getads(){
	var rnum = randnum();
	var timestamp = new Date().getTime();
	var adshtml = '<iframe src="ads_728_90_2.html?t='+timestamp+'" width="728" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>';
	return adshtml;
}










