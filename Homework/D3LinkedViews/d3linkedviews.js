// Laura Veerkamp
// 10361561
// D3LinkedViews

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
["ba", "BIH", "Bosnia And Herzegovina"],
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
["ru", "RUS", "Russia"],
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

function determineColor(data)
{
	if (data < 25) {
		return '<25'
	} else if (data < 50) {
		return '25-50'
	} else if (data < 75) {
		return '50-75'
	} else if (data < 100) {
		return '75-100'
	} else if (data < 125) {
		return '100-125'
	} else if (data < 150) {
		return '125-150'
	} else if (data < 175) {
		return '150-175'
	} else {
		return '>175'
	}
}

d3.json("QoL_over_time.json", function (data) {
	
	var data2012 = {};
	var data2013 = {};
	var data2014 = {};
	var data2015 = {};

	// append fill code and data
	for (var x in country_codes)
	{
		for (var y in data)
		{
			if (country_codes[x][2] == data[y].Country)
			{
				data2012[country_codes[x][1]] = { fillKey: determineColor(data[y].twelve), index: data[y].twelve}
				data2013[country_codes[x][1]] = { fillKey: determineColor(data[y].thirteen), index: data[y].thirteen}
				data2014[country_codes[x][1]] = { fillKey: determineColor(data[y].fourteen), index: data[y].fourteen}
				data2015[country_codes[x][1]] = { fillKey: determineColor(data[y].fifteen), index: data[y].fifteen}
			}
		}
	}

	var map = new Datamap({
		element: document.getElementById('container'),
		setProjection: function(element) {
			var projection = d3.geo.equirectangular()
			  .scale(950)
			  .center([15, 53])
			  .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
			var path = d3.geo.path()
			  .projection(projection);

			return {path: path, projection: projection};
		},

		data: data2012,
		geographyConfig: {
			borderColor: 'black',
			borderWidth: '0.5px',
			highlightFillColor: '#feb24c',
			highlightBorderColor: 'black',
			highlightBorderWidth: '2px',
			responsive: true,
			popuOnHover: true,
			popupTemplate: function (geo, data) {
				if (data) {
					return '<div class = "hoverinfo"><strong>'+ geo.properties.name +'</strong><br>Quality of life index: '+ data.index
				}
				else {
					return '<div class = "hoverinfo"><strong>'+ geo.properties.name +'</strong>'
				}
			}
		},
			
		fills: {
			'<25': '#ffffe5',
			'25-50': '#f7fcb9',
			'50-75': '#d9f0a3',
			'75-100': '#addd8e',
			'100-125': '#78c679',
			'125-150': '#41ab5b',
			'150-175': '#238443',
			'>175': '#005a32',
			defaultFill: '#d9d9d9'
		}
	})
	
	// resize attribute
	d3.select(window).on('resize', function () {
		map.resize();
	});	
	
	// make legend
	map.legend();
})