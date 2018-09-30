module.exports = function getZerosCount(number) {
   
  let count = 0;
  let del = 5;

  while (number > del) {
      count += Math.floor(number / del);      
      del *= 5;   
  }
  return count;
}