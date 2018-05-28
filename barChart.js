// position of the chart values inside each bars
var TOP = 100;
var CENTER = 50;
var BOTTOM = 0;

// design options for the chart
var options = {
  chartTitle: 'My Chart',
  chartTitleSize: '<h2>',
  chartTitleColor: 'blue',
  chartWidth: 500,
  chartHeight: 325,
  barSpacing: 3,
  barColor: 'green',
  barValueColor: 'black',
  barLabelColor: 'blue',
  barValuePos: TOP
};

// draws a scale on le left side of the chart
function drawScale(data, options, element){
  // largest value in the chart
  var max = 0;
  // decreasing scale values
  var scaleDecrease = 0;
  // space between scale values
  var scaleSpace = 0;
  // difference between each scale values
  var scaleStep = 0;

  // lines that will appear behind the chart
  var lineTag = $( '<div>', {
    'class': 'lines',
    'style': 'width: ' + (options.chartWidth + 30) +
      'px; height: ' + (options.chartHeight - 25) + 'px'
  });
  lineTag.appendTo(element);

  // finds the largest value in the chart
  $.each( data, function( index, value ){
    if(max < value[1]){
      max = value[1];
    }
  });

  // establishes scale amounts for 10 steps
  for(var i = 0; i < 10; i++){
    // creates a scale element for each steps
    var scaleTag = $( '<div>' ).html(function() {
      // adjusts steps depending on the largest scale value
      scaleStep = max / 10;
      // adjusts space depending on steps
      scaleSpace += scaleStep;
      // adjusts the amount for every step
      if(scaleDecrease < scaleStep){
        scaleDecrease = scaleStep;
      }else{
        scaleDecrease += scaleStep;
      }
      // returns a scale that depends on the largest value in the chart
      // decreasing until it reaches 0
      return max - scaleDecrease;
    }).attr({
      'class': 'scale',
      'style': 'width: 30px; height: '
      + options.chartHeight + 'px; ' + 'margin-top: ' + scaleSpace  + 'px'
    });
    scaleTag.appendTo(element);
  }
}

// draws each bars inside a chart based on the data argument
function drawBars(data, options, element){
  // establishes the width for each bars based on the amount of
  // values in the chart and the charts' width
  var barWidth = (options.chartWidth - (options.barSpacing *
    data.length)) / data.length;

  $.each( data, function( index, value ){
    // adjusts the position of values inside bars when centered
    var valueLineHeight = 'color: ' + options.barValueColor +
      '; bottom: ' + options.barValuePos + '%; line-height: ' +
      (value[1] / options.barValuePos) + '%';

    // creates a bar element with all its options
    var barTag = $( '<div>', {
      'class': 'bar ' + options.barColor,
      'style': 'width: ' + barWidth + 'px; height: ' + value[1] +
      'px; ' + 'margin-left: ' + options.barSpacing + 'px; ' +
      'margin-right: ' + options.barSpacing + 'px'
    });

    // creates a value element inside each bars
    var valueTag = $( '<div>', {
      'class': 'value',
      'style': 'color: ' + options.barValueColor + '; bottom: ' +
      options.barValuePos + '%'
    }).html(value[1]);

    // applies a different style when centered
    if(options.barValuePos === CENTER){
      valueTag.attr('style', valueLineHeight);
    }

    // creates a label element under each bars
    var labelTag = $( '<div>', {
      'class': 'label',
      'style': 'color: ' + options.barLabelColor +
        '; bottom: -30px'
    }).html(value[0]);

    valueTag.appendTo(barTag);
    labelTag.appendTo(barTag);
    barTag.appendTo(element);
  });
}

// draws a chart based on data passed as arguments
function drawBarChart(data, options, element){
  // creates a title element above the chart
  var chartTitleTag = $( options.chartTitleSize ).html(options.chartTitle);
  chartTitleTag.attr({
    'class': 'title',
    'style': 'color: ' + options.chartTitleColor
  });

  // creates the chart container
  var chartContainer = $( element, {
    'class': 'chart ' + 'width: ' + options.chartWidth + 'px;' +
      ' height: ' + options.chartHeight + 'px'
  });

  var body = $( 'body' );
  chartTitleTag.appendTo(body);
  chartContainer.appendTo(body);

  drawScale(data, options, chartContainer);
  drawBars(data, options, chartContainer);
}
