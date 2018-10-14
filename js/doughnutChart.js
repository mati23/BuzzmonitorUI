var context1 = $('#doughnut-chart1');
var context2 = document.getElementById("doughnut-chart2");
var context_month_usage = $('#chart_month_usage');
var context_month_line = $('#chart_month_line');

var chart1 = new Chart(context1, {
    type: 'doughnut',
    data: {

      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#2F8EE3", "#3FA745","#383C42"],
          data: [100,100,1000]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

function atualizaChart1(old_chart1){

  colors = ["#FBC21A", "#3FA745", "#aa00ff", "#00695c", "#388e3c","#ef6c00","#37474f","#ad1457", "#4527a0","#6a1b9a"]
  old_chart1.destroy();
  var new_quota =checaUnlimited(); //parseInt($('#input_chart1').val());
  var vector = [];
  for (var i = 0; i < new_quota; i++) {
    vector[i] = 100;
  }
  var chart1 = new Chart(context1, {
      type: 'doughnut',
      data: {

        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: colors,
            data: vector
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });

}

var chart2 = new Chart(context2, {
    type: 'doughnut',
    data: {

      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#6C747C"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

function atualizaChart2(old_chart2) {

  old_chart2.destroy();
  var new_quota = parseFloat($('#input_chart2').val());
  var chart2 = new Chart(document.getElementById("doughnut-chart2"), {
      type: 'doughnut',
      data: {

        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#D4384A", "#3BB226","#31373F","#6C747C","#6C747C","#6C747C","#6C747C","#6C747C","#6C747C","#6C747C","#6C747C","#6C747C"],
            data: [new_quota,new_quota-(new_quota/2),new_quota-(new_quota/2),new_quota,new_quota,new_quota,new_quota,new_quota,new_quota,new_quota,new_quota,new_quota]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });

}

new Chart(document.getElementById("doughnut-chart3"), {
    type: 'doughnut',
    data: {

      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#6C747C"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

new Chart(document.getElementById("doughnut-chart4"), {
    type: 'doughnut',
    data: {

      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#6C747C"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


var data = {

  labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
  datasets: [{
      data: [86,114,106,106,107,111,133,221,783,2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [282,350,411,502,635,809,947,1402,3700,5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }
  ]
}
var month_usage = new Chart(context_month_usage, {
  type: 'doughnut',
  data: {

    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#2F8EE3", "#3FA745","#383C42"],
        data: [100,100,1000]
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

var extras_chart_line = new Chart(context_month_line, {
  type: 'line',
  data:  data,
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});

$('#button_addExtra').click(function() {

    var newDataset = {
        label: $('#extra_date').val(),
        backgroundColor: 'rgba(99, 255, 132, 0.2)',
        borderColor: 'rgba(99, 255, 132, 1)',
        borderWidth: 1,
        fill: false,
        data: [null, null,  1000, 2000, 2500, 2600,5000],
    }
    data.datasets.push(newDataset);
    extras_chart_line.update();
    alert($('#extra_date').val() + " Adicionado");
});
