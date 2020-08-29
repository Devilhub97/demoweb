var api = "https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec";
fetch(api).then(response => {
	return response.json();
})
.then(data => {
	for (i=6;i<24;i++) {
		var opt = document.createElement("option");
		var date = data[0].slots[i].slot;
		var dr = parseInt(date);
		var d = new Date(dr);
		
		document.getElementById("slot").innerHTML += '<option id="' + i + '">' + d.getHours()+":"+d.getMinutes() + "-" + 
		(d.getHours() + 1) +  ":" + d.getMinutes()+'</option>';
	}
	
	for(j=0;j<data.length;j++) {
		var op = document.createElement("option");
		co = data[j].course_name
		
		document.getElementById("course").innerHTML += '<option id="' + i + '">' + co + '</option>';
	}
})
.catch(err => {
	console.log("errior",err);
});
var k =0;

for(i=0;i<7;i++) {
	var op = document.createElement("option");
	var r = new Date();
	
	if(i==0 || i==1 || i==2){
	document.getElementById("date").innerHTML += '<option id="' + i + '">' + (r.getDate() + i)+"/"+(r.getMonth()+1)+"/"+r.getFullYear()+'</option>';
	}
	else {
		
		document.getElementById("date").innerHTML += '<option id="' + i + '">' +(1+k)+"/"+(r.getMonth()+2)+"/"+r.getFullYear()+'</option>';
		k++;
	}
}