var fs = require('fs');
var css;

fs.readFile('./src/build/css/style.min.css', function (err, data) {
  if (err) throw err;
  css = data.toString();
});

fs.readFile('./src/build/js/all.js', function (err, data) {
  if (err) throw err;
  var js_content = data.toString();
  
  var result = js_content.replace(/CSS STRING/g, css);
  fs.writeFile('./src/build/js/all.js', result, 'utf8', function (err) {
     if (err) throw err;
  });
});
