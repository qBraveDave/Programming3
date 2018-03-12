var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();