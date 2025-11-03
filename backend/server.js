import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ Example route: Fetch data from a table
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Add Volunteer
app.post("/user", async (req, res) => {
  const { name, email, mobile_number, state, category } = req.body;
  const { data, error } = await supabase.from("users").insert([{ name, email, mobile_number, state, category }]);
  if (error) return res.status(400).json({ error: error?.message });
  res.json(data);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
