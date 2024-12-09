var data = [{
    x: [1, 2, 3, 4],
    y: [15, 10, 1, 20],
    type: 'scatter'
}];

var layout = {
    title: 'My SECOND Plotly Graph'
};

Plotly.newPlot('myPlot', data, layout, {responsive: true});
