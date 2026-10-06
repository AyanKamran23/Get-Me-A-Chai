"use server"


import Payment from "../../models/Payment";
import connectDb from "@/db/connectDB";
import User from "../../models/User";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();

    let oid = "EP_" + Date.now();
    // Save the pending payment to your database
    await Payment.create({
        oid: oid,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    });

    return oid;
};

export const updatePayment = async (oid) => {
    await connectDb();
    await Payment.findOneAndUpdate({ oid: oid }, { done: true });
};

export const fetchuser = async (username) => {
    await connectDb();
    let u = await User.findOne({username: username})
    if (!u) {
        return null;
    }
    let user = u.toObject({flattenObjectIds: true});
    return user
}

export const fetchpayments = async (username) => {
    await connectDb();
    let p = await Payment.find({to_user: username}).sort({amount: -1}).lean();
    return JSON.parse(JSON.stringify(p))
}

export const updateProfile = async (data, oldusername)=>{
    await connectDb();
    let ndata = data
    
    if (oldusername !== ndata.username) {
        let u = await User.findOne({username: ndata.username})
        if (u) {
            return { error: "username already exist "}
        }
    }

await User.updateOne({email: ndata.email}, {
    name: ndata.name,
    username: ndata.username,
    profilepic: ndata.profilepic,
    coverpic: ndata.coverpic,
     easypaisaname: ndata.easypaisaname,
    easypaisanumber: ndata.easypaisanumber,
});

}