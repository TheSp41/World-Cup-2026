const resultModel = require('../models/resultModel');
const jwt = require('jsonwebtoken'); 

const getLeaderboard = async (req, res) => {
    try {
        const rawLeaderboard = await resultModel.find({}, 'user score') .populate('user', 'username') .sort({ score: -1 }) .limit(100);

        const top100 = rawLeaderboard.map(doc => ({
            _id: doc._id,
            username: doc.user ? doc.user.username : "Unknown", 
            score: doc.score
        }));

        let myStanding = null;

        const authHeader = req.headers.authorization || req.headers.Authorization;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const userId = decoded.id || decoded._id; 

                const myResult = await resultModel.findOne({ user: userId }).populate('user', 'username');
                
                if (myResult) {
                    const higherScoresCount = await resultModel.countDocuments({ score: { $gt: myResult.score } });
                    
                    myStanding = {
                        username: myResult.user.username,
                        score: myResult.score,
                        rank: higherScoresCount + 1
                    };
                }
            } catch (tokenError) {
                console.log("Could not fetch personal standing: Invalid token");
            }
        }

        res.status(200).json({ success: true, top100: top100, myStanding: myStanding });

    } catch (err) {
        console.error("Leaderboard Error:", err);
        res.status(500).json({ success: false, msg: "Failed to load leaderboard" });
    }
};

module.exports = getLeaderboard;