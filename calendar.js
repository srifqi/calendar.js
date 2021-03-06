/**
*** calendar.js
*** @author srifqi
**/

/* define CAL */
var CAL = CAL || {REVISION: 3};

/* global variable */
CAL.Month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
CAL.Month.numberOfDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
CAL.Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
CAL.CalendarCount = 0;

/* core calendar process */
CAL.Calendar = function(year,month,place) {
	console.log("CAL.Calendar",CAL.REVISION);
	var month = (month - 1); //january = 1
	var table = "<table id=\"CAL-Calendar-" + CAL.CalendarCount + "\">" +
				"<thead><tr><th colspan=\"7\"><big><big>" + CAL.Month[month] + " " + Number(year) + "</big></big></th></tr></thead>" +
				"<tbody>" +
				"<tr>";
	for(var i=0;i<7;i++){table+= "<th></th>"}
	table += "</tr>";
	for(var i=0;i<5;i++) {
		table += "<tr>";
		for(var o=0;o<7;o++) {
			table += "<td></td>";
		}
		table += "</tr>";
	}
	table += "</tbody></table>" +
			"<style>#CAL-Calendar-" + CAL.CalendarCount + " {width: 70%; font-family: Arial; text-align: center;}\n#CAL-Calendar-" + CAL.CalendarCount + " tr th {width: 10%; font-size: 150%; border: 1px solid black;}\n#CAL-Calendar-" + CAL.CalendarCount + " tr td {width: 10%; font-size: 200%; border: 1px solid black;}</style>";
	document.querySelector(place).innerHTML += table;
	var CAL_div = document.getElementById("CAL-Calendar-" + CAL.CalendarCount);
	for(i=0;i<CAL.Days.length;) {
		CAL_div.querySelectorAll("tbody > tr > th")[i].innerHTML = CAL.Days[i][0] + CAL.Days[i][1] + CAL.Days[i][2];
		i++;
	}
	
	var dn = 1;
	
	for(r=1;r<6;r++) {
		for(d=0;d<7;d++) {
			if(r===1 && d<Number(new Date(year,month,1).getDay())) continue;
			if(dn>CAL.Month.numberOfDays[month]) continue;
			
			var qw = "",
				qe = "";
			if(d===5) {qw = "<span style=\"color: green;\">"; qe = "</span>"}
			if(d===0) {qw = "<span style=\"color: red;\">"; qe = "</span>"}
			CAL_div.querySelectorAll("tbody > tr")[r].querySelectorAll("td")[d].innerHTML += qw + dn + qe;
			dn++;
		}
	}
	
	CAL.CalendarCount++;
};

console.log("calendar.js loaded",CAL.REVISION);
