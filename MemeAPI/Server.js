const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:3000' }));

// Serve static files from the 'images' folder
app.use('/images', express.static(__dirname + '/images'));

// Define a route to scrape and save the image
app.get('/scrape', async (req, res) => {
  try {
    // Launch a headless browser
    const browser = await puppeteer.launch({
      timeout: 190000
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the desired URL
    const url = 'https://www.memedroid.com/';
    await page.goto(url);

    // Type "winner" into the search bar and press Enter
    const searchQuery = 'winner';
    await page.type('#search-form-input', searchQuery);
    await page.keyboard.press('Enter');

    // Wait for the results to load
    await page.waitForNavigation({ timeout: 190000 });
    await page.waitForSelector('.gallery-memes-container', { timeout: 190000 });

    // Get the URL of the first meme
    const memeElement = await page.$('.gallery-memes-container');
    const memeImageUrl = await memeElement.$eval('img', (img) => img.src);
    console.log('Meme Image URL:', memeImageUrl);

    // Generate a unique filename for the image
    const timestamp = Date.now();
    const imageName = `image_${timestamp}.png`;
    const imagePath = `images/${imageName}`;

    // Save the image to the 'images' folder
    await memeElement.screenshot({ path: imagePath });

    // Write the URL to a file
    const filePath = 'meme_url.txt';
    fs.writeFileSync(filePath, memeImageUrl);
    console.log('Meme URL written to:', filePath);

    // Close the browser
    await browser.close();

    // Send the image URL as a response
    res.json({ imageUrl: memeImageUrl, imagePath: imageName });
  } catch (error) {
    console.error('Error scraping and saving the image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
