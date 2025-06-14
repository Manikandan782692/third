const BaseUrl = import.meta.env.PROD
  ? "https://manikandan782692.github.io" // ✅ Replace with your actual deployed backend URL (Heroku/Render)
  : "http://localhost:5000";

export default BaseUrl;