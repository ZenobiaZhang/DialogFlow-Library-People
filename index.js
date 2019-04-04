// const rp = require('request-promise-native');
// const people_url = "https://api.devhub.virginia.edu/v1/library/people";
// function test(agent) {
//     return rp.get(people_url).then(jsonBody =>{
//         var body = JSON.parse(jsonBody);
//         console.log(body);
        
//         var docArray = body.response.docs;
//     });
// }
function test(agent, requestBody, url) {
    return rp.get(url).then(jsonBody =>{
        var body = JSON.parse(jsonBody);
        console.log(body);
        var what_they_ask = requestBody.queryResult.parameters.people_service;
        console.log(what_they_ask);
        var talent = requestBody.queryResult.parameters.jobtitle.replace(/ /g, '+');
        for (var i=0; i<body.length; i++) {
            if (body[i].jobTitle == talent) {
                if (what_they_ask == "who") {
                    result = "Name: " + body[i].displayName + "\n";
                    result += "Email: "+body[i].email+"\n";
                    result += "About: "+body[i].body+"\n"; 
                    agent.add(result);
                }
                if (what_they_ask == "where") {
                    result = "Name: "+body[i].displayName+"\n";
                    result += "Location: "+body[i].officeLocation+"\n";
                    agent.add(result);
                }
            }
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
