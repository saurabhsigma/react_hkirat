const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddleware = require('../middleware');
const { default: mongoose } = require('mongoose');


router.get("/balance", authMiddleware, async (req,res)=>{
    const account = await Account.findOne({
        userID:req.userID
    });

    res.sendStatus(200).json({
        balance: account.balance
    })
})

// an endpoint for user to transfer money to anotehr account

// method :Post
// route: /api/v1/account/transfer


// {
//     to:string,
//     account: number.
// }


// response : status code 200
// {
//     message: "transfer successful"
// }

// bad solution(doesnt use transactions)

// router.post("/transfer",authMiddleware, async (req,res)=>{
//    const { amount, to } = req.body;

//     const account = await Account.findOne({
//         userId: req.userId
//     });

//     if (account.balance < amount) {
//         return res.status(400).json({
//             message: "Insufficient balance"
//         })
//     }

//     const toAccount = await Account.findOne({
//         userId: to
//     });

//     if (!toAccount) {
//         return res.status(400).json({
//             message: "Invalid account"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: {
//             balance: -amount
//         }
//     })

//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })

//     res.json({
//         message: "Transfer successful"
//     })
// });

// good solution

router.post("/transfer", authMiddleware, async(req,res)=>{
    const session = await mongoose.startSession();
    
    session.startTransaction();
    const {amount,to} = req.body;

    // fetch the accounts within the transaction
    const account= await Account.findOne({userID:req.userID}).session(session);

    if(!account || account.balance <amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userID:to}).session(session);
    
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"invalid account"
        });
    }

    // perform the transfer
    await Account.updateOne({userID:req.userID}, { $inc: {balance: -amount}})
    await Account.updateOne({userID:to}, { $inc: {balance: amount}})

    // commit the transaction
    await session.commitTransaction();
    res.json({
        message: "transfer successful"
    });
})



module.exports = router;