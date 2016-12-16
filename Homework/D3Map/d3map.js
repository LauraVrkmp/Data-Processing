// Laura Veerkamp
// 10361561

// define country codes
var country_codes = [
["af", "AFG", "Afghanistan"],
["ax", "ALA", "Åland Islands"],
["al", "ALB", "Albania"],
["dz", "DZA", "Algeria"],
["as", "ASM", "American Samoa"],
["ad", "AND", "Andorra"],
["ao", "AGO", "Angola"],
["ai", "AIA", "Anguilla"],
["aq", "ATA", "Antarctica"],
["ag", "ATG", "Antigua and Barbuda"],
["ar", "ARG", "Argentina"],
["am", "ARM", "Armenia"],
["aw", "ABW", "Aruba"],
["au", "AUS", "Australia"],
["at", "AUT", "Austria"],
["az", "AZE", "Azerbaijan"],
["bs", "BHS", "Bahamas"],
["bh", "BHR", "Bahrain"],
["bd", "BGD", "Bangladesh"],
["bb", "BRB", "Barbados"],
["by", "BLR", "Belarus"],
["be", "BEL", "Belgium"],
["bz", "BLZ", "Belize"],
["bj", "BEN", "Benin"],
["bm", "BMU", "Bermuda"],
["bt", "BTN", "Bhutan"],
["bo", "BOL", "Bolivia, Plurinational State of"],
["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
["ba", "BIH", "Bosnia and Herzegovina"],
["bw", "BWA", "Botswana"],
["bv", "BVT", "Bouvet Island"],
["br", "BRA", "Brazil"],
["io", "IOT", "British Indian Ocean Territory"],
["bn", "BRN", "Brunei Darussalam"],
["bg", "BGR", "Bulgaria"],
["bf", "BFA", "Burkina Faso"],
["bi", "BDI", "Burundi"],
["kh", "KHM", "Cambodia"],
["cm", "CMR", "Cameroon"],
["ca", "CAN", "Canada"],
["cv", "CPV", "Cape Verde"],
["ky", "CYM", "Cayman Islands"],
["cf", "CAF", "Central African Republic"],
["td", "TCD", "Chad"],
["cl", "CHL", "Chile"],
["cn", "CHN", "China"],
["cx", "CXR", "Christmas Island"],
["cc", "CCK", "Cocos (Keeling) Islands"],
["co", "COL", "Colombia"],
["km", "COM", "Comoros"],
["cg", "COG", "Congo"],
["cd", "COD", "Congo, the Democratic Republic of the"],
["ck", "COK", "Cook Islands"],
["cr", "CRI", "Costa Rica"],
["ci", "CIV", "Côte d'Ivoire"],
["hr", "HRV", "Croatia"],
["cu", "CUB", "Cuba"],
["cw", "CUW", "Curaçao"],
["cy", "CYP", "Cyprus"],
["cz", "CZE", "Czech Republic"],
["dk", "DNK", "Denmark"],
["dj", "DJI", "Djibouti"],
["dm", "DMA", "Dominica"],
["do", "DOM", "Dominican Republic"],
["ec", "ECU", "Ecuador"],
["eg", "EGY", "Egypt"],
["sv", "SLV", "El Salvador"],
["gq", "GNQ", "Equatorial Guinea"],
["er", "ERI", "Eritrea"],
["ee", "EST", "Estonia"],
["et", "ETH", "Ethiopia"],
["fk", "FLK", "Falkland Islands (Malvinas)"],
["fo", "FRO", "Faroe Islands"],
["fj", "FJI", "Fiji"],
["fi", "FIN", "Finland"],
["fr", "FRA", "France"],
["gf", "GUF", "French Guiana"],
["pf", "PYF", "French Polynesia"],
["tf", "ATF", "French Southern Territories"],
["ga", "GAB", "Gabon"],
["gm", "GMB", "Gambia"],
["ge", "GEO", "Georgia"],
["de", "DEU", "Germany"],
["gh", "GHA", "Ghana"],
["gi", "GIB", "Gibraltar"],
["gr", "GRC", "Greece"],
["gl", "GRL", "Greenland"],
["gd", "GRD", "Grenada"],
["gp", "GLP", "Guadeloupe"],
["gu", "GUM", "Guam"],
["gt", "GTM", "Guatemala"],
["gg", "GGY", "Guernsey"],
["gn", "GIN", "Guinea"],
["gw", "GNB", "Guinea-Bissau"],
["gy", "GUY", "Guyana"],
["ht", "HTI", "Haiti"],
["hm", "HMD", "Heard Island and McDonald Islands"],
["va", "VAT", "Holy See (Vatican City State)"],
["hn", "HND", "Honduras"],
["hk", "HKG", "Hong Kong"],
["hu", "HUN", "Hungary"],
["is", "ISL", "Iceland"],
["in", "IND", "India"],
["id", "IDN", "Indonesia"],
["ir", "IRN", "Iran, Islamic Republic of"],
["iq", "IRQ", "Iraq"],
["ie", "IRL", "Ireland"],
["im", "IMN", "Isle of Man"],
["il", "ISR", "Israel"],
["it", "ITA", "Italy"],
["jm", "JAM", "Jamaica"],
["jp", "JPN", "Japan"],
["je", "JEY", "Jersey"],
["jo", "JOR", "Jordan"],
["kz", "KAZ", "Kazakhstan"],
["ke", "KEN", "Kenya"],
["ki", "KIR", "Kiribati"],
["kp", "PRK", "Korea, Democratic People's Republic of"],
["kr", "KOR", "Korea, Republic of"],
["kw", "KWT", "Kuwait"],
["kg", "KGZ", "Kyrgyzstan"],
["la", "LAO", "Lao People's Democratic Republic"],
["lv", "LVA", "Latvia"],
["lb", "LBN", "Lebanon"],
["ls", "LSO", "Lesotho"],
["lr", "LBR", "Liberia"],
["ly", "LBY", "Libya"],
["li", "LIE", "Liechtenstein"],
["lt", "LTU", "Lithuania"],
["lu", "LUX", "Luxembourg"],
["mo", "MAC", "Macao"],
["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
["mg", "MDG", "Madagascar"],
["mw", "MWI", "Malawi"],
["my", "MYS", "Malaysia"],
["mv", "MDV", "Maldives"],
["ml", "MLI", "Mali"],
["mt", "MLT", "Malta"],
["mh", "MHL", "Marshall Islands"],
["mq", "MTQ", "Martinique"],
["mr", "MRT", "Mauritania"],
["mu", "MUS", "Mauritius"],
["yt", "MYT", "Mayotte"],
["mx", "MEX", "Mexico"],
["fm", "FSM", "Micronesia, Federated States of"],
["md", "MDA", "Moldova, Republic of"],
["mc", "MCO", "Monaco"],
["mn", "MNG", "Mongolia"],
["me", "MNE", "Montenegro"],
["ms", "MSR", "Montserrat"],
["ma", "MAR", "Morocco"],
["mz", "MOZ", "Mozambique"],
["mm", "MMR", "Myanmar"],
["na", "NAM", "Namibia"],
["nr", "NRU", "Nauru"],
["np", "NPL", "Nepal"],
["nl", "NLD", "Netherlands"],
["nc", "NCL", "New Caledonia"],
["nz", "NZL", "New Zealand"],
["ni", "NIC", "Nicaragua"],
["ne", "NER", "Niger"],
["ng", "NGA", "Nigeria"],
["nu", "NIU", "Niue"],
["nf", "NFK", "Norfolk Island"],
["mp", "MNP", "Northern Mariana Islands"],
["no", "NOR", "Norway"],
["om", "OMN", "Oman"],
["pk", "PAK", "Pakistan"],
["pw", "PLW", "Palau"],
["ps", "PSE", "Palestine, State of"],
["pa", "PAN", "Panama"],
["pg", "PNG", "Papua New Guinea"],
["py", "PRY", "Paraguay"],
["pe", "PER", "Peru"],
["ph", "PHL", "Philippines"],
["pn", "PCN", "Pitcairn"],
["pl", "POL", "Poland"],
["pt", "PRT", "Portugal"],
["pr", "PRI", "Puerto Rico"],
["qa", "QAT", "Qatar"],
["re", "REU", "Réunion"],
["ro", "ROU", "Romania"],
["ru", "RUS", "Russian Federation"],
["rw", "RWA", "Rwanda"],
["bl", "BLM", "Saint Barthélemy"],
["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
["kn", "KNA", "Saint Kitts and Nevis"],
["lc", "LCA", "Saint Lucia"],
["mf", "MAF", "Saint Martin (French part)"],
["pm", "SPM", "Saint Pierre and Miquelon"],
["vc", "VCT", "Saint Vincent and the Grenadines"],
["ws", "WSM", "Samoa"],
["sm", "SMR", "San Marino"],
["st", "STP", "Sao Tome and Principe"],
["sa", "SAU", "Saudi Arabia"],
["sn", "SEN", "Senegal"],
["rs", "SRB", "Serbia"],
["sc", "SYC", "Seychelles"],
["sl", "SLE", "Sierra Leone"],
["sg", "SGP", "Singapore"],
["sx", "SXM", "Sint Maarten (Dutch part)"],
["sk", "SVK", "Slovakia"],
["si", "SVN", "Slovenia"],
["sb", "SLB", "Solomon Islands"],
["so", "SOM", "Somalia"],
["za", "ZAF", "South Africa"],
["gs", "SGS", "South Georgia and the South Sandwich Islands"],
["ss", "SSD", "South Sudan"],
["es", "ESP", "Spain"],
["lk", "LKA", "Sri Lanka"],
["sd", "SDN", "Sudan"],
["sr", "SUR", "Suriname"],
["sj", "SJM", "Svalbard and Jan Mayen"],
["sz", "SWZ", "Swaziland"],
["se", "SWE", "Sweden"],
["ch", "CHE", "Switzerland"],
["sy", "SYR", "Syrian Arab Republic"],
["tw", "TWN", "Taiwan, Province of China"],
["tj", "TJK", "Tajikistan"],
["tz", "TZA", "Tanzania, United Republic of"],
["th", "THA", "Thailand"],
["tl", "TLS", "Timor-Leste"],
["tg", "TGO", "Togo"],
["tk", "TKL", "Tokelau"],
["to", "TON", "Tonga"],
["tt", "TTO", "Trinidad and Tobago"],
["tn", "TUN", "Tunisia"],
["tr", "TUR", "Turkey"],
["tm", "TKM", "Turkmenistan"],
["tc", "TCA", "Turks and Caicos Islands"],
["tv", "TUV", "Tuvalu"],
["ug", "UGA", "Uganda"],
["ua", "UKR", "Ukraine"],
["ae", "ARE", "United Arab Emirates"],
["gb", "GBR", "United Kingdom"],
["us", "USA", "United States"],
["um", "UMI", "United States Minor Outlying Islands"],
["uy", "URY", "Uruguay"],
["uz", "UZB", "Uzbekistan"],
["vu", "VUT", "Vanuatu"],
["ve", "VEN", "Venezuela, Bolivarian Republic of"],
["vn", "VNM", "Viet Nam"],
["vg", "VGB", "Virgin Islands, British"],
["vi", "VIR", "Virgin Islands, U.S."],
["wf", "WLF", "Wallis and Futuna"],
["eh", "ESH", "Western Sahara"],
["ye", "YEM", "Yemen"],
["zm", "ZMB", "Zambia"],
["zw", "ZWE", "Zimbabwe"]];

// import data (https://en.wikipedia.org/wiki/List_of_countries_and_territories_by_population_density)
var density = { "points": [
				{"country": "Macao", "data": "21236"}, {"country": "Monaco", "data": "19010"}, {"country": "Singapore", "data": "7797"}, {"country": "Hong Kong", "data": "6644"}, {"country": "Gibraltar", "data": "4268"}, {"country": "Holy See (Vatican City State)", "data": "1818"}, {"country": "Bahrain", "data": "1945"}, {"country": "Malta", "data": "1353"}, {"country": "Bermuda", "data": "1278"}, {"country": "Bangladesh", "data": "1121.13"}, {"country": "Sint Maarten (Dutch part)", "data": "1101"}, {"country": "Maldives", "data": "1065"}, {"country": "Jersey", "data": "844"}, {"country": "Guernsey", "data": "800"}, {"country": "Palestinian Territories", "data": "756"}, {"country": "Saint Martin (French part)", "data": "685"}, {"country": "Taiwan, Province of China", "data": "650"}, {"country": "Barbados", "data": "638"}, {"country": "Mauritius", "data": "619"}, {"country": "Lebanon", "data": "587"}, {"country": "Mayotte", "data": "568"}, {"country": "San Marino", "data": "541"}, {"country": "Aruba", "data": "526"}, {"country": "Korea, Republic of", "data": "507"}, {"country": "Nauru", "data": "480"}, {"country": "Rwanda", "data": "469"}, {"country": "Tuvalu", "data": "436"}, {"country": "Saint Barthélemy", "data": "426"}, {"country": "Comoros", "data": "422"}, {"country": "Burundi", "data": "415"}, {"country": "Netherlands", "data": "410.92"}, {"country": "Haiti", "data": "409"}, {"country": "India", "data": "404.86"}, {"country": "Puerto Rico", "data": "392"}, {"country": "Israel", "data": "390.16"}, {"country": "Belgium", "data": "371"}, {"country": "Philippines", "data": "344.42"}, {"country": "Martinique", "data": "342"}, {"country": "Curaçao", "data": "339"}, {"country": "Japan", "data": "336"}, {"country": "Réunion", "data": "327"}, {"country": "Sri Lanka", "data": "320"}, {"country": "Marshall Islands", "data": "310"}, {"country": "Virgin Islands, U.S.", "data": "302"}, {"country": "El Salvador", "data": "301"}, {"country": "Grenada", "data": "300"}, {"country": "Guam", "data": "295"}, {"country": "American Samoa", "data": "282"}, {"country": "Viet Nam", "data": "280"}, {"country": "Saint Lucia", "data": "270"}, {"country": "United Kingdom", "data": "268"}, {"country": "Saint Vincent and the Grenadines", "data": "259"}, {"country": "Trinidad and Tobago", "data": "258"}, {"country": "Jamaica", "data": "248"}, {"country": "Guadeloupe", "data": "247"}, {"country": "Pakistan", "data": "242.35"}, {"country": "Liechtenstein", "data": "230"}, {"country": "Germany", "data": "230"}, {"country": "Kuwait", "data": "225"}, {"country": "Dominican Republic", "data": "220"}, {"country": "Cayman Islands", "data": "214"}, {"country": "Luxembourg", "data": "208"}, {"country": "Switzerland", "data": "203"}, {"country": "Nigeria", "data": "202"}, {"country": "Italy", "data": "201"}, {"country": "Seychelles", "data": "200"}, {"country": "Korea, Democratic People's Republic of", "data": "197"}, {"country": "Virgin Islands, British", "data": "196"}, {"country": "Antigua and Barbuda", "data": "195"}, {"country": "Saint Kitts and Nevis", "data": "192"}, {"country": "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "data": "187"}, {"country": "Nepal", "data": "180"}, {"country": "Qatar", "data": "175"}, {"country": "Gambia", "data": "173"}, {"country": "Kosovo", "data": "166"}, {"country": "Andorra", "data": "164"}, {"country": "Uganda", "data": "153"}, {"country": "Isle of Man", "data": "148"}, {"country": "Kiribati", "data": "147"}, {"country": "Cyprus", "data": "146"}, {"country": "Tonga", "data": "145"}, {"country": "Micronesia, Federated States of", "data": "145"}, {"country": "Guatemala", "data": "145"}, {"country": "China", "data": "143.13"}, {"country": "Tokelau", "data": "141"}, {"country": "Anguilla", "data": "140"}, {"country": "Indonesia", "data": "137"}, {"country": "Czech Republic", "data": "134"}, {"country": "Denmark", "data": "131"}, {"country": "Thailand", "data": "128"}, {"country": "Togo", "data": "126"}, {"country": "Poland", "data": "123"}, {"country": "Cape Verde", "data": "122"}, {"country": "Malawi", "data": "121"}, {"country": "Ghana", "data": "119"}, {"country": "Northern Mariana Islands", "data": "118"}, {"country": "France", "data": "118"}, {"country": "United Arab Emirates", "data": "118"}, {"country": "Azerbaijan", "data": "113"}, {"country": "Portugal", "data": "112"}, {"country": "Slovakia", "data": "111"}, {"country": "Jordan", "data": "109.28"}, {"country": "Hungary", "data": "106"}, {"country": "Moldova, Republic of", "data": "105"}, {"country": "Austria", "data": "105"}, {"country": "Cuba", "data": "102"}, {"country": "Slovenia", "data": "102"}, {"country": "Turkey", "data": "100"}, {"country": "Armenia", "data": "101"}, {"country": "Syrian Arab Republic", "data": "100"}, {"country": "Sierra Leone", "data": "99"}, {"country": "Albania", "data": "98"}, {"country": "Dominica", "data": "96"}, {"country": "Ethiopia", "data": "96"}, {"country": "Costa Rica", "data": "96"}, {"country": "Benin", "data": "95"}, {"country": "Malaysia", "data": "95"}, {"country": "Northern Cyprus", "data": "93"}, {"country": "Egypt", "data": "91.73"}, {"country": "Spain", "data": "91.8"}, {"country": "Serbia", "data": "91"}, {"country": "Cambodia", "data": "86"}, {"country": "Iraq", "data": "85"}, {"country": "Romania", "data": "83"}, {"country": "Greece", "data": "82"}, {"country": "Kenya", "data": "81"}, {"country": "Macedonia, the former Yugoslav Republic of", "data": "81"}, {"country": "Myanmar", "data": "80"}, {"country": "Honduras", "data": "78"}, {"country": "Morocco", "data": "76.46"}, {"country": "French Polynesia", "data": "76"}, {"country": "Senegal", "data": "75"}, {"country": "Croatia", "data": "74"}, {"country": "Ukraine", "data": "74"}, {"country": "Ivory Coast", "data": "72"}, {"country": "Swaziland", "data": "72"}, {"country": "Timor-Leste", "data": "71"}, {"country": "Bosnia and Herzegovina", "data": "69"}, {"country": "Uzbekistan", "data": "69"}, {"country": "Lesotho", "data": "68"}, {"country": "Brunei Darussalam", "data": "68"}, {"country": "Ireland", "data": "68"}, {"country": "Samoa", "data": "66"}, {"country": "Tunisia", "data": "66"}, {"country": "Caribbean Netherlands", "data": "66"}, {"country": "Norfolk Island", "data": "66"}, {"country": "Burkina Faso", "data": "64"}, {"country": "Ecuador", "data": "64"}, {"country": "Bulgaria", "data": "64"}, {"country": "Turks and Caicos Islands", "data": "63"}, {"country": "Cook Islands", "data": "63"}, {"country": "Mexico", "data": "62"}, {"country": "Tanzania, United Republic of", "data": "62"}, {"country": "Tajikistan", "data": "60"}, {"country": "Equatorial Guinea", "data": "58"}, {"country": "Yemen", "data": "54"}, {"country": "Georgia", "data": "53"}, {"country": "Eritrea", "data": "52"}, {"country": "Nicaragua", "data": "50"}, {"country": "Montserrat", "data": "48"}, {"country": "Wallis and Futuna", "data": "48"}, {"country": "Iran, Islamic Republic of", "data": "48.35"}, {"country": "Fiji", "data": "47"}, {"country": "Panama", "data": "46"}, {"country": "Belarus", "data": "46"}, {"country": "Lithuania", "data": "45"}, {"country": "Montenegro", "data": "45"}, {"country": "Cameroon", "data": "44"}, {"country": "Guinea", "data": "43"}, {"country": "South Africa", "data": "43"}, {"country": "Palau", "data": "43"}, {"country": "Colombia", "data": "42.85"}, {"country": "Guinea-Bissau", "data": "43"}, {"country": "Liberia", "data": "42"}, {"country": "Afghanistan", "data": "39"}, {"country": "Cocos (Keeling) Islands", "data": "39"}, {"country": "Djibouti", "data": "38"}, {"country": "Congo, the Democratic Republic of the", "data": "36.3"}, {"country": "Madagascar", "data": "35"}, {"country": "Saint Helena, Ascension and Tristan da Cunha", "data": "35"}, {"country": "Faroe Islands", "data": "34"}, {"country": "Zimbabwe", "data": "33"}, {"country": "United States", "data": "33.04"}, {"country": "Venezuela, Bolivarian Republic of", "data": "32"}, {"country": "Latvia", "data": "31"}, {"country": "Mozambique", "data": "29.6"}, {"country": "Kyrgyzstan", "data": "29.5"}, {"country": "Estonia", "data": "29"}, {"country": "Lao People's Democratic Republic", "data": "27.8"}, {"country": "Bahamas", "data": "25.2"}, {"country": "Saint Pierre and Miquelon", "data": "25.1"}, {"country": "Brazil", "data": "23.8"}, {"country": "Peru", "data": "23.7"}, {"country": "Chile", "data": "22"}, {"country": "Vanuatu", "data": "21.7"}, {"country": "Sweden", "data": "22"}, {"country": "Bhutan", "data": "20.3"}, {"country": "Uruguay", "data": "18.6"}, {"country": "Åland Islands", "data": "18.4"}, {"country": "Solomon Islands", "data": "18.2"}, {"country": "Finland", "data": "16.2"}, {"country": "South Sudan", "data": "17.5"}, {"country": "Zambia", "data": "17.4"}, {"country": "Sudan", "data": "16.8"}, {"country": "New Zealand", "data": "17.5"}, {"country": "Angola", "data": "16.5"}, {"country": "Paraguay", "data": "16.4"}, {"country": "Algeria", "data": "16.2"}, {"country": "Norway", "data": "15.6"}, {"country": "Papua New Guinea", "data": "16"}, {"country": "Christmas Island", "data": "15.1"}, {"country": "Somalia", "data": "14.6"}, {"country": "Niger", "data": "14.4"}, {"country": "Argentina", "data": "14.4"}, {"country": "Belize", "data": "14.1"}, {"country": "Saudi Arabia", "data": "14"}, {"country": "New Caledonia", "data": "13.9"}, {"country": "Oman", "data": "13.5"}, {"country": "Congo", "data": "13"}, {"country": "Mali", "data": "11.6"}, {"country": "Turkmenistan", "data": "10.7"}, {"country": "Ascension Island", "data": "10"}, {"country": "Bolivia, Plurinational State of", "data": "9.46"}, {"country": "Chad", "data": "8.78"}, {"country": "Russian Federation", "data": "8.42"}, {"country": "Central African Republic", "data": "7.42"}, {"country": "Gabon", "data": "6.25"}, {"country": "Kazakhstan", "data": "6.31"}, {"country": "Niue", "data": "6.18"}, {"country": "Guyana", "data": "3.65"}, {"country": "Canada", "data": "3.64"}, {"country": "Libya", "data": "3.5"}, {"country": "Botswana", "data": "3.48"}, {"country": "Mauritania", "data": "3.36"}, {"country": "Suriname", "data": "3.26"}, {"country": "Iceland", "data": "3.24"}, {"country": "Australia", "data": "3.16"}, {"country": "French Guiana", "data": "2.82"}, {"country": "Namibia", "data": "2.56"}, {"country": "Western Sahara", "data": "2.25"}, {"country": "Mongolia", "data": "1.92"}, {"country": "Tristan da Cunha", "data": "1.3"}, {"country": "Pitcairn", "data": "1.19"}, {"country": "Falkland Islands (Malvinas)", "data": "0.21"}, {"country": "Svalbard and Jan Mayen", "data": "0.04"}, {"country": "Greenland", "data": "0.03"}]
			}

var data = {};

// append fill code and data
for (var x in country_codes)
{
	for (var y in density.points)
	{
		if (country_codes[x][2] == density.points[y].country)
		{
			data[country_codes[x][1]] = { fillKey: determineColor(density.points[y].data), density: density.points[y].data}
		}
	}
}

console.log(data)
console.log('a')


// determine fill code based on data
function determineColor(data)
{
	if (data < 10) {
		return '<10'
	} else if (data < 50) {
		return '10-50'
	} else if (data < 100) {
		return '50-100'
	} else if (data < 200) {
		return '100-200'
	} else if (data < 400) {
		return '200-400'
	} else if (data < 700) {
		return '400-700'
	} else {
		return '>700'
	}
}

// set-up map, fills based on fill code
var map = new Datamap({
	element: document.getElementById('container'),
	scope: 'world',
	projection: 'mercator',
	geographyConfig: {
		popupTemplate: function (geography, data) {
			return '<div class = "hoverinfo"><strong>'+ geography.properties.name +'<br> Population density: '+ data.density +'</div>'
		},
		borderColor: 'rgba(255,255,255,0.3)',
		highlightFillColor: 'pink',
		highlightBorderColor: 'rgba(0, 0, 0, 0.4)',
	},
	responsive: true,
	fills: {
		'<10': '#f2f0f7',
		'10-50': '#dadaeb',
		'50-100': '#bcbddc',
		'100-200': '#9e9ac8',
		'200-400': '#807dba',
		'400-700': '#6a51a3',
		'>700': '#4a1486',
		defaultFill: '#4682B4'
	},
	data: data
});

// add legend
map.legend();

// resize attribute
d3.select(window).on('resize', function() {
	map.resize();
});