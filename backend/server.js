import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// get all stories
app.get("/stories", async (req, res) => {
  const { data, error } = await supabase.from("stories").select("*").eq("is_listed", true);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// get all events
app.get("/events", async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// get all social posts
app.get("/social_posts", async (req, res) => {
  const { data, error } = await supabase.from("social_posts").select("*");

  if (error) return res.status(400).json({ error: error.message });

  const formatted = data.map(story => ({
    ...story,
    readable_date: new Date(story.created_at).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  }));


  res.json(formatted);
});


// get all media
app.get("/media", async (req, res) => {
  const { data, error } = await supabase.from("media").select("*").eq("is_listed", true);

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});


// get all pledges
app.get("/pledges", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*").eq("category", 'pledge'); ;

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});


// get pledge count by state
app.get("/pledges/state_summary", async (req, res) => {
  const { data, error } = await supabase.rpc("get_pledges_by_state");

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});


// get featured media
app.get("/featured_media", async (req, res) => {
  const { data, error } = await supabase.from("media").select("*").eq("is_featured", true); ;

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});


// get featured story
app.get("/featured_stories", async (req, res) => {
  const { data, error } = await supabase.from("stories").select("*").eq("is_featured", true); ;

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Add Volunteer, Supporter, worker, pledge
app.post("/user", async (req, res) => {
  const { name, email, mobile_number, state, category, pledge } = req.body;
  const { data, error } = await supabase.from("users").insert([{ name, email, mobile_number, state, category, pledge }]);
  if (error) return res.status(400).json({ error: error?.message });
  res.json(data);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
