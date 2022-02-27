
var record = [
	{
		"singer": "Blake Shelton",
		"album": "Home",
		"released_year": 2008,
		"no_of_songs": 2
	},
	{
		"singer": "Enrique Iglesias",
		"album": "Escape",
		"released_year": 2001,
		"no_of_songs": 4
	},
	{
		"singer": "Adam Levine",
		"album": "Sugar",
		"released_year": 2015,
		"no_of_songs": 3
	},
	{
		"singer": "Lorde",
		"album": "Team",
		"released_year": 2013,
		"no_of_songs": 2
	}
];

/--------------------------find records--------------------------------------- /

function findArtist (artist){
	for (var i = 0; i < record.length; i++){
		if (artist === ""){
			return "Type in the name to get the result.";
		}
		if (record[i].singer.toLowerCase() === artist.toLowerCase())
		{
			return record[i];    
		}
    }return "No record found.";
};

function findRecords (){
    var artist = document.getElementById("displaysinger").value;

	var message = JSON.stringify(findArtist(artist));

	message = message.replace(/[{""}]/g, '');

	document.getElementById("displaycontent").innerHTML = 
		"<h3>" + message.toUpperCase() + "</h3>";
};

	document.getElementById("displaybutton").onclick = findRecords;
	

/-----------------------------add records------------------------------------ /

function addArtist (singer, album, released_year, no_of_songs){
	for (var j = 0; j < record.length; j++){
		if (singer === "" || album === "" || released_year === "" || no_of_songs === ""){
			return "Do not leave any column blank.";
		}
		if (record[j].singer.toLowerCase() === singer.toLowerCase() && record[j].album.toLowerCase() === album.toLowerCase()){
			return "Record already updated.";
		}
		
	}	record.push({singer, album, released_year, no_of_songs});
		return record[record.length-1];
};

function updateRecords (){
    var singer = document.getElementById("addsinger").value;
    var album = document.getElementById("album").value;
    var released_year = document.getElementById("released_year").value;
    var no_of_songs = document.getElementById("no_of_songs").value;

	var added = JSON.stringify(addArtist(singer, album, released_year, no_of_songs));

	added = added.replace(/[{""}]/g, '');

	document.getElementById("addcontent").innerHTML = 
		"<h3>" + added.toUpperCase() + "</h3>";
};

	document.getElementById("addbutton").onclick = updateRecords;

/----------------------------------------------------------------- /