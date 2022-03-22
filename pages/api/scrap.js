import puppeteer from "puppeteer";
import cloudinary from "cloudinary";

export default async function (req, res) {
  //   console.log(req);
  if (req.method == "POST") {
    const { url, name } = req.body;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.screenshot({ path: `${name}.png`, fullPage: true });

    await browser.close();

    try {
      cloudinary.v2.uploader.upload(`${name}.png`, function (error, result) {
        // console.log(result);
        return res.status(201).json({ url: result.url, name: result.name });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
