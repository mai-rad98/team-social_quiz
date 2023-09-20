const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the desired URL
  const url = 'https://www.memedroid.com/';
  await page.goto(url);

  // Type "winner" into the search bar and press Enter
  const searchQuery = 'winner';
  await page.type('#search-form-input', searchQuery);
  await page.keyboard.press('Enter');

  // Wait for the results to load (you might need to adjust the selector and timing)
  await page.waitForNavigation({ timeout: 190000 });
  await page.waitForSelector('.gallery-memes-container', { timeout: 190000 });

  // Take a screenshot of the first meme
  const memeElement = await page.$('.gallery-memes-container');
  await memeElement.screenshot({ path: 'meme.png' });

  // Get the URL of the first meme
  const memeImageUrl = await memeElement.$eval('img', (img) => img.src);
  console.log('Meme Image URL:', memeImageUrl);

  // Close the browser
  await browser.close();
})();
