import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.props.params.noteId, this.refs.note.value);
    this.refs.noteForm.reset();
  }

  render() {
    return (
      <div className="notes">
        <form onSubmit={this.handleSubmit} ref="noteForm" className="note-form">
          <textarea type="text" ref="note" placeholder="compose new note"/>
        </form>
        <button className="button" type="submit">Save Note</button>
      </div>
    );
  }
};

export default NoteForm;
