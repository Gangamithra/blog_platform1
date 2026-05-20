const BASE_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL.replace("/api", "")
  : "http://localhost:5001";

export const getImageUrl = (filename) => {
  if (!filename) return null;
  // if it already contains cloudinary or is a full URL — return as-is
  if (filename.includes("cloudinary.com")) return filename;
  if (filename.startsWith("http")) return filename;
  // local dev fallback
  return `${BASE_URL}/uploads/${filename}`;
};

// Strip HTML tags and return plain text
export const stripHtml = (html) => {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
};