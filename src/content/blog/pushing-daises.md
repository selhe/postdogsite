---
title: "julie - Pushing Daises"
description: "tushy sarah and macy + julie1 + julie2 + julie3"
genres: ["Shoegaze","Grungegaze","Noise Rock","Post Punk"]
date: 2025-10-21
author: "postdog"
comments: 1
albumCover: "https://e.snmc.io/i/600/w/0d93c492db2b84c9dcf669c7d42bca12/9412672/julie-pushing-daisies-Cover-Art.jpg"
layout: "../../layouts/BlogLayout.astro"
---

# My First Post
thisis really cool
---

## Comments

<div id="comment-section"></div>

<form id="comment-form">
  <textarea placeholder="Leave a comment..." required></textarea>
  <button type="submit">Post</button>
</form>

<script>
  // Simple local comment simulation (no backend)
  const form = document.getElementById("comment-form");
  const section = document.getElementById("comment-section");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = form.querySelector("textarea").value.trim();
    if (text) {
      const p = document.createElement("p");
      p.textContent = text;
      section.appendChild(p);
      form.reset();
    }
  });
</script>
