$(document).ready(function(){
    $(".closeIcon").click(function(){
                 $("#sidebar").toggleClass("active");
                 $(".toggle-btn").toggle();
       });

    $(".toggle-btn").click(function(){
        $(this).toggle();
    });

    
});


function toggleMenu()
{
    document.getElementById("sidebar").classList.toggle('active');
    
}

var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    }
});


/////////////////////////////

var lchart = c3.generate({
    bindto: '#lchart',
    data: {
      columns: [
        ['Products sold', 30, 200, 100, 50],
        ['Total views', 50, 100, 80, 130],
      ],
      order: false,
      type: 'area-spline',

    },


    axis: {
      x: {
        type: 'category',
        categories: ["jan-2021", "feb-2021", "mar-2021", "April-2021"],
        tick: {

          format: '%b%Y'
        }
      }
    }
  });

  //  pie chart1
  var osChart = c3.generate({
    bindto: '#DonutChart',
    data: {
      columns: [
        ['France', 70, 250, 300, 250, 250, 250, 350, 350, 100],
        ['Japan', 50, 220, 180, 0, 250, 300, 0, 300, 100],
        ['Italy', 10, 0, 200, 300, 30, 10, 480, 160, 100],
        ['Canada', 10, 20, 120, 300, 100, 250, 30, 120, 500]
      ],
      order: false,
      type: 'donut',

    },


  });
  osChart.data.colors({
    France: '#e3edfd',
    Japan: '#55d8fe',
    Italy: '#ffda83',
    Canada: '#a3a0fb'

  });