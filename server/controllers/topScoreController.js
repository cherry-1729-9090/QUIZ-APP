const TopScores = require('../models/TopScores');

exports.getTopScores = async(req,res)=>{
    try {
        const {user_id} = req.params;
        const topScores = await TopScores.find({user_id}).populate('quiz_id');
        res.status(200).json(topScores);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

exports.updateTopScores = async(req,res)=>{
    try {
        const {user_id,quiz_id,score} = req.body;
        const topScore = await TopScores.findOne({user_id,quiz_id});
        if(topScore){
            if(topScore.score < score){
                topScore.score = score;
                await topScore.save();
                res.status(200).json({message:'Top score updated successfully'});
            }
            else{
                res.status(200).json({message:'Top score is already higher'});
            }
        }
        else{
            const newTopScore = new TopScores({user_id,quiz_id,score});
            await newTopScore.save();
            res.status(200).json({message:'Top score updated successfully'});
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}