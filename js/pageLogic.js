/*
Código feito para o desafio front-end para a ferramenta Buzzmonitor Admin
Autor: Mateus Arruda de Medeiros
Seção: Lógica de alguns elementos da página.
*/
function checaUnlimitedPerMonth(){
  var checkbox = document.getElementById("posts_collected");

  if (checkbox.checked == false) {
    document.getElementById("input_chart2").classList.toggle('disabled');

  }
}

$("#posts_collected").change(function(){
  if(this.checked) {
    document.getElementById("input_chart2").disabled=false;

  }else {
    document.getElementById("input_chart2").disabled=true;
  }
});



function checaUnlimited(){
  var checkbox = document.getElementById("switch_projects_collected");
  if(checkbox.checked == false) {
    //$(this).prop("checked", returnVal);
    if ($('#input_chart1').val()>5) {
      alert("Only less or equals to 5");
      return 5;
    }
  }
  return parseInt($('#input_chart1').val());
}
