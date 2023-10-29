function song(arr) {
  let songsCount = arr.shift();
  let typeList = arr.pop();
  let songs = [];
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  for (let i = 0; i < songsCount; i++) {
    let [type, name, time] = arr[i].split("_");
    let song = songs.push(new Song(type, name, time));
  }
  if (typeList == "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let songsOnList = songs.filter((i) => i.type === typeList);
    songsOnList.forEach((i) => console.log(i.name));
  }
}
song([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "all",
]);
