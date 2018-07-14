# Chart Library

## About the project

A library that allows developers to generate bar charts on their web pages.

## Getting Started

#### With the help of this library, a user can easily create one or more bar charts by simply passing 3 arguments in the _'drawBarChart'_ function:
- an array of data that contains one label and at least one value for each bars (up to three values in the case of stacked bars)
- an object containing all the 11 available design options for the chart*
- an element that will be used as a container for the chart

_\* a default object is provided as 'options'_

#### The 11 available options are:
- __chartTitle:__ the title of a chart, as a string
- __chartTitleSize:__ the size of the title, as a string, as header levels (\<h1>, \<h2>, \<h3>, etc.)
- __chartTitleColor:__ the color of the title, as a string*
- __chartWidth:__ the width of a chart, as a number (in pixels)  
note: the height is adjusted automatically based on the highest value in bars
- __barSpacing:__ the space between each bars, as a number (in pixels)
- __barColor1:__ the color of the bars (or the first level of values in the case of stacked bars), as a string*
- __barColor2:__ the color of the second level in stacked bars, as a string*
- __barColor3:__ the color of the third level in stacked bars, as a string*
- __barValueColor:__ the color of the values associated to each bars, as a string*
- __barLabelColor:__ the color of the labels under each bars, as a string*
- __barValuePos:__ the position of the value inside each bars, as a string (choices are TOP, CENTER or BOTTOM)

_\* choices of colors are orange, blue, red, green, black or white but the user can easily add more in the css file_
#### Example of the default design options:
![options](/assets/screenshots/options.png)

#### Coming features:
- change colors of values in stacked bars for each level independently
- presets for design options

#### External resources that were used for this project:
http://eloquentjavascript.net  
https://www.w3schools.com (mostly used for css)  
http://learn.jquery.com

## Screenshots

#### Example of the default chart:
![options](/assets/screenshots/default-chart.png)
#### Example of a stacked chart:
![options](/assets/screenshots/stacked-chart.png)
