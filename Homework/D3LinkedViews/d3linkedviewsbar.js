// Laura Veerkamp
// 10361561
// D3LinkedViewsBar

window.onload = loadData()
var data_load;

function loadData() {
	data_load = "QoL_over_time.json";

	//set canvas and margin
	var margin = {top: 20, right: 50, bottom: 115, left: 55},
	width = 900 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

	// set scales
	var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);
	var y = d3.scale.linear()
	.range([height, 0]);

	// set axes
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	// set dimensions
	var chart = d3.select(".barchart")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// load data from the json file
	d3.json(data_load, function(data) {
		console.log(data);
		// set domains
		x.domain(data.map(function(d) { console.log(d.Country);return d.Country; }));
		y.domain([-15, 230]);

		// create x-axis
		chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
		  .selectAll("text")
			.attr("y", -3)
			.attr("x", 15)
			.attr("transform", "rotate(90)")
			.style("text-anchor", "start");

		// create y-axis
		chart.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", -42)
		  .attr("x", -height / 3)
		  .style("text-anchor", "end")
		  .text("Quality of Life index");

		// create d3-tip
		var tip = d3.tip()
		  .attr('class', 'd3-tip')
		  .offset([-10, 0])
		  .html(function(d) {
			return "<span style='color: #000000'>" + d.twelve + "</span>";
		  })
		chart.call(tip);
		  
		// create bars of chart
		var bar = chart.selectAll(".bar")
		  .data(data)
		.enter().append("rect")
		  .attr("class", "bar")
		  .attr("x", function(d) { console.log((d.Country));return x(d.Country); })
		  .attr("y", function(d) { return y(d.twelve); })
		  .attr("height", function(d) { return height - y(d.twelve); })
		  .attr("width", x.rangeBand())
		  // change color on mouse hover and show data
		  .on("mouseover", function(d){
			d3.select(this)
			  .style("fill", "#fec44f");
			tip.show(d)
		  })
		  // change the color back on mouse out and hide data
		  .on("mouseout", function(){
			d3.select(this)
			  .style("fill", "#d95f0e");
			tip.hide()
		  });
	});
}