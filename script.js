// Liste des pistes audio
const playlist = [
  { title: "Worship 1 13 minutes", file: "audio/Worship1_13_Minutes.opus" },
  { title: "Worship 2 27 minutes", file: "audio/Worship2_27_Minutes.opus" },
  { title: "Worship 3 40 minutes", file: "audio/Worship3_40_Minutes.opus" },
];

// Générer les éléments audio dans la page
const container = document.getElementById("playlist-container");

playlist.forEach(track => {
  const div = document.createElement("div");
  div.className = "track";

  const title = document.createElement("p");
  title.textContent = track.title;

  const audio = document.createElement("audio");
  audio.controls = true;

  const source = document.createElement("source");
  source.src = track.file;
  source.type = "audio/mpeg";

  audio.appendChild(source);
  div.appendChild(title);
  div.appendChild(audio);
  container.appendChild(div);
});
