function nightDay(){
if(document.querySelector('#night_Day').value=='night'){
   document.querySelector('body').style.color='white'
   document.querySelector('body').style.backgroundColor='black'
   document.querySelector('#night_Day').value='day'
}else{
  document.querySelector('body').style.color='black'
  document.querySelector('body').style.backgroundColor='white'
  document.querySelector('#night_Day').value='night'
}



}