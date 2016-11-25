# Laura Veerkamp
# 10361561

import csv
import json

# open reading and writing file
csvfile = open('KNMI_20151231.csv', 'r')
jsonfile = open('KNMI_20151231.json', 'w')

# initiate datapoints array and skip lines to data
points = []
for i in range(12):
    csvfile.next()
fieldnames = ("Site", "Day", "Data")

# read csv with according fieldnames
reader = csv.DictReader(csvfile, fieldnames, skipinitialspace = True)
for row in reader:
    points.append(row)

# dictionary filter    
#def dict_filter(it, *keys):
#    for d in it:
#        yield dict((k, d[k]) for k in keys)

# transfer specified fieldname data to JSON        
#for d in dict_filter(points, 'Day', 'Data'):
#    json.dump(d, jsonfile, indent = 4)
#    jsonfile.write('\n')

points_dict = {'points': points}
json.dump(points_dict, jsonfile)

jsonfile.close()
csvfile.close()