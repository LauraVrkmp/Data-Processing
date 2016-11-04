#!/usr/bin/env python
# Name: Laura Veerkamp
# Student number: 10361561
'''
This script scrapes IMDB and outputs a CSV file with highest rated tv series.
'''
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

def extract_tvseries(dom):
    '''
    Extract a list of highest rated TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Rating
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    # empty list of series
    tvseries = []
     
    for element_0 in dom.by_tag("div.lister-item-content"):
        
        # empty list of details
        tvseries_item = []
        
        #title
        for element_1 in element_0.by_tag("h3.lister-item-header"):
            for element_2 in element_1.by_tag("a"):
                title = element_2.content.encode('ascii', 'ignore')
                tvseries_item.append(title)
        
        #rating
        for element_1 in element_0.by_tag("div.ratings-bar"):
            for element_2 in element_1.by_tag("strong"):
                rating = element_2.content.encode('ascii', 'ignore')
                tvseries_item.append(rating)
        
        #genre
        for element_1 in element_0.by_tag("p"):
            for element_2 in element_1.by_tag("span.genre"):
                genre = element_2.content.encode('ascii', 'ignore').strip(" ").strip("\n")
                tvseries_item.append(genre)
            
        #actors
        actors = ""
        for element_1 in element_0.by_tag("p"):
            for element_2 in element_1("a")[:-1]:
                actors += element_2.content.encode('ascii', 'ignore') + ", "
            for element_2 in element_1("a")[-1:]:
                actors += element_2.content.encode('ascii', 'ignore')
        tvseries_item.append(actors)          
            
        #runtime
        for element_1 in element_0.by_tag("p"):
            for element_2 in element_1.by_tag("span.runtime"):
                runtime = element_2.content.encode('ascii', 'ignore').strip(' min')
                tvseries_item.append(runtime)
            
        # fill list of series with details
        tvseries.append(tvseries_item)

    return tvseries


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest rated TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Rating', 'Genre', 'Actors', 'Runtime'])
    
    # print tvseries_item per line
    for element in tvseries:
        writer.writerow(element)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)