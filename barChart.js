// Position of the chart values inside each bars in %
var TOP = 100;
var CENTER = 50;
var BOTTOM = 0;

// Default design options for the chart
var options = {
  chartTitle: 'My Chart',
  chartTitleSize: '<h2>',
  chartTitleColor: 'blue',
  chartWidth: 500,
  chartHeight: 300,
  barSpacing: 3,
  barColor1: 'green',
  barColor2: 'blue',
  barColor3: 'orange',
  barValueColor: 'black',
  barLabelColor: 'blue',
  barValuePos: TOP
};

// Draws a scale on le left side of the chart
function drawScale(data, options, element){
  // Largest value in the chart
  var max = 0;
  // Decreasing scale values
  var scaleDecrease = 0;
  // Space between scale values
  var scaleSpace = 0;
  // Difference between each scale values
  var scaleStep = 0;

  // Lines that will appear behind the chart
  var lineTag = $( '<div>', {
    'class': 'lines',
    'style': 'width: ' + (options.chartWidth + 30) +
      'px; height: ' + options.chartHeight + 'px'
  });
  lineTag.appendTo(element);

  // Finds the largest value in the chart and
  // combines values in case of multiple values per bar (stacked)
  $.each( data, function( index, value ){
    var tempValue = 0;
    if(value[3]){
      tempValue = value[1] + value[2] + value[3];
    }else if(value[2]){
      tempValue = value[1] + value[2];
    }else{
      tempValue = value[1];
    }
    if(max < tempValue){
      max = tempValue;
    }
  });
  // Adjusts steps depending on the largest scale value
  scaleStep = max / 10;

  // Establishes scale amounts for 10 steps
  for(var i = 0; i < 10; i++){
    // Creates a scale element for each steps
    var scaleTag = $( '<div>' ).html(function() {
      // Adjusts space between values depending on steps
      scaleSpace += scaleStep;
      // Adjusts the amount for every step
      if(scaleDecrease < scaleStep){
        scaleDecrease = scaleStep;
      }else{
        scaleDecrease += scaleStep;
      }
      // Returns a scale based on the largest value in the chart
      // decreasing until it reaches 0
      return max - scaleDecrease;
    }).attr({
      'class': 'scale',
      'style': 'width: 30px; height: ' + options.chartHeight +
        'px; ' + 'margin-top: ' + (scaleSpace + scaleStep) + 'px'
    });
    scaleTag.appendTo(element);
  }
}

// Draws each bars inside a chart based on the arguments
function drawBars(data, options, element){
  // Establishes the width for each bars based on the amount of
  // values in the chart and the charts' width
  var barWidth = (options.chartWidth - (options.barSpacing *
    data.length)) / data.length;

  $.each( data, function( index, value ){
    // Creates a stacked bar element with all its options
    var stackedBarTag = $( '<div>', {
      'class': 'bar',
      'style': 'margin-left: ' + options.barSpacing + 'px; ' +
        'margin-right: ' + options.barSpacing + 'px'
    });

    // Creates a label element under each bars
    var labelTag = $( '<div>', {
      'class': 'label',
      'style': 'color: ' + options.barLabelColor +
        '; bottom: -30px'
    }).html(value[0]);

    for(var i = 1; i < value.length; i++){
      // Adjusts the position of values inside bars when centered
      var valueLineHeight = 'color: ' + options.barValueColor +
        '; bottom: ' + options.barValuePos + '%; line-height: ' +
        (value[1] / options.barValuePos) + '%';

      // Creates a bar element with all its options
      var barTag = $( '<div>', {
        'style': 'width: ' + barWidth + 'px; height: ' + value[i] + 'px;'
      });
      // Applies multiple colors to stacked bars
      if(i === 1){
        barTag.attr('class', 'bar ' +  options.barColor1);
      }else if(i === 2){
        barTag.attr('class', 'bar ' +  options.barColor2);
      }else{
        barTag.attr('class', 'bar ' +  options.barColor2);
      }

      // Creates a value element inside each bars
      var valueTag = $( '<div>', {
        'class': 'value',
        'style': 'color: ' + options.barValueColor + '; bottom: ' +
          options.barValuePos + '%'
      }).html(value[i]);

      // Applies a different style when centered
      if(options.barValuePos === CENTER){
        valueTag.attr('style', valueLineHeight);
      }

      valueTag.appendTo(barTag);
      labelTag.appendTo(barTag);
      barTag.appendTo(stackedBarTag);
    }
    stackedBarTag.appendTo(element);
  });
}

// Draws a chart based on data passed as arguments
function drawBarChart(data, options, element){
  // Creates a title element above the chart
  var chartTitleTag = $( options.chartTitleSize ).html(options.chartTitle);
  chartTitleTag.attr({
    'class': 'title',
    'style': 'color: ' + options.chartTitleColor
  });

  // Creates the chart container
  var chartContainer = $( element, {
    'class': 'chart ' + 'width: ' + options.chartWidth + 'px;' +
      ' height: ' + (options.chartHeight + 25) + 'px'
  });

  var body = $( 'body' );
  chartTitleTag.appendTo(body);
  chartContainer.appendTo(body);

  drawScale(data, options, chartContainer);
  drawBars(data, options, chartContainer);
}
