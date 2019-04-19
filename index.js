//Link rp to; also include link; what it does

//Make HTTP request
const rp = require('request-promise-native');
function test(agent, requestBody, url) {
var hk = {
        url: 'https://api.devhub.virginia.edu/v1/library/people/',
        headers: { 'User-Agent': 'Request-Promise'},JSON: true
};
//people is the response from the request
return rp(hk).then(function (people) {
        people = JSON.parse(people);
        //queryResult will make sense of the intents and break it into different entity parameters
        //this line map synonyms to their main entities, for example: location/find/where->where
        var what_they_ask = requestBody.queryResult.parameters.people_service;
        var talent = requestBody.queryResult.parameters.jobtitle;
        for (var i=0; i<people.length; i++) {
                if (talent == people[i].jobTitle) {
                        if (what_they_ask == "who") {
                                //map entities to answer
                                agent.add(people[i].displayName);
                        
                        }
                
                }
        
        }
        //close the request
        return Promise.resolve(agent);
});
}

function promiseRequest() {
    console.log("hello");
}

module.exports = {
    test: test
}
