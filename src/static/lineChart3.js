module.exports = {
    chartOptions: {
        chart: {
          id: 'ABC Voip',
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
          data: [10, 13, 45, 98, 49, 99, 100, 76, 120, 125, 130, 110],
        },
      ]
    
}