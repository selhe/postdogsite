---
title: "julie - my anti-aircraft friend"
description: "the theme is i dont know"
genres: ["Shoegaze", "Grungegaze","Noise Rock"]
date: 2025-10-21
author: "postdog"
comments: 9
albumCover: "https://st.diskunion.net/images/jacket/1008911008.jpg"
layout: "../../layouts/PostLayout.astro"
---

# this is for the zoomers

<b>kitchy</b>: I love how pitchfork described my anti aircrafr: On its debut LP, this trio of L.A. 20-somethings digs into au courant grunge and shoegaze influences to come up with fresh, compelling alt-rock epics rendered in miniature.
in 2019, every member of julie was in high school

<b>w1ckedR4zor</b>: they are still in highschool

<b>taytaillimani</b>: I LOVE TOMATOES

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
