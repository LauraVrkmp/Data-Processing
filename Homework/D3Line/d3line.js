// Laura Veerkamp
// 10361561

window.onload = function() {
	// set canvas and margins
	var margin = {top: 10, right: 50, bottom: 60, left: 80},
	width = 800 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;
	
	// set domains
	var x = d3.time.scale()
		.range([0, width]);
	var y = d3.scale.linear()
		.range([height, 0]);
	
	// date parse
	var parseTime = d3.time.format("%Y%m%d").parse,
		bisectDate = d3.bisector(function(d) { return d.Day; }).left;
	
	// initiate axes
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");
	
	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");
	
	// initiate line
	var line = d3.svg.line()
		.x(function(d) {return x(d.Day); })
		.y(function(d) {return y(d.GEM); });
	
	// set up svg
	var svg = d3.select("svg")
		.attr("class", "chart")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// queue json files
	queue()
		.defer(d3.json, "Data/data_edit_Hoorn.json")
		.defer(d3.json, "Data/data_edit_Maastricht.json")
		.await(drawLines);
	
	// after queue parse data
	function drawLines(error, Hoorn, Maastricht) {
		Hoorn.points.forEach(function(d) {
		d.Day = parseTime(d.Day);
		d.GEM = d.GEM/10;
		});
		
		// data parcing
		x.domain(d3.extent(Hoorn.points, function(d) {return d.Day}));
		y.domain([-4, 12]);
		
		// X axis plus values
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
		  	.selectAll("text")
			.attr("dx", ".5em")
			.attr("dy", ".5em")
			.attr("transform", "rotate(45)")
			.style("text-anchor", "start");
		
		// Y axis plus values
		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("dy", "-3em")
			.attr("transform", "rotate(-90)")
			.style("text-anchor", "end")
			.text("Average temperature (degrees C)");
		
		// draw line
		svg.append("path")
			.attr("class", "line")
			.attr("d", line(Hoorn.points));
		
		// pointer
		var pointer = svg.append("g")
			.attr("class", "pointer")
			.append("circle")
			.attr("r", 4);
		
		// area of pointer activity
		svg.append("rect")
			.attr("class", "overlay")
			.attr("width", width)
			.attr("height", height)
			.on("mouseover", function() {pointer.style("display", null); })
			.on("mouseout", function() {pointer.style("display", "none"); })
			.on("mousemove", mousemove);
		
		// refresh pointer
		function mousemove() {
			var x0 = x.invert(d3.mouse(this)[0]),
				i = bisectDate(Hoorn.points, x0, 1),
				d0 = Hoorn.points[i - 1],
				d1 = Hoorn.points[i],
				d = x0 - d0.Day > d1.Day - x0 ? d1 : d0;
			pointer.attr("transform", "translate(" + x(d.Day) + "," + y(d.GEM) + ")");
			pointer.select("text").text(d.GEM);
		}
	}
};
