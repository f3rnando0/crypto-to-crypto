import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    inProcessOfCreationWallets: {
        type: Boolean,
        default: false,
    },
    wallets: {
        type: Array,
        default: [],
    },
    isTwoFactorActive: {
        type: Boolean,
        default: false,
    },
    twoFactors: {
        type: Object,
        default: {}
    }
}, {
    timestamps: true,
})

const User = model('Users', userSchema)

export default User;