var SI_SYMBOL = 
[
  " ",
  "K", 
  "M", 
  "B", 
  "T", 
  "Qua", 
  "Quin", 
  "S",
  "Sep",
  "O",
  "N",
  "D",
  "U",
  "Duo",
  "Tre",
  "Quat",
  "Quind",
  "Sexdec",
  "Septen",
  "Octo",
  "Novem",
  "Vin",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Cen",
  "Inf"
];

function BitcoinFormatter(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number.toFixed(4);

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    if(tier == 1) return parseFloat(scaled.toFixed(2)) + suffix;

    // format number and add suffix
    return parseFloat(scaled.toFixed(2)) + suffix;
}

module.exports = BitcoinFormatter;