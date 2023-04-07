const mongoose = require('mongoose');

const MyorderSchema = new mongoose.Schema({
    username: {type: String, required: true},
    team1: {type: String, required: true},
    team2: {type: String, required: true},
    slug: { type: String, unique: true },
    price: {type: Number, required: true},
    remainingtime: {type: String, required: true},
}, {timestamps: true} );

mongoose.models = {}
export default mongoose.model("Myorder", MyorderSchema);

