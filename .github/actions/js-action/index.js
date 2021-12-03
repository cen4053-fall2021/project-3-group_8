const core = require('@actions/core');
const github = require('@actions/github');

try{

    let reader = new FileReader(); 
    const fileToRead = core.getInput('name-of-file');
    reader.readAsText(fileToRead); 

    reader.onload = () => {
        core.setOutput("final-result", reader.result);
    };

    reader.onerror = () => {
        core.setOutput("final-result", reader.error);
    };

} catch (error) {
    core.setFailed(error.message);
}