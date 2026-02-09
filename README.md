# Spotify Track Explorer

Spotify Track Explorer is a frontend web application that allows users to paste a Spotify track link and view detailed song information such as title, artist, album, duration, and related metadata using public APIs.

This project is built using **HTML, CSS, JavaScript**, and **RapidAPI**, and works completely in the browser.

---

## 🚀 Features

- Paste a Spotify track link
- Fetch and display:
  - Song title
  - Artist name(s)
  - Album name
  - Album cover image
  - Track duration
- Clean and responsive UI
- Fully frontend-based (no backend required)

---

## 🧑‍💻 How to Use

1. Open the website
2. Paste a Spotify **track link**  
   Example: https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC
3. Click the **Fetch Song** button
4. Song details will be displayed on the page

---

## 🛠️ How This Project Is Built

### Frontend Technologies
- **HTML** – structure of the web page
- **CSS** – styling and layout
- **JavaScript** – API integration, validation, and dynamic updates

### APIs Used

#### Spotify oEmbed API (Official)
- Used to extract basic metadata from a Spotify track link
- Does not require authentication
- Helps convert a Spotify URL into readable song information

Example: https://open.spotify.com/oembed?url=SPOTIFY_TRACK_URL

#### Spotify23 API (via RapidAPI)
- Used to fetch detailed track data and lyrics-related information
- Integrated using JavaScript `fetch()`
- API requests are made directly from the browser

---

## ❓ Why This Project Does Not Download Songs

Spotify does not allow audio downloads through any public or official API.

Reasons:
- Many unofficial downloader APIs are unstable or blocked
- Spotify does not expose direct audio (MP3/stream) URLs

Instead, this project focuses on **legal and safe metadata extraction** to demonstrate API integration and frontend development skills.

---

## 📚 What This Project Demonstrates

- Third-party API integration
- Asynchronous JavaScript using `fetch()`
- Input validation and error handling
- Dynamic DOM manipulation
- Real-world API limitations and debugging

---

## ⚠️ Disclaimer

This project is created **for educational purposes only**.  
It does not provide or promote audio downloading from Spotify.

---

## 👤 Author

**Arjun**

---

## ⭐ Acknowledgements

- Spotify
- RapidAPI
