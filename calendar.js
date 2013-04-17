/**
*** calendar.js
*** @author srifqi
**/

/* define CAL */
var CAL = CAL || {};

/* global variable */
CAL.Month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
CAL.Month.numberOfDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
CAL.Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* core calendar process */
CAL.Calendar = function(year,month,place) {
  var table = "<table id=\"CAL-Calendar\">" +
				"<thead><tr><th colspan=\"7\"><big><big>" + CAL.Month[month] + " " + Number(year) + "</big></big></th></tr></thead>" +
				"<tbody>\n" +
				"<tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>\n" +
				"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n" +
				"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n" +
				"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n" +
				"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n" +
				"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n" +
				"</tbody></table>\n" +
				"<style>#CAL-Calendar {width: 70%; font-family: Arial; text-align: center;}\n#CAL-Calendar tr th {width: 10%; font-size: 150%; border: 1px solid black;}\n#CAL-Calendar tr td {width: 10%; font-size: 200%; border: 1px solid black;}\n</style>";
	document.querySelector(place).innerHTML += table;
	var CAL_div = document.getElementById("CAL-Calendar");
	for(i=0;i<CAL.Days.length;) {
		CAL_div.querySelectorAll("tbody > tr > th")[i].innerHTML = CAL.Days[i][0] + CAL.Days[i][1] + CAL.Days[i][2];
		i++;
	}
	
	var dn = 1;
	
	for(r=1;r<6;) {
		for(d=0;d<7;) {
			if(r===1 && d<Number(new Date(year,month,1).getDay())) {
				/*blablabla*/
			} else if(dn>CAL.Month.numberOfDays[month]) {
				/*blablabla*/
			} else {
				var qw = "",
					qe = "";
				if(d===5) {qw = "<span style=\"color: green;\">"; qe = "</span>"}
				if(d===0) {qw = "<span style=\"color: red;\">"; qe = "</span>"}
				CAL_div.querySelectorAll("tbody > tr")[r].querySelectorAll("td")[d].innerHTML += qw + dn + qe;
				dn++;
			}
			d++;
		}
		r++;
	}
};
