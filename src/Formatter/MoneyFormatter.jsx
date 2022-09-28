var SI_SYMBOL = 
[
  " ",
  "K", 
  " Milhões", 
  " Bilhões", 
  " Trilhões", 
  " Quadrilhões", 
  " Quintilhões", 
  " Sextilhões",
  " Septilhões",
  " Octilhões",
  " Nonilhões",
  " Decilhões",
  " Undecilhões",
  " Duodecilhões",
  " Tredecilhões",
  " Quattuordecilhões",
  " Quindecilhões",
  " Sexdecilhões",
  " Septendecilhões",
  " Octodecilhões",
  " Novemdecilhões",
  " Vingintilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Centilhões",
  " Infinito"
];

function MoneyFormatter(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    if(tier == 1) return "R$ " + parseFloat(scaled.toFixed(2)) + suffix;

    // format number and add suffix
    return "R$ " + parseFloat(scaled.toFixed(3)) + suffix;
}

module.exports = MoneyFormatter;