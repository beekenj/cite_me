function changeForm(){
	var type = document.getElementById("type").value;
	var style = document.getElementById("style").value;
	if (type == "Book"){
		//no additional title required
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		} else if (style == "APA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//yes state of publication
			document.getElementById("state").style.display = "block";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		} else if (style == "Chicago"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//yes edition
			document.getElementById("edition").style.display = "block";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		}
	} else if (type == "Webpage"){
		//yes website title, no other titles
		document.getElementById("website_input").style.display = "block";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//no publication date
			document.getElementById("publication_date").style.display = "none";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Journal"){
		//yes journal title, no other titles
		document.getElementById("journal_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//yes issue
			document.getElementById("issue").style.display = "block";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//yes issue
			document.getElementById("issue").style.display = "block";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Newspaper"){
		//yes newspaper title, no other titles
		document.getElementById("newspaper_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Magazine"){
		//yes magazine title, no other titles
		document.getElementById("magazine_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	}
}

document.getElementById("type").onchange = changeForm;
document.getElementById("style").onchange = changeForm;

function addAuthorDisp(){
	if (document.getElementById("author2").style.display == "none"){
		document.getElementById("author2").style.display = "block";
		document.getElementById("authorLabel").style.display = "block";
	} else if (document.getElementById("author3").style.display == "none"){
		document.getElementById("author3").style.display = "block";
	} else {
		alert("You cannot add more than three authors");
	}
}

document.getElementById("addAuthor").onclick = addAuthorDisp;

function authorInjMLA(){
	//author last, first + .
	var inj = "";
	var a1last = QUERY;
	var a1first = QUERY;
	var a2last = QUERY;
	var a2first = QUERY;
	var a3last = QUERY;
	var a3first = QUERY;
	if (a1last != undefined && a1first != undefined){
		if (a2last == undefined && a2first == undefined){
			inj += a1last + ", " + a1first + ". ";
		} else if (a3last == undefined && a3first == undefined){
			inj += a1last + ", " + a1first + " and " + a2first + " " + a2last;
		} else {
			inj += a1last + ", " + a1first + ", et al. ";
		}
	}
	return inj;
}

function createCitation(){
	var type = document.getElementById("type").value;
	var style = document.getElementById("style").value;
	var inj = "";
	//MLA
	if (style == "MLA"){
		//Book
		if (type == "Book"){
			//author last, first + .
			inj += authorInjMLA();
			//title ITALICIZED + .
			var tit = QUERY;
			if (tit != undefined){
				inj += "<i>" + tit + ". </i>";
			}
			//city of publication + :
			var city = QUERY;
			if (tit != undefined){
				inj +=  city + ": ";
			}
			//publisher + ,
			var pub = QUERY;
			if (pub != undefined){
				inj +=  pub + ", ";
			}
			//year published + ,
			var year = QUERY;
			if (year != undefined){
				inj +=  year + ", ";
			}
			//"pp. " + page numbers + .
			var pgs = QUERY;
			if (pgs != undefined){
				inj +=  "pp. " + pgs + ". ";
			}
			// + "Print."
			inj += "Print."
		}
		//Webpage
		else if (type == "Webpage"){
			//author last, first + .
			inj += authorInjMLA();
			//" + article title + ." 
			var tit = QUERY;
			if (tit != undefined){
				inj += '"' + tit + '." ';
			}
			//website title ITALICIZED + ,
			var webTit = QUERY;
			if (webTit != undefined){
				inj += "<i>" + webTit + "</i>, ";
			}
			//publisher + ,
			var pub = QUERY;
			if (pub != undefined){
				inj +=  pub + ", ";
			}
			// day month year of publication + ,
			//FORMAT THIS
			var date = QUERY;
			if (date != undefined){
				inj +=  date + ", ";
			}
			//URL + .
			var url = QUERY;
			if (url != undefined){
				inj +=  url + ".";
			}
		}
		//Journal
		else if (type === "Journal"){
			//author last, first + .
			inj += authorInjMLA();
			//" + article title + ." 
			var tit = QUERY;
			if (tit != undefined){
				inj += '"' + tit + '." ';
			}
			//Journal title ITALICIZED
			var jTit = QUERY;
			if (jTit != undefined){
				inj += "<i>" + jTit + "</i> ";
			}
			//volume + . 
			var vol = QUERY;
			if (vol != undefined){
				inj += vol + ". ";
			}
			//issue
			var issue = QUERY;
			if (issue != undefined){
				inj += issue + " ";
			}
			// ( + year published + ):
			var year = QUERY; //FORMAT THIS
			if (year != undefined){
				inj += "(" + year + "): ";
			}
			//pages + .
			var pgs = QUERY;
			if (pgs != undefined){
				inj += pgs + ". ";
			}
			// + "Print."
			inj += "Print.";
			
		}
		//Magazine
		else if (type === "Magazine"){
			//author last, first + .
			inj += authorInjMLA();
			// " + article title + ."
			// magazine title ITALICIZED + .
			// Date Month Year Published + :
			//pages + .

		}
		//Newspaper
		else if (type === "Newspaper"){
			//author last, first + .
			inj += authorInjMLA();
			
		}
	}
	//Chicago
	else if (style === "Chicago"){
		//Book
		if (type === "Book"){

		}
		//Webpage
		else if (type === "Webpage"){
			
		}
		//Journal
		else if (type === "Journal"){
			
		}
		//Magazine
		else if (type === "Magazine"){
			
		}
		//Newspaper
		else if (type === "Newspaper"){
			
		}
	}
	//APA
	else if (style === "APA"){
		//Book
		if (type === "Book"){

		}
		//Webpage
		else if (type === "Webpage"){
			
		}
		//Journal
		else if (type === "Journal"){
			
		}
		//Magazine
		else if (type === "Magazine"){
			
		}
		//Newspaper
		else if (type === "Newspaper"){
			
		}
	}
	return inj;
}

function sub(){
	//send info in form fields to database
	//DEAL WITH MULTIPLE AUTHORS ISSUES
	//call createCitation
	//reformat html to display created citation

	//test code below
	var citation = "test"; //createCitation();
	var inj = document.createElement("P");
	inj.innerHTML = citation;
	document.body.appendChild(inj);
}

document.getElementById("citeme").onclick = sub;

