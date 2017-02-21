export function addNote(noteId, user, note) {
  return {
    type: 'ADD_NOTE',
    noteId,
    user,
    note
  };
}

export function deleteNote(noteId, index) {
  return {
    type: 'REMOVE_NOTE',
    noteId,
    index
  };
}
