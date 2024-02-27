import { Schema, model } from "mongoose";

const sellerSchema = new Schema({
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
    kycVerified: {
        type: Boolean,
        default: false,
    },
    isTwoFactorActive: {
        type: Boolean,
        default: false,
    },
    twoFactors: {
        type: Object,
        default: {}
    },
    inProcessOfWalletCreation: {
        type: Boolean,
        default: false,
    },
    wallets: {
        type: Array,
        default: [],
    },
    reputation: {
        type: Object,
        default: {
            positives: 0,
            negatives: 0,
            percentage: 0,
        }
    },
    stats: {
        type: Object,
        default: {
            exchangesDone: 0,
            amountTransacted: 0,
            sellerFee: 0,
        }
    }
}, {
    timestamps: true,
})

const Seller = model('Sellers', sellerSchema)

export default Seller;