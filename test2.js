var pChart = echarts.init(document.getElementById('hisprice'));
showPrice();
function showPrice() {
	var data =[${pdata}];
	var beginTime =${pbeginTime};
	var picdata =[${picdata}];
	var dt = [];
	for (var i = 0; i < data.length; i++) {
		var d = new Date(beginTime);
		d.setDate(d.getDate() + i);
		dt.push(d.toLocaleDateString());
	}

// 指定图表的配置项和数据
	var option = {

		tooltip: {
			enterable: true,
			trigger: 'axis',
			formatter: function (params) {

				return params[0].axisValue + "<br/>" + params[0].data;
			},
			axisPointer: {
				animation: false
			}
		},
		legend: {
			data: ['页面价', '到手价'],
			selected: {
				'页面价': true,
				'到手价': true

			}

		},
		xAxis: {
			data: dt,
			splitArea: { show: false },
			boundaryGap: false,
			splitLine: {
				show: true,

			},
			axisLabel: {

				interval: parseInt((data.length) / 10),
				formatter: function (value) {

					return value.substring(5);
				}
			},
		},
		yAxis: {
			splitArea: { show: false },
			splitLine: {
				show: true,

			}
		},
		series: [{
			name: '页面价',
			type: 'line',
			data: data,
			showSymbol: false,
			hoverAnimation: false,
			markPoint: {
				symbol: 'pin',

				data: [
					{ type: 'max', name: '最大值' },
					{ type: 'min', name: '最小值' }
				]
			},
			markLine: {
				data: [
					{ type: 'average', name: '平均值' }
				]
			}
		},
			{
				name: '到手价',
				type: 'line',
				data: picdata,
				showSymbol: false,
				hoverAnimation: false,
				markPoint: {
					symbol: 'pin',

					data: [
						{ type: 'max', name: '最大值' },
						{ type: 'min', name: '最小值' }
					]
				},
				markLine: {
					data: [
						{ type: 'average', name: '平均值' }
					]
				}
			}
		]
	};


	pChart.setOption(option);
};