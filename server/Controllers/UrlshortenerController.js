import URL from "../Models/UrlModel.js";

// Generate a random alphanumeric string for short URLs
export function generateShortUrl() {
  const length = 6;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}


export const Shortener = async (req, res) => {
  try {
    const { originalUrl, userId } = req.body;

    // Generate a short URL
    const shortUrl = generateShortUrl();

    // Create a new URL document
    const newUrl = new URL({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      user: userId,
    });

    // Save the new URL document
    const savedUrl = await newUrl.save();

    res.status(201).json(savedUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const RetrieveUrl = async (req, res) => {
  try {

    const urls = await URL.find({});
    console.log(urls);
    res.json(urls);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};