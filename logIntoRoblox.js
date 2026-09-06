const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		headless: false, // more reliable for login flows
		defaultViewport: null,
		userDataDir: './profile'
	});

	const page = await browser.newPage();

	await page.goto('https://www.roblox.com/home', {
		waitUntil: 'networkidle2',
	});

	const loggedIn = await page.evaluate(() => {
		return !!document.querySelector('a[href*="/users/"]');
	});

	console.log('Logged in:', loggedIn);

	// Wait 5 seconds
	await new Promise(r => setTimeout(r, 1115000));

	await browser.close();
})();
