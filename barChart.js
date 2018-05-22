
function drawBarChart(data, options, element){
  var valueClass = 'value';
  var valueStyle = 'color: ' + options.barValueColor +
    '; bottom: ' + options.barValuePos + '%';
  var labelClass = 'label';
  var labelStyle = 'color: ' + options.barLabelColor +
    '; bottom: -30px';
  var chartTitleStyle = 'color: ' + options.chartTitleColor;
  var chartStyle = 'width: ' + options.chartWidth + 'px;' +
    ' height: ' + options.chartHeight + 'px';
  var chartTitleTag = $( options.chartTitleSize ).html(options.chartTitle);
  chartTitleTag.attr({
    'class': 'title',
    'style': 'color: ' + options.chartTitleColor
  });
  var container = $( element );
  container.attr('class', 'chart ' + chartStyle);
  var body = $( 'body' );
  chartTitleTag.appendTo(body);
  container.appendTo(body);

  $.each( data, function( index, value ){
    var barClass = 'bar ' + options.barColor;
    var barStyle =  'width: ' + ((options.chartWidth -
      (options.barSpacing * data.length)) / data.length) +
      'px; height: ' + value[0] + 'px; ' + 'margin-left: ' +
      options.barSpacing + 'px; ' + 'margin-right: ' +
      options.barSpacing + 'px';
    var barTag = $( '<div>', {
      'class': barClass,
      'style': barStyle
    });
    var valueTag = $( '<div>', {
      'class': valueClass,
      'style': valueStyle
    }).html(value[0]);
    var labelTag = $( '<div>', {
      'class': labelClass,
      'style': labelStyle
    }).html(value[1]);
    valueTag.appendTo(barTag);
    labelTag.appendTo(barTag);
    barTag.appendTo(container);
  });
}
