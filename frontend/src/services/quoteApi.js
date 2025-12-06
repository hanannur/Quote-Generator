export const API_URL = "https://zenquotes.io/api/quotes";

export async function fetchQuotes() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data; // array of quotes
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}
