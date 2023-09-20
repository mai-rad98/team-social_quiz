const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  
  await page.goto('https://www.memedroid.com/');

  //search input selector 
  const searchInputSelector = '.search-form';
  const searchPhrase = 'winner'; 

  //Wait for the search results page to load
  await page.waitForSelector('.gallery-memes-container', { timeout: 180000 });
  
  // Take a screenshot of the search results page
  await page.screenshot({ path: 'search_results_screenshot.png' });
  
  // function to scrape memes from the search results page
  async function scrapeMemesFromSearchResults() {
    const memeElements = await page.$$('.gallery-memes-container');
  
    const memes = [];
  
    for (const element of memeElements) {
      const memeImage = await element.$eval('.img-responsive', (node) => node.getAttribute('src'));
  
      memes.push({
        image: memeImage,
      });
    }
  
    return memes;
  }
  
  const memeData = await scrapeMemesFromSearchResults();
  

  await browser.close();

  // Print the scraped meme data
  console.log(memeData);
})();



const puppeteer = require('puppeteer'); 

( async()=> {

  //initiate the browser
  const browser = await puppeteer.launch()

  //create a new page with default browser context
  const page = await browser.newPage();

  //go to target website
  await page.goto('https://www.memedroid.com/', { timeout: 180000 })

  //get the html
  //const content = await page.content()
  //console.log(content)

  //getting a node and eteact the text
  const titleNode = await page.$('h1')
  const title = await page.evaluate(el => el.innerText,titleNode)
 //get both the tittle and link elements
  const link = await page.$eval('a',anchor => anchor.getAttribute('href'))

  //log



  //close the broswer and all its pages
  await browser.close()
})()


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
  await page.waitForNavigation({ timeout: 190000 })
  await page.waitForSelector('.gallery-memes-container',{ timeout: 190000 });

  // Take a screenshot of the first meme
  const memeElement = await page.$('.gallery-memes-container');
  await memeElement.screenshot({ path: 'meme.png' });

  // Get the URL of the first meme
  const memeImageUrl = await memeElement.$eval('img', (img) => img.src);
  console.log('Meme Image URL:', memeImageUrl);

  // Close the browser
  await browser.close();
})();




mnmnm

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
  await page.waitForNavigation({ timeout: 190000 })
  await page.waitForSelector('.gallery-memes-container',{ timeout: 190000 });

  // Take a screenshot of the first meme
  const memeElement = await page.$('.gallery-memes-container');
  await memeElement.screenshot({ path: 'meme.png' });

  // Get the URL of the first meme
  const memeImageUrl = await memeElement.$eval('img', (img) => img.src);
  console.log('Meme Image URL:', memeImageUrl);

  // Close the browser
  await browser.close();
})();
