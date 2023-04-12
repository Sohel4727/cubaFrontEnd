import mongoose from 'mongoose';
const connectDB= async(db_url,db_name)=>{
const db_connection_string=`${db_url}/${db_name}`
try {
    await mongoose.connect(db_connection_string)
    console.log(`connected to DB successfully`);
} catch (err) {
    console.log(err,`error while connecting to DB`);
}
}
export default connectDB;