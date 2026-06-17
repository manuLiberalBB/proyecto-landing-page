import express from "express";
import "dotenv/config";
import { loginUser, registerUser, verifyAuthToken, getProfile } from "./src/controllers/userControllers.js";
import { getProducts } from "./src/controllers/contentfulControllers.js";

import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.post("/api/login", (req, res) => {
  loginUser(req, res);
});
app.post("/api/register", (req, res) => {
  registerUser(req, res);
});
app.get("/api/profile", (req, res) => {
  getProfile(req, res);
});
app.get("/api/productos", async (req, res) => {
  await getProducts(req, res);
});
app.get("/api/verify-auth-token", async (req, res) => {
 await verifyAuthToken(req, res);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
