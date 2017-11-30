

function replace_chart_Price(obj) {
    var price = [], volume = [], date = [], symbol = "";
    [price, volume, date, symbol] = extract_info_Price(obj);

    PRICEchart = Highcharts.chart('Price', {
        chart: {
//                    width: 1200,
//                    height: 500
        },
        title: {
            text: symbol + ' Stock Price and Volume'
        },
        subtitle: {
            text: 'Source: <a href=\"https://www.alphavantage.co\">' +
            'Alpha Vantage</a>',
            style: {
                color: 'red'
            }
        },
        plotOptions: {
//                    series: {
//                        fillColor: 'rgb(240, 145, 142)'
//                    },
            area: {
                marker: {
                    enabled: false
                },
                fillColor: 'rgb(230, 230, 255)'
            }
        },
        xAxis: [{
            categories: date,
            allowDecimals: false,
            labels: {
//                        formatter: function () {
//                            var arr = this.value.split('-');
//                            return arr[1] + '/' + arr[2];
//                        },
                align: 'left',
                // step: 10,
                rotation: -45,
                x: -10,
                y: 45,
                overflow: 'justify'

            },
            crosshair: true,
            showFirstLabel: true,
            showLastLabel: true,
            tickInterval: 10
        }],
        yAxis: [{ // Primary yAxis
            allowDecimals: false,
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }

            },
            title: {
                text: 'Stock Price',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            tickAmount: '4',
            // min: min_price,
        }, { // Secondary yAxis
            title: {
                text: 'Volume',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                formatter: function () {
                    return this.value / 1000000 + 'M';
                },
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true,
            // max: max_volume,
            tickAmount: '4'
        }],
        tooltip: {
            shared: false,
            xDateFormat: '%m/%d'

        },
        legend: {
            // layout: 'vertical',
            // align: 'right',
            // verticalAlign: 'middle',
            floating: false
            // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Price',
            type: 'area',
            yAxis: 0,
            data: price,
            label: {
                enabled: false
            },
            color: 'blue',
            tooltip: {}
        },
            {
                name: 'Volume',
                type: 'column',
                yAxis: 1,
                data: volume,

                tooltip: {
                    valueDecimals: 0
                },
                color: 'red'
            }]
    });
}

function replace_chart_SMA(obj) {
    var symbol = obj["Meta Data"]["1: Symbol"];
    var value = [], date = [];
    [value, date] = extract_info(obj, "SMA");
    SMAchart = Highcharts.chart('SMA', {

        title: {
            text: 'Simple Moving Average (SMA)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'SMA'
            },
            labels: {
                formatter: function () {
                    return this.value.toFixed(1);
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                }
                // color: 'red'
            }
        },

        series: [{
            name: symbol,
            data: value
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });

}

function replace_chart_EMA(obj) {
    var symbol = obj["Meta Data"]["1: Symbol"];
    var value = [], date = [];
    [value, date] = extract_info(obj, "EMA");
    EMAchart = Highcharts.chart('EMA', {

        title: {
            text: 'Exponential Moving Average (EMA)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'EMA'
            },
            labels: {
                formatter: function () {
                    return this.value.toFixed(1);
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                },
                color: 'red'
            }
        },

        series: [{
            name: symbol,
            data: value
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_STOCH(obj) {
    //var symbol = obj["Meta Data"]["1: Symbol"];
    var slowK = [], slowD = [], date = [];
    [slowK, slowD, date] = extract_info_STOCH(obj);
    // console.log(slowK);
    // console.log(slowD);
    STOCHchart = Highcharts.chart('STOCH', {

        title: {
            text: 'Stochastic Oscillator (STOCH)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'STOCH'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                },
                color: 'red'
            }
        },

        series: [{  //slowK
            name: 'SlowK',
            data: slowK,
            color: 'red'
        },
            {//slow D
                name: 'SlowD',
                data: slowD,
                color: 'blue'
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_RSI(obj) {
    var symbol = obj["Meta Data"]["1: Symbol"];
    var value = [], date = [];
    [value, date] = extract_info(obj, "RSI");
    RSIchart = Highcharts.chart('RSI', {

        title: {
            text: 'Relative Strength Index (RSI)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'RSI'
            },
            labels: {
                formatter: function () {
                    return this.value.toFixed(1);
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                },
                color: 'red'
            }
        },

        series: [{
            name: symbol,
            data: value
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_ADX(obj) {
    var symbol = obj["Meta Data"]["1: Symbol"];
    var value = [], date = [];
    [value, date] = extract_info(obj, "ADX");
    ADXchart = Highcharts.chart('ADX', {

        title: {
            text: 'Average Directional movement indeX (ADX)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'ADX'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                },
                color: 'red'
            }
        },

        series: [{
            name: symbol,
            data: value
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_CCI(obj) {
    var symbol = obj["Meta Data"]["1: Symbol"];
    var value = [], date = [];
    [value, date] = extract_info(obj, "CCI");
    CCIchart = Highcharts.chart('CCI', {

        title: {
            text: 'Commodity Channel Index (CCI)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'CCI'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                label: {
                    connectorAllowed: false

                },
                color: 'red'
            }
        },

        series: [{
            name: symbol,
            data: value
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_BBANDS(obj) {
    var lo = [], mid = [], up = [], date = [];
    [lo, mid, up, date] = extract_info_BBANDS(obj);

    BBANDSchart = Highcharts.chart('BBANDS', {

        chart: {
            type: 'line'
        },

        title: {
            text: 'Bollinger Bands (BBANDS)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'BBANDS'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {

            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                type: 'line',
                label: {
                    connectorAllowed: false

                }
            }
        },

        series: [{  //lo
            name: 'Real Lower Band',
            data: lo,
            color: 'green',
        },
            {//mid
                name: 'Real Middle Band',
                data: mid,
                color: 'red',
            },
            {//upper
                name: 'Real Upper Band',
                data: up,
                color: 'black',
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function replace_chart_MACD(obj) {
    var macd = [], hist = [], signal = [], date = [];
    [macd, hist, signal, date] = extract_info_MACD(obj);

    MACDchart = Highcharts.chart('MACD', {

        chart: {
            type: 'line'
        },

        title: {
            text: 'Moving Average Convergence/Divergence (MACD)'
        },

        subtitle: {
            text: '<a href=\"https://www.alphavantage.co\">Source: Alpha Vantage</a>',
            style: {
                color: 'blue'
            }
        },

        xAxis: {
            categories: date,
            labels: {
                rotation: -45,
                overflow: 'justify'
            },
            tickInterval: 5
        },

        yAxis: {
            title: {
                text: 'MACD'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {

            line: {
                marker: {
                    // enabled: true,
                    // symbol: 'diamond'
                }
            },
            series: {
                type: 'line',
                label: {
                    connectorAllowed: false

                }
            }
        },

        series: [{  //MACD
            name: 'MACD',
            data: macd,
            color: 'green',
        },
            {//MACD_hist
                name: 'MACD_hist',
                data: hist,
                color: 'red',
            },
            {//upper
                name: 'MACD_signal',
                data: signal,
                color: 'black',
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}


//extract information
function extract_info_Price(obj) {
    var symbol = obj["Meta Data"]["2. Symbol"];
    var date = [], price = [], volume = [];
    var last_refresh = obj["Meta Data"]["3. Last Refreshed"].slice(0, 10);
    console.log(last_refresh);
    var name = "Time Series (Daily)";
    var data = obj[name];
    var latest = "";
    var count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            if (latest === "") {
                latest = last_refresh;
            }
            var arr = last_refresh.split("-");
            var val = parseFloat(data[last_refresh]["4. close"]);
            var vol = parseFloat(data[last_refresh]["5. volume"]);
            date.unshift(arr[1] + '/' + arr[2]);
            price.unshift(val);
            volume.unshift(vol);
        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        price.unshift(parseFloat(data[last_refresh]["4. close"]));
        volume.unshift(parseFloat(data[last_refresh]["5. volume"]));

    }

    var arr = latest.split('-');
    latest = '(' + arr[1] + '/' + arr[2] + '/' + arr[0] + ')';
    return [price, volume, date, symbol];
}

function extract_info(obj, indicator) { //extract both data and date and return an object

    var date = [], value = [];
    var last_refresh = obj["Meta Data"]["3: Last Refreshed"];
    console.log("entered extract_info");
    var name = "Technical Analysis: " + indicator;
    var data = obj[name];
    while (!data.hasOwnProperty(last_refresh)) {
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
    }

    var arr = last_refresh.split("-");
    date.unshift(arr[1] + '/' + arr[2]);
    value.unshift(parseFloat(data[last_refresh][indicator]));
    last_refresh = new Date(last_refresh);
    last_refresh.setDate(last_refresh.getDate() - 1);
    last_refresh = last_refresh.toISOString().slice(0, 10);

    while (!data.hasOwnProperty(last_refresh)) {
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
    }


    count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            var arr = last_refresh.split("-");
            date.unshift(arr[1] + '/' + arr[2]);
            value.unshift(parseFloat(data[last_refresh][indicator]));
        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        value.unshift(parseFloat(data[last_refresh][indicator]));
    }

    return [value, date];
}

function extract_info_STOCH(obj) {
    var date = [], slowK = [], slowD = [];
    var last_refresh = obj["Meta Data"]["3: Last Refreshed"];

    var name = "Technical Analysis: STOCH";
    var data = obj[name];

    var count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            var arr = last_refresh.split("-");
            date.unshift(arr[1] + '/' + arr[2]);
            slowK.unshift(parseFloat(data[last_refresh]["SlowK"]));
            slowD.unshift(parseFloat(data[last_refresh]["SlowD"]));

        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        slowK.unshift(parseFloat(data[last_refresh]["SlowK"]));
        slowD.unshift(parseFloat(data[last_refresh]["SlowD"]));

    }

    return [slowK, slowD, date];
}

function extract_info_BBANDS(obj) {
    var date = [], low = [], mid = [], up = [];
    var last_refresh = obj["Meta Data"]["3: Last Refreshed"];

    var name = "Technical Analysis: BBANDS";
    var data = obj[name];
//            console.log(data);
//            console.log(last_refresh);


    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.slice(0, 10).split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        low.unshift(parseFloat(data[last_refresh]["Real Lower Band"]));
        mid.unshift(parseFloat(data[last_refresh]["Real Middle Band"]));
        up.unshift(parseFloat(data[last_refresh]["Real Upper Band"]));
        last_refresh = last_refresh.slice(0, 10);
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
    }


    var count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            var arr = last_refresh.split("-");
            date.unshift(arr[1] + '/' + arr[2]);
            low.unshift(parseFloat(data[last_refresh]["Real Lower Band"]));
            mid.unshift(parseFloat(data[last_refresh]["Real Middle Band"]));
            up.unshift(parseFloat(data[last_refresh]["Real Upper Band"]));

        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        low.unshift(parseFloat(data[last_refresh]["Real Lower Band"]));
        mid.unshift(parseFloat(data[last_refresh]["Real Middle Band"]));
        up.unshift(parseFloat(data[last_refresh]["Real Upper Band"]));

    }

    return [low, mid, up, date];
}

function extract_info_MACD(obj) {
    var date = [], MACD = [], MACD_Hist = [], MACD_Signal = [];
    var last_refresh = obj["Meta Data"]["3: Last Refreshed"];

    var name = "Technical Analysis: MACD";
    var data = obj[name];
//            console.log(data);
//            console.log(last_refresh);

    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.slice(0, 10).split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        MACD.unshift(parseFloat(data[last_refresh]["MACD"]));
        MACD_Hist.unshift(parseFloat(data[last_refresh]["MACD_Hist"]));
        MACD_Signal.unshift(parseFloat(data[last_refresh]["MACD_Signal"]));
        last_refresh = last_refresh.slice(0, 10);
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
    }


    var count = 180;
    while (count > 0) {
        if (data.hasOwnProperty(last_refresh)) {
            var arr = last_refresh.split("-");
            date.unshift(arr[1] + '/' + arr[2]);
            MACD.unshift(parseFloat(data[last_refresh]["MACD"]));
            MACD_Hist.unshift(parseFloat(data[last_refresh]["MACD_Hist"]));
            MACD_Signal.unshift(parseFloat(data[last_refresh]["MACD_Signal"]));

        }
        last_refresh = new Date(last_refresh);
        last_refresh.setDate(last_refresh.getDate() - 1);
        last_refresh = last_refresh.toISOString().slice(0, 10);
        count--;
    }
    if (data.hasOwnProperty(last_refresh)) {
        var arr = last_refresh.split("-");
        date.unshift(arr[1] + '/' + arr[2]);
        MACD.unshift(parseFloat(data[last_refresh]["MACD"]));
        MACD_Hist.unshift(parseFloat(data[last_refresh]["MACD_Hist"]));
        MACD_Signal.unshift(parseFloat(data[last_refresh]["MACD_Signal"]));

    }

    return [MACD, MACD_Hist, MACD_Signal, date];
}