const rp = require('request-promise-native');
const people_url = 'https://api.devhub.virginia.edu/v1/library/people';

module.exports = {
    test: function(agent, requestBody){
        return rp.get(people_url).then(jsonBody => {
            var body = JSON.Parse(jsonBody);
            //if(requestBody.queryResult.parameters.people_service == "email") console.log("email")
            let output = agent.add("people is developing");
            return Promise.resolve(output);
        });
    }
}
