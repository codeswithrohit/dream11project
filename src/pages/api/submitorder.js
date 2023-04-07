import Myorder from "../../models/Myorder"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {username,team1,team2,slug,price,remainingtime} = req.body
        let u = new Myorder({username,team1,team2,slug,price,remainingtime})
        await u.save()
        res.status(200).json({ success: "success"})

       
    }
    else {
        res.status(400).json({error: "This method is noot allowed"})
       
       

        
        
    }
}
export default connectDb(handler);