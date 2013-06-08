/*! This is basic JS */

//ready code;
$(function(){
//ready strart;
	if($("#isfirst").val() == 1){
		$("#imgStr").val(saying);
	}
	$("#imgStr").one("click", function(){
		$(this).val('');
		$(this).removeClass('defaultTxt');
	});
//ready end;
});


