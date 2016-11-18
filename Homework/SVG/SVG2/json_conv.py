# Laura Veerkamp
# 10361561

from pattern.web import DOM
import json
import urllib

# load html from file and parse into DOM
html = urllib.urlopen("data_population_density.html").read()
dom = DOM(html)

countries = []

# select country and data, append to countries (country in first 'a' tag)
def append():
	name = land.by_tag('a')[0].content
	population_input = str(land('td')[5].content)
	population_output = population_input.replace(',', '')
	
	point = {
		"country": name,
		"data": population_output,
	}
	countries.append(point)

	# select country and data, append to countries (country in second 'a' tag)
def append_name():
	name = land.by_tag('a')[1].content
	population_input = str(land('td')[5].content)
	population_output = population_input.replace(',', '')
	
	point = {
		"country": name,
		"data": population_output,
	}
	countries.append(point)

# iterate over DOM
for land in dom('tr')[0:179]:
	append()

for land in dom('tr')[179:180]:
	append_name()

for land in dom('tr')[180:221]:
	append()

for land in dom('tr')[221:222]:
	append_name()

for land in dom('tr')[222:239]:
	append()
	
for land in dom('tr')[239:240]:
	append_name()
	
for land in dom('tr')[240:241]:
	append()
	
for land in dom('tr')[241:242]:
	append_name()

for land in dom('tr')[242:246]:
	append()

# convert to JSON
print(json.dumps(countries))