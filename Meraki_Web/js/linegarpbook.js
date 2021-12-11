google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Ngày', 'Thời gian đọc'],
        ['1', 1],
        ['2', 2],
        ['3', 0.5],
        ['4', 3],
        ['5', 3.5],
        ['6', 1],
        ['15', 1.5],
        ['16', 3],
        ['19', 2],
        ['20', 5],
        ['21', 1.5],
        ['22', 1],
    ]);

    var options = {
        title: 'Thành tích đọc sách tháng 12/2021',

        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}




