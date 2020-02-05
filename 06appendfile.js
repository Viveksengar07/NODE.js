var fs = require('fs');
fs.appendFile('06a.html','Welcome meghna!', function(err) {
  if(err) throw err;
  console.log('Saved');
});