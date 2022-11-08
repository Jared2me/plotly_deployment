
//var trace = {
  //  labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
  //  "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  //  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  //  type: 'pie'
  // };
  // var data = [trace];
  // var layout = {
  //  title: "'Pie' Chart",
  // };
  // Plotly.newPlot("plotArea", data, layout);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
        return num > 1;
  });
  
console.log(larger);