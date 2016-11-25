# Laura Veerkamp
# 10361561

import csv
import json

# open reading and writing file
csvfile = open('data_edit.csv', 'r')
jsonfile = open('data_edit.json', 'w')

# initiate datapoints array and skip lines to data
points = []
fieldnames = ("month", "mm")

# read csv with according fieldnames
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    points.append(row)

points_dict = {'points': points}
json.dump(points_dict, jsonfile)

jsonfile.close()
csvfile.close()