var TOP = 100;
var CENTER = 50;
var BOTTOM = 0;

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

function drawBarChart(data, options, element){
  var scaleDecrease = 0;
  var scaleSpace = 0;
  var scaleStep = 0;
  var barWidth = (options.chartWidth - (options.barSpacing *
    data.length)) / data.length;
  var chartTitleTag = $( options.chartTitleSize ).html(options.chartTitle);
  chartTitleTag.attr({
    'class': 'title',
    'style': 'color: ' + options.chartTitleColor
  });

  var chartContainer = $( element, {
    'class': 'chart ' + 'width: ' + options.chartWidth + 'px;' +
      ' height: ' + options.chartHeight + 'px'
  });

  var body = $( 'body' );
  chartTitleTag.appendTo(body);
  chartContainer.appendTo(body);

  var lineTag = $( '<div>', {
    'class': 'lines',
    'style': 'width: ' + (options.chartWidth + 30) +
      'px; height: ' + (options.chartHeight - 25) + 'px'
  });
  lineTag.appendTo(chartContainer);

  for(var i = 0; i < 10; i++){
    var scaleTag = $( '<div>' ).html(function() {
      var max = 0;
      $.each( data, function( index, value ){
        if(max < value[0]){
          max = value[0];
        }
      });
      scaleStep = max / 10;
      scaleSpace += scaleStep;
      if(scaleDecrease < scaleStep){
        scaleDecrease = scaleStep;
      }else{
        scaleDecrease += scaleStep;
      }
      return max - scaleDecrease;
    }).attr({
      'class': 'measure',
      'style': 'width: ' + barWidth + 'px; height: '
      + options.chartHeight + 'px; ' + 'margin-top: ' + scaleSpace  + 'px'
    });
    scaleTag.appendTo(chartContainer);
  }

  $.each( data, function( index, value ){
    var valueLineHeight = 'color: ' + options.barValueColor +
      '; bottom: ' + options.barValuePos + '%; line-height: ' +
      (value[0] / options.barValuePos) + '%';

    var barTag = $( '<div>', {
      'class': 'bar ' + options.barColor,
      'style': 'width: ' + barWidth + 'px; height: ' + value[0] +
      'px; ' + 'margin-left: ' + options.barSpacing + 'px; ' +
      'margin-right: ' + options.barSpacing + 'px'
    });

    var valueTag = $( '<div>', {
      'class': 'value',
      'style': 'color: ' + options.barValueColor + '; bottom: ' +
      options.barValuePos + '%'
    }).html(value[0]);

    if(options.barValuePos === CENTER){
      valueTag.attr('style', valueLineHeight);
    }

    var labelTag = $( '<div>', {
      'class': 'label',
      'style': 'color: ' + options.barLabelColor +
        '; bottom: -30px'
    }).html(value[1]);

    valueTag.appendTo(barTag);
    labelTag.appendTo(barTag);
    barTag.appendTo(chartContainer);

    console.log('decrease:' + scaleDecrease);
    console.log('step:' + scaleStep);
    console.log('space:' + scaleSpace);

  });
}
