var fs = require('fs');

function main(){
   var file  = "stats.json";
   fs.appendFileSync(file, "Hello world\n");
}
main();