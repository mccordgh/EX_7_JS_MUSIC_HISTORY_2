function formatStr (editString) {

	editString = editString.replace(/>/gi, "-");
	editString = editString.replace(/\*/gi, "");
	editString = editString.replace(/@/gi, "");
	editString = editString.replace(/!/gi, "");
	
	return editString;
}

var songs = [];

songs.push("Under the Milky Way > by The Church on the album Starfish");
songs.push("Legs > by Z*Z Top on the album Eliminator");
songs.push("The Logical Song > by Supertr@amp on the album Breakfast in America");
songs.push("Another Brick in the Wall > by Pink Floyd on the album The Wall");
songs.push("Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction");
songs.push("Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill");
songs.push("Gates of Steel > by DEVO on the album Freedom of Choice");

var playList = document.getElementById("content_playlist");
playList.innerHTML = "";

for ( i = 0; i < songs.length; i++) {
		
	var details = formatStr(songs[i]);

	var songArr = details.split("-");
	var song = songArr[0].trim();

	var artistArr = songArr[1].split("by");
	var albumAndArtistArr = artistArr[1].split("on the album");
	var artist = albumAndArtistArr[0].trim();
	var album = albumAndArtistArr[1].trim();
	var genre = "???";

	var artistChoice = document.getElementById("artistChoice");
	var optn = document.createElement("OPTION");
	optn.text = artist;
	optn.value = artist;
	artistChoice.options.add(optn);

	var albumChoice = document.getElementById("albumChoice");
	var optn = document.createElement("OPTION");
	optn.text = album;
	optn.value = album;
	albumChoice.options.add(optn);


	song = "<h1>" + song + "</h1>";
	newUL = "<ul id='song_options'>";
	artist = "<li>" + artist + "</li>";
	pipeLI = "<li><b>|</b></li>"
	album = "<li>" + album + "</li>";
	genre = "<li>Genre: " + genre + "</li>";

	playList.innerHTML += "<p>" + song + newUL + artist + pipeLI + album + pipeLI + genre + "</ul></p>";
	
}

