function changeForm(){
	var type = document.getElementById("type").value;
	var style = document.getElementById("style").value;
	if (type == "Book"){
		//no additional title required
		document.getElementById("book_input").style.display = "block";
		document.getElementById("article_input").style.display = "none";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		document.getElementById("database_input").style.display = "none";
		//no doi
		document.getElementById("doi_input").style.display = "none";
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
		//yes website and article title, no other titles
		document.getElementById("book_input").style.display = "none";
		document.getElementById("article_input").style.display = "block";
		document.getElementById("website_input").style.display = "block";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		document.getElementById("database_input").style.display = "none";
		//no doi
		document.getElementById("doi_input").style.display = "none";
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
		//yes journal and article title, no other titles
		document.getElementById("book_input").style.display = "none";
		document.getElementById("article_input").style.display = "block";
		document.getElementById("journal_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		//ask for doi
		document.getElementById("doi_input").style.display = "block";
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
			//yes database title
			document.getElementById("database_input").style.display = "block";
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
			//no database title
			document.getElementById("database_input").style.display = "none";
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
			//no database title
			document.getElementById("database_input").style.display = "none";
		}
	} else if (type == "Newspaper"){
		//yes newspaper and article title, no other titles
		document.getElementById("book_input").style.display = "none";
		document.getElementById("article_input").style.display = "block";
		document.getElementById("newspaper_input").style.display = "block";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		document.getElementById("database_input").style.display = "none";
		//no doi
		document.getElementById("doi_input").style.display = "none";
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
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
			//yes website title
			document.getElementById("website_input").style.display = "block";
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
			//no website title
			document.getElementById("website_input").style.display = "none";
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
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
			//no website title
			document.getElementById("website_input").style.display = "none";
		}
	} else if (type == "Magazine"){
		//yes magazine and article title, no other titles
		document.getElementById("book_input").style.display = "none";
		document.getElementById("article_input").style.display = "block";
		document.getElementById("magazine_input").style.display = "block";
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
			//yes doi
			document.getElementById("doi_input").style.display = "block";
			// yes website
			document.getElementById("website_input").style.display = "block";
			// yes database
			document.getElementById("database_input").style.display = "block";
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
			//yes doi
			document.getElementById("doi_input").style.display = "block";
			// no website
			document.getElementById("website_input").style.display = "none";
			// no database
			document.getElementById("database_input").style.display = "none";
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
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
			//no doi
			document.getElementById("doi_input").style.display = "none";
			// no website
			document.getElementById("website_input").style.display = "none";
			// no database
			document.getElementById("database_input").style.display = "none";
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
	var a1last = document.getElementById("last").value;
	var a1first = document.getElementById("first").value;
	var a2last = document.getElementById("last2").value;
	var a2first = document.getElementById("first2").value;
	var a3last = document.getElementById("last3").value;
	var a3first = document.getElementById("first3").value;
	if (a1last != "" && a1first != ""){
		if (a2last == "" && a2first == ""){
			inj += a1last + ", " + a1first + ". ";
		} else if (a3last == "" && a3first == ""){
			inj += a1last + ", " + a1first + " and " + a2first + " " + a2last + ". ";
		} else {
			inj += a1last + ", " + a1first + ", et al. ";
		}
	}
	return inj;
}

function authorInjChi(){
	//author last, first + .
	var inj = "";
	var a1last = document.getElementById("last").value;
	var a1first = document.getElementById("first").value;
	var a2last = document.getElementById("last2").value;
	var a2first = document.getElementById("first2").value;
	var a3last = document.getElementById("last3").value;
	var a3first = document.getElementById("first3").value;
	if (a1last != "" && a1first != ""){
		if (a2last == "" && a2first == ""){
			inj += a1last + ", " + a1first + ". ";
		} else if (a3last == "" && a3first == ""){
			inj += a1last + ", " + a1first + " and " + a2first + " " + a2last + ". ";
		} else {
			inj += a1last + ", " + a1first + ", " + a2first + " " + a2last + ", and "  + a3first + " " + a3last + ". ";
		}
	}
	return inj;
}

function month(m){
	if (m == 0){
		return "Jan. ";
	} else if (m == 1){
		return "Feb. ";
	} else if (m == 2){
		return "Mar. ";
	} else if (m == 3){
		return "Apr. ";
	} else if (m == 4){
		return "May ";
	} else if (m == 5){
		return "Jun. ";
	} else if (m == 6){
		return "Jul. ";
	} else if (m == 7){
		return "Aug. ";
	} else if (m == 8){
		return "Sept. ";
	} else if (m == 9){
		return "Oct. ";
	} else if (m == 10){
		return "Nov. ";
	} else if (m == 11){
		return "Dec. ";
	}
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
			var tit = document.getElementById("book_title").value;
			if (tit != ""){
				inj += "<i>" + tit + ". </i>";
			}
			//city of publication + :
			var city = document.getElementById("cty").value;
			if (city != ""){
				inj +=  city + ": ";
			}
			//publisher + ,
			var pub = document.getElementById("pub").value;
			if (pub != ""){
				inj +=  pub + ", ";
			}
			//year published + ,
			var year = document.getElementById("pub_date").value.getYear();
			if (year != ""){
				inj +=  year + ", ";
			}
			//"pp. " + page numbers + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += "pp. " + pgs + ". ";
			}
			// + "Print."
			inj += "Print."
		}
		//Webpage
		else if (type == "Webpage"){
			//author last, first + .
			inj += authorInjMLA();
			//" + article title + ." 
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//website title ITALICIZED + ,
			var webTit = document.getElementById("website_title").value;
			if (webTit != ""){
				inj += "<i>" + webTit + "</i>, ";
			}
			//publisher + ,
			var pub = document.getElementById("pub").value;
			if (pub != ""){
				inj +=  pub + ", ";
			}
			// day month year of publication + ,
			//FORMAT THIS
			var date = document.getElementById("pub_date").value;
			var str = date.getDay() + ", " + month(date.getMonth()) + date.getYear(); 
			if (str != ""){
				inj +=  str + ", ";
			}
			//URL + .
			var url = document.getElementById("url").value;
			if (url != ""){
				inj +=  url + ".";
			}
		}
		//Journal
		else if (type === "Journal"){
			//author last, first + .
			inj += authorInjMLA();
			//" + article title + ." 
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//Journal title ITALICIZED
			var jTit = document.getElementById("journal_name").value;
			if (jTit != ""){
				inj += "<i>" + jTit + "</i> ";
			}
			//volume + . 
			var vol = document.getElementById("vol").value;
			if (vol != ""){
				inj += "vol. " + vol + ", ";
			}
			//issue
			var issue = document.getElementById("iss").value;
			if (issue != ""){
				inj += "no. " + issue + ", ";
			}
			// day + , + month + year + , 
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += "(" + date + "): ";
			}
			// pp. + pages + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += "pp. " + pgs + ". ";
			}
			var db = document.getElementById("database_title").value;
			if (db != ""){
				inj += "<i>" + db + "</i>, ";
			}
			var doi = document.getElementById("doi").value;
			var url = document.getElementById("url").value;
			if (doi != ""){
				inj += doi + ".";
			} else if (url != ""){
				inj += url + ".";
			}
		}
		//Magazine
		else if (type === "Magazine"){
			//author last, first + .
			inj += authorInjMLA();
			// " + article title + ."
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			// magazine title ITALICIZED + .
			var mTit = document.getElementById("magazine_title").value;
			if (mTit != ""){
				inj += "<i>" + mTit + "</i>. ";
			}
			// Date Month Year Published + .
			// day + , + month + year + , 
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += date + ", ";
			}
			//website title or database title ITALICIZED
			var wTit = document.getElementById("website_title").value;
			var dTit = document.getElementById("database_title").value;
			if (wTit != ""){
				inj += "<i>" + wTit + "</i> ";
			} else if (dTit != ""){
				inj += "<i>" + dTit + "</i> ";
			}
			// + "Web."
			inj += "Web. ";
			// Date Month Year Accessed + .
			var date = document.getElementById("date_accessed").value; //FORMAT THIS
			if (date != ""){
				inj += date + ". ";
			}
		}
		//Newspaper
		else if (type === "Newspaper"){
			//author last, first + .
			inj += authorInjMLA();
			// " + article title + ."
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//news paper title ITALICIZED +
			var nTit = document.getElementById("newspaper_name").value;
			if (nTit != ""){
				inj += "<i>" + nTit + "</i> ";
			}
			//date month year published + :
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += date + ": ";
			}
			//pages
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += pgs + ". ";
			}
			//website or database title ITALICIZED + .
			var wTit = document.getElementById("website_title").value;
			var dTit = document.getElementById("database_title").value;
			if (wTit != ""){
				inj += "<i>" + wTit + "</i>. ";
			} else if (dTit != ""){
				inj += "<i>" + dTit + "</i>. ";
			}
			// Web.
			inj += "Web. ";
			//date month year accessed + .
			var date = document.getElementById("date_accessed").value; //FORMAT THIS
			if (date != ""){
				inj += date + ". ";
			}
		}
	}
	//Chicago
	else if (style === "Chicago"){
		//Book
		if (type === "Book"){
			//author last, first + .
			inj += authorInjChi();
			//title ITALICIZED + .
			var tit = document.getElementById("book_title").value;
			if (tit != ""){
				inj += "<i>" + tit + ". </i>";
			}
			//city of publication + :
			var city = document.getElementById("cty").value;
			if (city != ""){
				inj +=  city + ": ";
			}
			//publisher + ,
			var pub = document.getElementById("pub").value;
			if (pub != ""){
				inj +=  pub + ", ";
			}
			//year published + ,
			var year = document.getElementById("pub_date").value.year;
			if (year != ""){
				inj +=  year + ", ";
			}
			//"pp. " + page numbers + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += "pp. " + pgs + ". ";
			}
		}
		//Webpage
		else if (type === "Webpage"){
			//author last, first + .
			inj += authorInjChi();
			//" + article title + ." 
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//website title ITALICIZED + ,
			var webTit = document.getElementById("website_title").value;
			if (webTit != ""){
				inj += "<i>" + webTit + "</i>, ";
			}
			//publisher + ,
			var pub = document.getElementById("pub").value;
			if (pub != ""){
				inj +=  pub + ", ";
			}
			// day month year of publication + ,
			//FORMAT THIS
			var date = document.getElementById("pub_date").value;
			if (date != ""){
				inj +=  date + ", ";
			}
			//URL + .
			var url = document.getElementById("url").value;
			if (url != ""){
				inj +=  url + ".";
			}
		}
		//Journal
		else if (type === "Journal"){
			//author last, first + .
			inj += authorInjChi();
			//" + article title + ." 
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//Journal title ITALICIZED
			var jTit = document.getElementById("journal_name").value;
			if (jTit != ""){
				inj += "<i>" + jTit + "</i> ";
			}
			//volume + . 
			var vol = document.getElementById("vol").value;
			if (vol != ""){
				inj += vol + ", ";
			}
			//issue
			var issue = document.getElementById("iss").value;
			if (issue != ""){
				inj += "no. " + issue + ", ";
			}
			// day + , + month + year + , 
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += "(" + date + "): ";
			}
			// pp. + pages + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += pgs + ", ";
			}
			var db = document.getElementById("database_title").value; //ISSUES...
			if (db != ""){
				inj += db + ", ";
			}
			var doi = document.getElementById("doi").value;
			var url = document.getElementById("url").value;
			if (doi != ""){
				inj += doi + ".";
			} else if (url != ""){
				inj += url + ".";
			}
		}
		//Magazine
		else if (type === "Magazine"){
			//author last, first + .
			inj += authorInjChi();
			// " + article title + ."
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			// magazine title ITALICIZED + .
			var mTit = document.getElementById("magazine_title").value;
			if (mTit != ""){
				inj += "<i>" + mTit + "</i>. ";
			}
			// Date Month Year Published + .
			// day + , + month + year + , 
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += date + ", ";
			}
			//website title or database title ITALICIZED
			var wTit = document.getElementById("website_title").value;
			var dTit = document.getElementById("database_title").value;
			if (wTit != ""){
				inj += wTit;
			} else if (dTit != ""){
				inj += dTit;
			}
			//date month year accessed + .
			var date = document.getElementById("date_accessed").value; //FORMAT THIS
			if (date != ""){
				inj += "(accessed " + date + "). ";
			}
		}
		//Newspaper
		else if (type === "Newspaper"){
			//author last, first + .
			inj += authorInjChi();
			// YEAR!
			// " + article title + ."
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += '"' + tit + '." ';
			}
			//news paper title ITALICIZED +
			var nTit = document.getElementById("newspaper_name").value;
			if (nTit != ""){
				inj += "<i>" + nTit + "</i>, ";
			}
			//date month year published + :
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += date + ", ";
			}
			//url or database title ITALICIZED + .
			var url = document.getElementById("url").value;
			var dTit = document.getElementById("database_title").value;
			if (url != ""){
				inj += wTit + ". ";
			} else if (dTit != ""){
				inj += dTit + ". ";
			}
		}
	}
	//APA
	else if (style === "APA"){
		//Book
		if (type === "Book"){
			//author last, first + .
			inj += authorInjChi();
			// ( + year published + )
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			var yr = date.getYear();
			if (yr != ""){
				inj += "(" + yr + ") ";
			}
			//book title ITALICIZED + .
			var tit = document.getElementById("book_title").value;
			if (tit != ""){
				inj += "<i>" + tit + "</i>. ";
			}
			//city + ,
			var city = document.getElementById("cty").value;
			if (city != ""){
				inj +=  city + ", ";
			}
			//state + :
			var state = document.getElementById("stt").value;
			if (state != ""){
				inj += state + ": ";
			}
			//Publisher + .
			var pub = document.getElementById("pub").value;
			if (pub != ""){
				inj +=  pub + ".";
			}

		}
		//Webpage
		else if (type === "Webpage"){
			//author last, first + .
			inj += authorInjChi();
			// ( + year + , + month date Published + ). 
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				var month = date.getMonth();
				var yr = date.getYear();
				var day = date.getDay();
				inj += "(";
				if (yr != ""){
					inj += yr + ", ";
				}
				if (month != ""){
					inj += month + " ";
				}
				if (day != ""){
					inj += day;
				}
				inj += "). ";
			}
			//article title ITALICIZED + .
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += "<i>" + tit + "</i>. ";
			}
			//Retrieved from URL
			var url = document.getElementById("url").value;
			if (url != ""){
				inj += "Retrieved from " + url;
			}
		}
		//Journal
		else if (type === "Journal"){
			//author last, first + .
			inj += authorInjChi();
			// ( + year published + ).
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				var yr = date.getYear();
				if (yr != ""){
					inj += "(" + yr + "). "
				}
			}
			// article title + .
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += tit + ". ";
			} 
			//journal name ITALICIZED + ,
			var jTit = document.getElementById("journal_name").value;
			if (jTit != ""){
				inj += "<i>" + jTit + "</i>, ";
			}
			//Volume ITALICIZED
			var vol = document.getElementById("vol").value;
			if (vol != ""){
				inj += "<i>" + vol + "</i>";
			}
			// ( + issue + ),
			var issue = document.getElementById("iss").value;
			if (issue != ""){
				inj += "(" + issue + "), ";
			}
			//pp. + Pages + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += "pp. " + pgs + ". ";
			}
			//doi or retrieved from URL
			var doi = document.getElementById("doi").value;
			var url = document.getElementById("url").value;
			if (doi != ""){
				inj += doi + ".";
			} else if (url != ""){
				inj += "Retrieved from " + url;
			}
		}
		//Magazine
		else if (type === "Magazine"){
			//author last, first + .
			inj += authorInjChi();
			// ( + year, month published) + ).
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += "(";
				var yr = date.getYear();
				if (yr != ""){
					inj += yr + ", ";
				}
				var month = month(date.getMonth());
				if (month != ""){
					inj += month;
				}
				inj += "). ";
			}
			// article title + .
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += tit + ". ";
			}
			//magazine title ITALICIZED + .
			var mTit = document.getElementById("magazine_title").value;
			if (mTit != ""){
				inj += "<i>" + mTit + "</i>. ";
			}
			//Retrieved from URL
			var url = document.getElementById("url").value;
			if (url != ""){
				inj += "Retrieved from " + url;
			}
		}
		//Newspaper
		else if (type === "Newspaper"){
			//author last, first + .
			inj += authorInjChi();
			// ( + year, month published) + ).
			var date = document.getElementById("pub_date").value; //FORMAT THIS
			if (date != ""){
				inj += "(";
				var yr = date.getYear();
				if (yr != ""){
					inj += yr + ", ";
				}
				var month = month(date.getMonth());
				if (month != ""){
					inj += month;
				}
				inj += "). ";
			}
			// article title + .
			var tit = document.getElementById("article_title").value;
			if (tit != ""){
				inj += tit + ". ";
			}
			//magazine title ITALICIZED + .
			var nTit = document.getElementById("newspaper_name").value;
			if (nTit != ""){
				inj += "<i>" + nTit + "</i>, ";
			}
			//pp. + Pages + .
			var pgs = document.getElementById("pgs").value;
			if (pgs != ""){
				inj += "pp. " + pgs + ". ";
			}
			//Retrieved from URL
			var url = document.getElementById("url").value;
			if (url != ""){
				inj += "Retrieved from " + url;
			}
		}
	}
	return inj;
}
/*
function submitForm(){
	console.log('citeMe! was pressed');
	document.getElementById("citString").value = 'hello world';//createCitation();
}
*/

function submitForm()
{
   console.log('citeMe! was pressed');
   var form = document.forms['myform'];
   //form.action = 'citationForm';
   var el = document.createElement("input");
   el.type = "hidden";
   el.name = "citString";
   el.value = "";
   form.appendChild(el);
   form.submit();
}

//document.getElementById("citeme").onsubmit = sub;
document.body.onload = changeForm;

