// const HTTPRequestMethod = {
//   GET: "GET",
//   POST: "POST",
// };

async function fetchJSON(url: string, method: "GET" | "POST") {
  const response = await fetch(url, { method });
  return response.json();
}

fetchJSON("https://example.com/", "GET").then((data) => {
  // ...
});
