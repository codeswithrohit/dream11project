import Myorder from "../../models/Myorder"
import connectDb from "../../middleware/mongoose"


const handler =  async (req, res)=> {
    let myorder = await Myorder.find()
    
   
    
    res.status(200).json({myorder})
}

export default connectDb(handler);