import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "jeruzalema", id: 1 },
    { title: "reet peteet", id: 2 },
    { title: "jingle bells", id: 3 }
  ]);
  // const addSong = () =>{
  //   setSongs([...songs, {title: 'new song', id: 4}])
  // }
  // running into problems for 2 reasons...

  // const addSong = () =>{
  // setSongs([...songs, {title: 'new song', id: songs.length + 1}])}
  // why +1? still 1 problem, other solution using a UUID (lazy guys)

  //   const addSong = () =>{
  //   setSongs([...songs, {title: 'new song', id: uuid()}])
  // }
  // running into problems 1 problem...

  //go to NewSongForm component

  const addSong = title => {
    // setSongs([...songs, { title: "new song", id: uuid() }]);
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}> {song.title}</li>;
        })}
      </ul>

      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default SongList;
