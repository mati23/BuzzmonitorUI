var context1 = $('#doughnut-chart1');
var context2 = document.getElementById("doughnut-chart2");
var context_month_usage = $('#chart_month_usage');

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
