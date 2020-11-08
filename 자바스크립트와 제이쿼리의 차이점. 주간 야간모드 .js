/*$(document)
.on('click','#day',function(){
  if($('#day').val()=="야간모드"){
  $("#body1").css("background-color",'black'); 
  $('#day').val("주간모드");
  }else{
    $("#body1").css("background-color",'white'); 
  $('#day').val("야간모드");
  }

  

});
*/
function running(){
  var v1 = document.getElementById("day");
  if(v1.value =="야간모드"){
document.querySelector('body').style.backgroundColor='black';
 document.querySelector('#day').value="주간모드"
  }else{
     document.querySelector('body').style.backgroundColor='white';
    v1.value = "야간모드"
  }

}


