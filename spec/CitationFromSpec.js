var url = "https://citeme.herokuapp.com/citationForm"
var request = require("request");

describe("Citation Form", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
      });
    });
  });
});