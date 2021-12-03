const core = require('@actions/core');
const fs = require('fs'); 

try{

    const fileToRead = core.getInput('name-of-file');
    
    fs.readFile(fileToRead, (err, data) => {

        if(err){
            core.setOutput('final-result', 'There was an error');  
        }

        core.setOutput('final-result', data); 

    });

} catch (error) {
    core.setFailed(error.message);
}