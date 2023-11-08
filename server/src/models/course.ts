import mongoose, { Schema } from 'mongoose';

const courseSchema = new Schema({
    id: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    students: {
        type: [String],
        default: [],
    },
});

export default mongoose.model('Course', courseSchema);
