import Contest from "../../models/Contest"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {team1,slug,team2,price,remainingtime} = req.body
        let u = new Contest({team1,slug,team2,price,remainingtime})
        await u.save()
        res.status(200).json({ success: "success"})

       
    }
    else {
        res.status(400).json({error: "This method is noot allowed"})
       
       

        
        
    }
}
export default connectDb(handler);