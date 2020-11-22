<!DOCTYPE html>
<html lang="en">
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cmmn/html2canvas.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cmmn/jquery.plugin.html2canvas.js"></script>


    <style>
      *{
        padding:0;
        margin:0;

      }
        .she8{
            font-size:70px;
            font-weight:bold;
            text-align:center;
        }
        .input-items{
      
        }
        #poster_content{
          width:500px;
          margin:0 auto;
        }
        .sh8-images{
            position: relative;
        }
        .input-items{
            position: absolute;
            bottom:78%;
            left:60px;

        }
        .text{
            height:200px;

        }


    </style>
    <head>
     <div id="poster_content">



        <div id="list_content">



            <p class="she8">아이 싯팔~!</p>
     
        
         <div class="sh8-images">
            <img src="https://image5jvqbd.fmkorea.com/files/attach/new/20200929/2895716/9063/3118377893/99b983892094b5c6d2fc3736e15da7d1.jpg">



            <div class="input-items">
               <textarea id="text" style="resize: none; font-size:19px; border:none; width:258px; height: 70px;" name="text"></textarea>
   
   
   
           </div>
         </div>   


  
     </div>
      </div>

    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
$(document)
.on('click','#save',function(){

function capture() { 
  var content=""; 
  if($("#poster_content").css("display")=="block"){ 
    content="#poster_content"; 
  }else if($("#poster_content").css("display")=="none"){ 
    content="#list_content"; 
  } 
 
  $(content).html2canvas({ 
    onrendered: function (canvas) { 
      var img=canvas.toDataURL("image/png");
      $('#img_val').val(img); 
      //$("#target").html('<img src=' + img + '>');<=target 영역에 캡쳐한 이미지 표시하고 싶을때
      var frm = document.captureForm; 
       frm.action = root + "/capture.do"; 
       frm.submit();         
    } 
  }); 
} 
  
})





</script>
    
   
</script> 