function downloadSong() {
  const link = document.getElementById("spotifyLink").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!link.includes("open.spotify.com/track/")) {
    alert("Please enter a valid Spotify track link.");
    return;
  }

  resultDiv.innerHTML = "<p>Fetching song details...</p>";

  fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(link)}`)
    .then(res => res.json())
    .then(oembed => {
      const title = oembed.title; 
      const searchUrl =
        `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(title)}&type=tracks&limit=1`;

      return fetch(searchUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "bbeaa96819msh82c2bcecd9acd32p1d85e8jsnff67964c6b65",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
        }
      });
    })
    .then(res => res.json())
    .then(data => {
      console.log("SEARCH RESULT:", data);

      const track = data?.tracks?.items?.[0]?.data;
      if (!track) {
        alert("Song not found.");
        resultDiv.innerHTML = "";
        return;
      }

      resultDiv.innerHTML = `
        <img
          src="${track.albumOfTrack.coverArt.sources[0].url}"
          width="180"
          class="img-fluid rounded mb-3"
        >

        <h5>${track.name}</h5>

        <p><strong>Artist:</strong>
          ${track.artists.items.map(a => a.profile.name).join(", ")}
        </p>

        <p><strong>Album:</strong> ${track.albumOfTrack.name}</p>

        <p><strong>Duration:</strong>
          ${Math.floor(track.duration.totalMilliseconds / 60000)}:
          ${Math.floor((track.duration.totalMilliseconds % 60000) / 1000)
            .toString()
            .padStart(2, "0")}
        </p>
      `;
    })
    .catch(err => {
      console.error(err);
      alert("Error fetching song details.");
      resultDiv.innerHTML = "";
    });
}