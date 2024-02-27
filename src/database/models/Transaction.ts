import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    payerId: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    transactionAmount: {
        type: Number,
        required: true,
    },
    coinToBeExchanged: {
        type: String,
        required: true,
    },
    coinInExchange: {
        type: String,
        required: true,
    },
    isConfirmed: {
        type: Boolean,
        default: false,
    },
    balanceChangeLogId: {
        type: Object,
        default: {}
    }
})

const Transaction = model('Transactions', transactionSchema)

export default Transaction;