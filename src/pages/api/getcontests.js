import Contest from "../../models/Contest"
import connectDb from "../../middleware/mongoose"


const handler =  async (req, res)=> {
    let contest = await Contest.find()
    
   
    
    res.status(200).json({contest})
}

export default connectDb(handler);