const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
	link: {
		type: String,
		required: [true, 'Please add a YouTube link.'],
	},
	title: {
		type: String,
		required: [true, 'Please add a title'],
		maxlength: [40, 'Title cannot be more than 40 characters'],
	},
	description: {
		type: String,
		required: false,
		maxlength: [200, 'Description cannot be more than 200 characters'],
	},
	stamp: {
		type: String,
		maxlength: [8, 'Max 8 charakters separated by : . '],
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)
