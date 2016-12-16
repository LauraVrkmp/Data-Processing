# Laura Veerkamp
# 10361561

import csv
import json

# open reading and writing file
csvfile = open('QoL_over_time.csv', 'r')
jsonfile = open('QoL_over_time.json', 'w')

# initiate datapoints array and skip lines to data
points = []
fieldnames = ("Country", "twelve", "thirteen", "fourteen", "fifteen")

# read csv with according fieldnames
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    points.append(row)

json.dump(points, jsonfile)

jsonfile.close()
csvfile.close()