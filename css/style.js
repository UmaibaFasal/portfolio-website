let i=0;
let txt="Hey there!!";
let speed=250;
function typing(){
	if(i<txt.length){
		document.getElementById("blink").innerHTML+=txt.charAt(i);
		i++;
		setTimeout(typing,speed);
	}
}
typing();
let button=document.getElementById('menu');
let list=document.getElementById('option');
list.style.display="none";
menu.addEventListener("click",(event)=>{
	if(list.style.display=="none")
		list.style.display="block";
	else
		list.style.display="none";
})