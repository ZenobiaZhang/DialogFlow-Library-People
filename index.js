const rp = require('request-promise-native');
const people_url = "https://api.devhub.virginia.edu/v1/library/people";
function test(agent, requestBody, url) {
    return rp.get(url).then(jsonBody =>{
        var body = JSON.parse(jsonBody);
        console.log(body);
        var docArray = body.response.docs;
        //ask "who is technical person", more than 20 return
        //find it according to jobTitle, return "body"(what they do)
        //don't just return the first 20? Well yes you can bc they're most relevant
        if(docArray.length>1) 
            agent.add("There're at least"+docArray.length+"people who capable. Here're the most relevant ones:\n");
        var result = "";
        var num = 1;
        for(var i = 0; i < docArray.length; i++) {
            result = "" + num + ". " + docArray[i].displayName;
            result += ": " + docArray[i].jobTitle + " at " + docArray[i].officeLocation + "\n";
            result += "Email: " + docArray[i].email + "\n";
            agent.add(result);
            num++;
            promiseRequest();//what does this do???
        }
        return Promise.resolve(agent);
    });
}

function promiseRequest() {
    console.log("hello");//what does this do???
}

module.exports = {
    test: test
}
