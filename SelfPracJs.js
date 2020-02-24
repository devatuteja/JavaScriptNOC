var crudApp = new function(){
	//AN array of json objects with values 
	this.myBooks = [
	 { ID: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
     { ID: '2', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
     { ID: '3', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 }]
}

this.category = ["Business","computers","programming","Science"];
this.col =[];

this.createtable = function(){
	//extract value for table header
	for (var i =0; i < this.myBooks.length; i++)
	{
		for (var key in this.myBooks[i]){
			if(this.col.indexof(key)===-1){
				this.col.push(key);
			}
		}
	}
}

//create a table 
var table = document.createElement('table');
table.setAttribute('id', 'booksTable'); //set table id

var tr = table.insertRow(-1);

for (var h =0; h< this.col.length;h++){
	//add table header
	var th = document.createElement('th');
	th.innerHTML = this.col[h].replace('_','')
	tr.appendChild(th);

}
//add rows using json data 
for (var i =0; i < this.myBooks.length;i++ ){
	
}



