const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err){
        throw error;
    }
    console.log("Folder created");
    
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world", (err) => {
    if(err){
        throw error;
    }
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "\n\nHello again", (err) => {
        if(err){
            throw error;
        }
        
    }); 
});


fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    console.log(`${data} <== data from hello.txt file \n\n`);
    
})
