function generateHistorical(obj, symbol) {
    var data = extract_info_Historical(obj);
    // console.log(data);
    Highcharts.stockChart('chart', {

        title: {
            text: symbol + ' Stock Price'
        },

        subtitle: {
            text: '<a target="_blank" href="https://www.alphavantage.co">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'week',
                count: 1,
                text: '1w'
            },
                {
                    type: 'month',
                    count: 1,
                    text: '1m',
                    dataGrouping: {
                        forced: true,
                        units: [['day', [1]]]
                    }
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m'
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'ytd',
                    text: 'YTD'
                },
                {
                    type: 'year',
                    count: 1,
                    text: '1y',
                    dataGrouping: {
                        forced: true,
                        units: [['week', [1]]]
                    }
                }, {
                    type: 'all',
                    text: 'ALL',
                    dataGrouping: {
                        forced: true,
                        units: [['month', [1]]]
                    }
                }],
            buttonTheme: {
                width: 60
            },
            selected: 0
        },

        series: [{
            name: symbol,
            data: data,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
}

function extract_info_Historical(obj) {
    // var symbol = obj["Meta Data"]["2. Symbol"];
    var result = [];
    var last_refresh = obj["Meta Data"]["3. Last Refreshed"].slice(0, 10);
    var data = obj["Time Series (Daily)"];
    var count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            var val = parseFloat(data[last_refresh]["4. close"]);
            var date = new Date(last_refresh).valueOf();
            result.unshift([date, val]);
        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var val = parseFloat(data[last_refresh]["4. close"]);
        var date = new Date(last_refresh).getUTCMilliseconds();
        result.unshift([date, val]);
    }

    return result;
}