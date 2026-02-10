async function downloadSong() {
  const link = document.getElementById("spotifyLink").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (!link.includes("open.spotify.com/track/")) {
    alert("Please enter a valid Spotify track link.");
    return;
  }

  resultDiv.innerHTML = "<p>Fetching track information...</p>";

  try {
    const oembedRes = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(link)}`
    );
    const oembed = await oembedRes.json();

    const query = oembed.title;

    const itunesRes = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=1`
    );
    const itunesData = await itunesRes.json();

    if (!itunesData.results || itunesData.results.length === 0) {
      alert("Preview not available for this track.");
      resultDiv.innerHTML = "";
      return;
    }

    const song = itunesData.results[0];

    const fileName =
      song.trackName
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase() + "-preview.m4a";

    const audioRes = await fetch(song.previewUrl);
    const audioBlob = await audioRes.blob();
    const audioObjectUrl = URL.createObjectURL(audioBlob);

    resultDiv.innerHTML = `
      <div class="result-grid">

        <img
          src="${song.artworkUrl100.replace("100x100", "300x300")}"
          class="album-art"
          alt="Album Art"
        >

        <div class="song-info">
          <h5>${song.trackName}</h5>

          <p><strong>Artist:</strong> ${song.artistName}</p>
          <p><strong>Album:</strong> ${song.collectionName}</p>

          <audio controls>
            <source src="${audioObjectUrl}" type="audio/mp4">
            Your browser does not support the audio element.
          </audio>

          <button
            class="btn btn-warning download-btn w-100"
            onclick="forceDownload('${audioObjectUrl}', '${fileName}')"
          >
            Download 30s Preview
          </button>
        </div>

      </div>
    `;
  } catch (error) {
    console.error(error);
    alert("Error fetching track preview.");
    resultDiv.innerHTML = "";
  }
}

function forceDownload(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("spotifyLink");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      downloadSong();
    }
  });
});
