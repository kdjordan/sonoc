module.exports = {
    chartOptions: {
        chart: {
          id: 'All',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
    },
      series: [
        {
          name: 'CPS',
          data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
        },
      ]
    
}