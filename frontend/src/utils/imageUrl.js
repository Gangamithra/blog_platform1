const BASE_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL.replace("/api", "")
  : "http://localhost:5001";

export const getImageUrl = (filename) => {
  if (!filename) return null;
  // Cloudinary or any full URL — return as-is
  if (filename.startsWith("http")) return filename;
  // local dev fallback
  return `${BASE_URL}/uploads/${filename}`;
};