module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date && !isNaN(date)) {

    const zima = 2;
    const vesna = 5;
    const leto = 8;
    const ocenb = 11;

    if (date.getMonth() >= zima && date.getMonth() < vesna) {
      return 'spring';
    } else if (date.getMonth() >= vesna && date.getMonth() < leto) {
      return 'summer';
    } else if (date.getMonth() >= leto && date.getMonth() < ocenb) {
      return 'autumn';
    } else return 'winter';
  } else throw new Error();



};