var PNG = require('./png-node');

PNG.decode('images/filter.png', function(pixels) {
  console.log(pixels);
});
