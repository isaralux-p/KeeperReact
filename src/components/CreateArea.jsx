//---import session---///
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  //create hooks
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpand, setExpand] = useState(false);

  //handle data to note
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //send note back to app.jsx and clear input
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    //if null don't send null back
    event.preventDefault();
  }

  function expanded() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expanded}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />

        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
