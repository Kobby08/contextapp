import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import NewSong from "./NewSong";

const Songlist = () => {
  const [songs, setSongs] = useState([
    { title: "Amen amen", id: 1 },
    { title: "Monkey talk", id: 2 },
    { title: "Hello dear friend", id: 3 },
  ]);
  function addSong(title) {
    setSongs([...songs, { title: title, id: uuidv1() }]);
  }
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSong addSong={addSong} />
    </div>
  );
};

export default Songlist;
