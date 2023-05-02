import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsArchive } from 'react-icons/bs';
import { getNote, deleteNote as apiDeleteNote, archiveNote as apiArchiveNote } from '../utils/api';

const DetailNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    async function fetchNote() {
      const { error, data } = await getNote(id);

      if (!error) {
        setNote(data);
      }
    }

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await apiDeleteNote(id);
    if (!error) {
      navigate('/');
    }
  };

  const handleArchive = async () => {
    const { error } = await apiArchiveNote(id);
    if (!error) {
      navigate('/');
    }
  };

  return note ? (
    <div className="note-detail">
      <h2 className="note-detail__title">{note.title}</h2>
      <p className="note-detail__content">{note.body}</p>
      <p className="note-detail__date">{showFormattedDate(note.createdAt)}</p>
      <div className="note-detail__buttons">
        <button className="note-detail__button" onClick={handleArchive}><BsArchive /> Archive</button>
        <button className="note-detail__button" onClick={handleDelete}><RiDeleteBin5Line /> Delete</button>
      </div>
    </div>
  ) : (
    <div className="note-detail">
      <p>Note not found</p>
    </div>
  );
};

export default DetailNote;
