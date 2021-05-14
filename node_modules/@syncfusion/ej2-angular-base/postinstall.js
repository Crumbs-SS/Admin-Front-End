var fs = require("fs");

var sourceFile = fs.readFileSync("../ej2-base/src/base.d.ts", "utf8");

fs.writeFileSync("../ej2-base/src/base.d.ts", sourceFile.replace('subscribe?','subscribe'), "utf8");
