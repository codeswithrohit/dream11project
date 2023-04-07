
const mongoose = require('mongoose');

const ContestSchema = new mongoose.Schema({
    team1: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    team2: {type: String, required: true},
    price: {type: Number, required: true},
    remainingtime: {type: String, required: true},
   
}, {timestamps: true} );

mongoose.models = {}
export default mongoose.model("Contest", ContestSchema);
//export default mongoose.model.Hospital || mongoose.model("Hospital", HospitalSchema);