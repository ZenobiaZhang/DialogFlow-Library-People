//Link rp to 
//also include link
//what it does
const rp = require('request-promise-native');
function test(agent, requestBody, url) {
var hk = {
        url: 'https://api.devhub.virginia.edu/v1/library/people/',
        headers: { 'User-Agent': 'Request-Promise'},JSON: true
};
return rp(hk).then(function (people) {
        people = JSON.parse(people);
        var what_they_ask = requestBody.queryResult.parameters.people_service;
        var talent = requestBody.queryResult.parameters.jobtitle;
        for (var i=0; i<people.length; i++) {
                if (talent == people[i].jobTitle) {
                        if (what_they_ask == "who") {
                                agent.add(people[i].displayName);
                        
                        }
                
                }
        
        }
        return Promise.resolve(agent);
});
}

function promiseRequest() {
    console.log("hello");
}

module.exports = {
    test: test
}
