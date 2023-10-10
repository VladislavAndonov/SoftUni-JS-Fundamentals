function gramophone(band, album, song) {
  let songDuration = (album.length * band.length * song.length) / 2;
  let rotationsCount = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotationsCount} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
