var options = {
  chartTitle: 'My Chart',
  chartWidth: 500,
  chartHeight: 400,
  barSpacing: 3,
  barColor: 'orange',
  barLabelColor: 'blue',
  barValuePos: 'bottom'
};

function drawBarChart(data, options, element){
  var barClass = 'bar ' + options.barColor;
  var valueClass = 'value';
  var labelClass = 'label color-' + options.barLabelColor;
  var valueTag = $( '<div>', {
    'class': valueClass
  });
  var labelTag = $( '<div>', {
    'class': labelClass
  });

  var chartStyle = 'width: ' + options.chartWidth + 'px;' +
    ' height: ' + options.chartHeight + 'px';
  var body = $( 'body' );
  body.attr('class', 'chart ' + chartStyle);

  $.each( data, function( index, value ){
    var barStyle =  'width: ' + ((options.chartWidth -
      (options.barSpacing * data.length)) / data.length) +
      'px; height: ' + value[0] + 'px; ' + 'margin: ' +
      options.barSpacing + 'px';
    var barTag = $( '<div>', {
      'class': barClass,
      'style': barStyle
    });
    //valueTag.appendTo(barTag);
    //labelTag.appendTo(barTag);
    barTag.appendTo(body);
  });

  console.log(options);
  console.log(data[3][1]);
}
