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