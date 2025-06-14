const BaseUrl = import.meta.env.PROD
  ? "https://<xcloneweb>.onrender.com" // replace with your actual Render backend URL
  : "http://localhost:5000";


export default BaseUrl;