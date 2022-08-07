import { useState } from "react";

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState("");

  function handleAddSong(e) {
    e.preventDefault();
    addSong(title);
    setTitle("");
  }
  return (
    <form onSubmit={handleAddSong}>
      <label> Add song:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default NewSong;
