<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script language="javascript">
var menuName = 0;
var menuCount = 0;
var menuPrice = 0;
var price = 0 ;
var count = 0 ;
var totalSum = 0 ;
$(document)
.on("click","#select1",function(){
	 id=$(this).find('option:selected').text();
	 console.log(id);
	 ar = id.split(',');
	 menuName = $("#menuName").val(ar[0]);
	 menuPrice =  $("#total").val(ar[1]);
	 menuCount =  $("#count").val();
	
})
$(document)
.on("click","#order",function(){
	id=$("#select1").find('option:selected').text();
	ar = id.split(',');
	 menuName = $("#menuName").val();
	 menuPrice =  $("#total").val();
	 menuCount =  $("#count").val();
	 name='<option>'+[menuName]+','+[menuPrice]+','+[menuCount]+'</option>';
	 $('#orderlist').append(name);
	 console.log(name)
	
})
$(document)
.on("click","#orderlist",function(){
	id=$(this).find('option:selected').text();
	console.log(id);
	ar = id.split(',');
	console.log(ar);
	console.log(ar[1]);
	console.log(ar[2]);
	price=parseInt(ar[1]);
	count=parseInt(ar[2]);
	console.log(price);
	console.log(count);
	console.log(price*count);
	result = price*count;
	$("#totalMoney").val(result);
	
})
$(document)
.on("click","#confirm",function(){
	var t1 = $("#totalMoney").val();
	console.log(t1);
	name='<option>'+[t1]+'</option>';
	$('#result').append(name);
	$("#menuName").val("");
	$("#count").val("");
	$("#total").val("");
	$("#totalMoney").val("");
	$('#orderlist').children('option').remove();

	
})
$(document)
.on("click","#todayTotalButton",function(){
	id=$("#result").find('option:selected').text();
	console.log(id);
	ar = id.split(',');
	var t8 = parseInt(ar);
	console.log(t8);
	totalSum = totalSum+t8
	$("#todayTotal").val(totalSum);
	
})
$(document)
.on("click","#cancle",function(){
	$("#menuName").val("");
	$("#count").val("");
	$("#total").val("");
})
</script>
