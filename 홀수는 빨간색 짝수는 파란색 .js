var a=1;
var b=1;

var x = document.getElementById("a");

while(a<=30){
  if(a%2==0){
    document.write("<p class='blue'>"+a+"</p>");
    
  }else{
    document.write("<p class='red'>"+a+"</p>");
  }


  a++;

}



.blue{
  color:blue;
}
.red{
  color:red;
}