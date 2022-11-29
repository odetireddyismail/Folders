var containner=document.getElementById('containner')
var button1=document.getElementById('button');
var span=document.getElementById('span');

button1.addEventListener('click',function(){
    containner.style.display='block';
});
span.addEventListener('click',function(){
    containner.style.display='none';
})