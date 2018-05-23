const TOP = 100;
const CENTER = 50;
const BOTTOM = 0;

var lineHeight;

function drawBarChart(data, options, element){
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

  var measureTag = $( 'div', {
      //TODO
  });

  $.each( data, function( index, value ){
    var barTag = $( '<div>', {
      'class': 'bar ' + options.barColor,
      'style': 'width: ' + ((options.chartWidth -
        (options.barSpacing * data.length)) / data.length) +
        'px; height: ' + value[0] + 'px; ' + 'margin-left: ' +
        options.barSpacing + 'px; ' + 'margin-right: ' +
        options.barSpacing + 'px'
    });

    if(options.barValuePos == CENTER){
      lineHeight = 'line-height: ' + (value[0] / options.barValuePos) + '%';
    }else{
      lineHeight = 'line-height: ' + ((value[0] / options.barValuePos) - 10) + '%';
    }
    var valueTag = $( '<div>', {
      'class': 'value',
      'style': 'color: ' + options.barValueColor + '; bottom: ' +
      options.barValuePos + '%; ' + lineHeight
    }).html(value[0]);

    var labelTag = $( '<div>', {
      'class': 'label',
      'style': 'color: ' + options.barLabelColor +
        '; bottom: -30px'
    }).html(value[1]);

    valueTag.appendTo(barTag);
    labelTag.appendTo(barTag);
    barTag.appendTo(chartContainer);
  });
}
