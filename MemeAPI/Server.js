const express = require('express');
const app = express();
const port = 8080;

// Import the scrapeMemes function from scrape.js
/* const { scrapeMemes } = require('./Scrape');

app.get('/api/scrape', async (req, res) => {
  try {
    const urlToScrape = 'https://www.memedroid.com/';

    // Call the scrapeMemes function to scrape the meme image URL
    const memeImageUrl = await scrapeMemes(urlToScrape);

    // Return the scraped meme image URL as a JSON response
    res.json({ memeImageUrl });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while scraping memes' });
  }
}); */

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
