# spotify-track-preview

Paste a Spotify track link to view song details and download the official 30-second preview.

---

## Overview

This web application allows users to paste a Spotify track URL, retrieve song metadata, and download a legally available 30-second audio preview.  
The application uses public music APIs and runs entirely on the frontend.

---

## Features

- Accepts Spotify track URLs
- Displays:
  - Track name
  - Artist
  - Album artwork
- Plays the official 30-second audio preview
- Downloads the preview audio with a clean filename
- Dark, media-player-style user interface

---

## APIs Used

### Spotify oEmbed API
**Endpoint:** `https://open.spotify.com/oembed`

**Usage:**
- Extracts track title and artist from a Spotify URL

**Reason for use:**
- Official Spotify endpoint
- No authentication required
- Reliable way to identify tracks from links
- Does not provide audio content

---

### iTunes Search API (Apple Music)
**Endpoint:** `https://itunes.apple.com/search`

**Usage:**
- Searches for the identified track in Apple Music’s catalog
- Retrieves the official 30-second audio preview

**Reason for use:**
- Public and legal
- Provides downloadable preview audio
- Stable and widely supported
- No API key required

---

## How It Works

1. The user pastes a Spotify track link
2. The Spotify oEmbed API extracts the track metadata
3. The extracted title is searched using the iTunes Search API
4. If a preview is available:
   - The audio preview is played in the browser
   - The preview can be downloaded as an `.m4a` file
5. The preview audio is fetched as a Blob to ensure a proper filename during download

---

## Download Format

- Preview audio is downloaded in **M4A format**
- This is the original format provided by the iTunes API
- Client-side audio transcoding is not performed

---

## Screenshots

### Main Interface
![Main Interface](screenshot-home.png)

### Track Preview
![Track Preview](screenshot-track-preview.png)


## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- Fetch API
- Blob and Object URL APIs

---

## Limitations

- Full-length song downloads are not supported
- Preview availability depends on the source API
- Audio previews are limited to 30 seconds

---

## Usage

1. Open the application
2. Paste a Spotify track link
3. Click **Analyze**
4. Play or download the preview if available

---

## License

This project is provided for educational and demonstration purposes only.
