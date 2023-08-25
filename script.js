//your JS code here. If required.
const color=document.getElementById("colorSelect");
const button=document.getElementsByTagName("input")[0];

const arr=color.children;
button.addEventListener("click",deleteit);
 function deleteit(){
	 let inputed=color.value;
	
	 for(let i=0;i<arr.length;i++){
		 if(arr[i].value===inputed){
			 color.removeChild(arr[i]);
		 }
	 }
}