import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserSchema {
    username: string;
    password: string;
    email: string;
    role: 'student' | 'instructor';
    date: Date;
}

const userSchema: mongoose.Schema<UserSchema> = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'instructor'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

userSchema.methods.isStudent = function () {
    return this.role === 'student';
};

userSchema.methods.isInstructor = function () {
    return this.role === 'instructor';
};

userSchema.methods.comparePassword = async function (
    password: string | Buffer,
    callback: Function
) {
    const result = await bcrypt.compare(password, this.password);
    callback(null, result);
};

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const hashPassword = await bcrypt.hash(this.password, 12);
        this.password = hashPassword;
    }
    next();
});

export default mongoose.model('User', userSchema);
