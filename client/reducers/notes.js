function postNotes(state = [], action) {
  switch(action.type) {
    case 'ADD_NOTE':
      return [...state, {
        text : action.note
      }];
    case 'REMOVE_NOTE':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function notes(state = {}, action) {
  if (typeof action.noteId !== 'undefined') {
    return {
      // Take the current state
      ...state,
      // overwrite this post with the new one
      [action.noteId]: postNotes(state[action.noteId], action)
    };
  }

  return state;
}

export default notes;
