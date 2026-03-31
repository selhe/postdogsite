---
title: "Cenotaph - Perverse Dehumanized Dysfunctions"
description: "listen if u want to die"
genres: ["Brutal Death Metal"]
date: 2025-10-21
author: "sel"
comments: 1
albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/93/05/2e/93052e65-94c3-d1e0-36ac-e733cc13a2df/artwork.jpg/1200x630bb.jpg"
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
