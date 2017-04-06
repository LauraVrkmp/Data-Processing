// Laura Veerkamp
// 10361561
// D3LinkedViews

$.getScript( "countrycodes.js");

$(document).ready(function () {
	function determineColor(data){
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
});