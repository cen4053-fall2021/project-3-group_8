const core = require('@actions/core');
const fs = require('fs'); 

try{

    const fileToRead = core.getInput('name-of-file');
    
    fs.readFile(fileToRead, "utf8", (err, data) => {

        if(err){
            core.setOutput('final-result', 'There was an error');  
        }

        let stringArray = data.split(' '); 
        let finalResult = (parseInt(stringArray[0]) + parseInt(stringArray[1])); 
        core.setOutput('final-result', finalResult); 

    });

} catch (error) {
    core.setFailed(error.message);
}