/* put scripts here */

/*
function viewStudentStats(id, toggle){
	if (toggle === 0){
		document.getElementById(id).style.height = 0;
		document.getElementById(id).style.visibility = "hidden";
	} else {
		document.getElementById(id).style.height = "auto";
		document.getElementById(id).style.visibility = "visible";
	}
}

*/

function changeForm(){
	//do nuthin
	var type = document.getElementById("type").value;
	if (type == "Book"){
		document.getElementById("website_input").style.visibility = "hidden";
		document.getElementById("website_input").style.height = 0;
		document.getElementById("journal_input").style.visibility = "hidden";
		document.getElementById("journal_input").style.height = 0;
		document.getElementById("newspaper_input").style.visibility = "hidden";
		document.getElementById("newspaper_input").style.height = 0;
		document.getElementById("magazine_input").style.visibility = "hidden";
		document.getElementById("magazine_input").style.height = 0;
	} else if (type == "Webpage"){
		document.getElementById("website_input").style.visibility = "visible";
		document.getElementById("website_input").style.height = "auto";
		document.getElementById("journal_input").style.visibility = "hidden";
		document.getElementById("journal_input").style.height = 0;
		document.getElementById("newspaper_input").style.visibility = "hidden";
		document.getElementById("newspaper_input").style.height = 0;
		document.getElementById("magazine_input").style.visibility = "hidden";
		document.getElementById("magazine_input").style.height = 0;
	} else if (type == "Journal"){
		document.getElementById("journal_input").style.visibility = "visible";
		document.getElementById("journal_input").style.height = "auto";
		document.getElementById("website_input").style.visibility = "hidden";
		document.getElementById("website_input").style.height = 0;
		document.getElementById("newspaper_input").style.visibility = "hidden";
		document.getElementById("newspaper_input").style.height = 0;
		document.getElementById("magazine_input").style.visibility = "hidden";
		document.getElementById("magazine_input").style.height = 0;
	} else if (type == "Newspaper"){
		document.getElementById("newspaper_input").style.visibility = "visible";
		document.getElementById("newspaper_input").style.height = "auto";
		document.getElementById("website_input").style.visibility = "hidden";
		document.getElementById("website_input").style.height = 0;
		document.getElementById("journal_input").style.visibility = "hidden";
		document.getElementById("journal_input").style.height = 0;
		document.getElementById("magazine_input").style.visibility = "hidden";
		document.getElementById("magazine_input").style.height = 0;
	} else if (type == "Magazine"){
		document.getElementById("magazine_input").style.visibility = "visible";
		document.getElementById("magazine_input").style.height = "auto";
		document.getElementById("website_input").style.visibility = "hidden";
		document.getElementById("website_input").style.height = 0;
		document.getElementById("journal_input").style.visibility = "hidden";
		document.getElementById("journal_input").style.height = 0;
		document.getElementById("newspaper_input").style.visibility = "hidden";
		document.getElementById("newspaper_input").style.height = 0;
	}
}
