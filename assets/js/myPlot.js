var data = [{
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
}];

var layout = {
    title: 'My Plotly Graph'
};

Plotly.newPlot('myPlot', data, layout, {responsive: true});
