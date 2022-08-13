import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C3dq9bh5ceLtOh-umkFTmpiVVmNlnu3DxplI1wwjwY0",
  },
});
