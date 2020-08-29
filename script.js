var api = "https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec";
fetch(api).then(response => {
	return response.json();
})
.then(data => {
	console.log('data:',data[0].slots);
	console.log(Date(1));
	for (i=0;i<data[0].slots.length;i++) {
		var opt = document.createElement("option");
		var date = data[0].slots[i].slot;
		var dr = parseInt(date);
		var d = new Date(dr);
		
		document.getElementById("slot").innerHTML += '<option id="' + i + '">' + d + '</option>';
	}
	
	for(j=0;j<data.length;j++) {
		var op = document.createElement("option");
		co = data[j].course_name
		console.log(co);
		document.getElementById("course").innerHTML += '<option id="' + i + '">' + co + '</option>';
	}
})
.catch(err => {
	console.log("errior",err);
});
