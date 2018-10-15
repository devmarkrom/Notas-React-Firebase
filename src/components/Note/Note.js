import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
	
	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
	}

	handleRemoveNote(id) {
		const response = window.confirm('estas seguro de eliminar?');
		if(response) {
			this.props.removeNote(id);
		}
		return;
	}

	render(props) {
		return (
			<div className="Note">
				<p>{this.noteContent}</p>
				<span
					className="btn-close"
					onClick={() => this.handleRemoveNote(this.noteId)}
				>
				&times;	
				</span>
			</div>
		)
	}

}

Note.PropTypes = {
	noteContent: PropTypes.String	
};

export default Note;