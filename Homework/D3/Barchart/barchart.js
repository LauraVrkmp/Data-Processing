// Laura Veerkamp
// 10361561

// set dimensions
var margin = {top: 20, right: 30, bottom: 60, left: 60},
	width = 900 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

// create chart dimensions
var chart = d3.select(".chart")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
// scale for x
var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);
	
// scale for y	
var y = d3.scale.linear()
	.range([height, 0]);

// xAxis
var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
	
// yAxis
var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

// load json data
d3.json("/../data_edit.json", function(data) {
	x.domain(data.points.map(function(d) {return d.month;}));
	y.domain([0, 50]);
	
	// create d3-tip
	var tip = d3.tip()
		.attr("class", "d3-tip")
		.offset([-10, 0])
		.html(function(d) {return d.mm;})
	chart.call(tip);
	
	// add x Axis
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text")
		.attr("x", width / 2)
		.attr("y", 50)
		.text("Months");
	
	// add y Axis
	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -50)
		.attr("x", -height / 1.6)
		.text("Milimeters per 24h");
	
	// create bars
	chart.selectAll(".bar")
		.data(data.points)
	  .enter().append("rect")
		.attr("class", "bar")
		.attr("x", function(d) {return x(d.month);})
		.attr("y", function(d) {return y(d.mm);})
		.attr("height", function(d) {return height - y(d.mm);})
		.attr("width", x.rangeBand())
		// on mouse hover over, change bar color and show tip
		.on("mouseover", function(d) {
			d3.select(this)
			.style("fill", "#99d8c9");
			tip.show(d)
		})
		// reverse
		.on("mouseout", function(){
			d3.select(this)
			.style("fill", "#e5f5f9");
			tip.hide()
		});	
});



