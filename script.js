// Liste des pistes audio (vérifie que les noms de fichiers sont en minuscules dans le dossier audio/)
const playlist = [
  { title: "Worship 1 - 13 minutes", file: "audio/worship1_13_minutes.opus" },
  { title: "Worship 2 - 27 minutes", file: "audio/worship2_27_minutes.opus" },
  { title: "Worship 3 - 40 minutes", file: "audio/worship3_40_minutes.opus" },
];

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
  source.type = "audio/ogg; codecs=opus"; // 🔥 Corrigé ici

  audio.appendChild(source);
  div.appendChild(title);
  div.appendChild(audio);
  container.appendChild(div);
});
