const fsOperation = require('fs');
result = fsOperation.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (!err)
        console.log(data);
    else
        console.error(err.message)
});