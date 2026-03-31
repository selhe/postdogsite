---
title: "Mei Semones - Animaru"
description: "a rat with fatt butt"
#this isnt jazz :P plw eodont put it in jazz ill be really sad
genres: ["Bossa Nova","Indie Folk","Jazz Pop"]
date: 2025-10-21
author: "postdog"
comments: 1
albumCover: "https://f4.bcbits.com/img/a3543886199_14.jpg"
---

# clown music
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
