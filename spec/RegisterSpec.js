var url = "https://citeme.herokuapp.com/register"
var request = require("request");

describe("Home", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
      });
    });
  });
});