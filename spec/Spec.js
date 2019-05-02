describe('Login Page', function () {
  it('should let you log in', function () {
    //our tests go here
	browser.url('https://citeme.herokuapp.com/');
    browser.setValue('input[name="email"]', 'jennifer.palese@colorado.edu');
    browser.setValue('input[name="password"]', '123abc');
	browser.click('.button=Login');
	
	const pageUrl = browser.getUrl();
    assert.equal(pageUrl, 'https://citeme.herokuapp.com/home');
  });
  
  it('No login', function () {
	browser.url('https://citeme.herokuapp.com/');
    browser.setValue('input[name="email"]', 'jennifer.palese@colorado.edu');
    browser.setValue('input[name="password"]', '123abc');
	browser.click('.button=Sign In');
	
	const pageUrl = browser.getUrl();
	assert.equal(pageUrl, 'https://citeme.herokuapp.com/');
  });
});