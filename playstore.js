import gplay from "google-play-scraper";

const query = process.argv[2] || "";

async function main() {
  try {
    const results = await gplay.search({
      term: query,
      num: 250,
      lang: "en",
      country: "nl",
      fullDetail: true,
      price: "all",
      throttle: 10
    });

    //Only print the final JSON result to stdout
    process.stdout.write(JSON.stringify(results));

  } catch (err) {
    //Send errors to stderr so Python doesn't see them as data
    console.error("Error:", err);
    process.exit(1);
  }
}

main();