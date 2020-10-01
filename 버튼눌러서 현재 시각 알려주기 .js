function myFunction(){
 var today =new Date();
  document.write(today);
}
 

<div class="button-items">
     <button onclick="myFunction()">날짜 정보 알려주기  </button>
   </div>



.button-items{
  border:1px solid pink;
  background:pink;
  width:200px;
  height:50px ;
  border-radius: 5px;
  color:white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  margin:0 auto;
  
}

button{
   
  background:pink;
  width:200px;
  height:50px ;
  border-radius: 5px;
  color:white;
  text-align: center;
  line-height: 50px;
  outline: none;
  border:0;
  cursor: pointer;
}