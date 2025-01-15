import dotenv from "dotenv";
import adapter from "@sveltejs/adapter-auto";

dotenv.config();

const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;
