var fs = require('fs');

var obj = {
    "first_name": "David",
    "last_name":"Sahakyan",
    "age": 13,
    "tumo_student": true,
}

var obj_str = JSON.stringify(obj);

function main() {
    fs.writeFileSync("obj.json", obj_str);
}

main();