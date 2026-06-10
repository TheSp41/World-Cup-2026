const admin = require('../models/adminModel');
const user = require('../models/resultModel');

const groups = (userGroup, adminGroup) => {
    let score = 0;
    for (let i = 65; i <= 76; i++) {
        let char = String.fromCharCode(i);
        let user = userGroup.get(char), admin = adminGroup.get(char);
        
        if (!user || !admin) continue; 

        for (let j = 0; j < 4; j++) {
            if (user[j] === admin[j]) {
                score += 3;
            }
        }
    }
    return score;
};

const bestEight = (user8, admin8) => {
    let score = 0;
    if(!admin8[0]) continue
    const admin=admin8[0],user=user8[0]
    for (let i = 0; i < admin.length; i++) {
        const adminChar = admin[i]
        if (!adminChar || adminChar === " ") continue; 
        if (user.includes(adminChar)) {
            score += 2;
        }
    }
    return score;
};

const knockouts = (userKnockouts, adminKnockouts) => {
    let score = 0;
    const allUserPicks = Array.from(userKnockouts.values()).flat();
    
    Array.from(adminKnockouts.values()).flat().forEach(adminTeam => {
        if (allUserPicks.includes(adminTeam)) {
            score += 2;
        }
    });
    return score;
};

const ro32 = (userRo32, adminRo32) => {
    let score = 0;
    const allAdminTeams = adminRo32.flatMap(match => [match.team1, match.team2]);
    userRo32.forEach((userMatch, index) => {
        const adminMatch = adminRo32[index];
        if (allAdminTeams.includes(userMatch.team1)) {
            score += 2;
            if (adminMatch && adminMatch.team1 === userMatch.team1) {
                score += 1;
            }
        }
        if (allAdminTeams.includes(userMatch.team2)) {
            score += 2;
            if (adminMatch && adminMatch.team2 === userMatch.team2) {
                score += 1;
            }
        }
    });
    return score;
};

const ro16 = (userRo16, adminRo16) => {
    let score = 0;
    for (let i = 0; i < 16; i++) {
        if (!adminRo16[i]) continue; 
        
        if (userRo16[i] === adminRo16[i]) {
            score += 1;
        }
        if (userRo16.includes(adminRo16[i])) {
            score += 2;
        }
    }
    return score;
};

const quarters = (userQuarters, adminQuarters) => {
    let score = 0;
    for (let i = 0; i < 8; i++) {
        if (!adminQuarters[i]) continue; 
        
        if (userQuarters[i] === adminQuarters[i]) {
            score += 1;
        }
        if (userQuarters.includes(adminQuarters[i])) {
            score += 2;
        }
    }
    return score;
};

const semis = (userSemis, adminSemis) => {
    let score = 0;
    for (let i = 0; i < 4; i++) {
        if (!adminSemis[i]) continue; 
        
        if (userSemis[i] === adminSemis[i]) {
            score += 2;
        }
        if (userSemis.includes(adminSemis[i])) {
            score += 3;
        }
    }
    return score;
};

const finals = (user, admin) => {
    let score = 0;
    for (let i = 0; i < 2; i++) {
        if (!admin[i]) continue; 
        
        if (user.includes(admin[i])) {
            score += 4;
        }
    }
    return score;
};

const winner = (user, admin) => {
    let score = 0;
    if (admin && admin[0] && user[0] === admin[0]) {
        score += 6;
    }
    return score;
};

const third = (user, admin) => {
    let score = 0;
    if (admin && admin[0] && user[0] === admin[0]) {
        score += 5;
    }
    return score;
};

const updateHandler = async (req, res) => {
    try {
        const result = await admin.findOne({ user: 'admin' });
        if (!result) return res.status(404).json({ success: false, msg: "no bracket found" });
        
        const cursor = user.find({}).cursor();
        for await (const userBracket of cursor) {
            let score = 0;
            
            if (result.group && result.group.size !== 0) score += groups(userBracket.group, result.group);
            if (result.best8 && result.best8.length !== 0) score += bestEight(userBracket.best8, result.best8);
            if (result.knockouts && result.knockouts.size !== 0) score += knockouts(userBracket.knockouts, result.knockouts);
            if (result.ro32 && result.ro32.length !== 0) score += ro32(userBracket.ro32, result.ro32);
            if (result.ro16 && result.ro16.length !== 0) score += ro16(userBracket.ro16, result.ro16);
            if (result.quarters && result.quarters.length !== 0) score += quarters(userBracket.quarters, result.quarters);
            if (result.semis && result.semis.length !== 0) score += semis(userBracket.semis, result.semis);
            if (result.final && result.final.length !== 0) score += finals(userBracket.final, result.final);
            if (result.winner && result.winner.length !== 0) score += winner(userBracket.winner, result.winner);
            if (result.thirdFinish && result.thirdFinish.length !== 0) score += third(userBracket.thirdFinish, result.thirdFinish);
            
            try {
                userBracket.score = score;
                await userBracket.save();
            } catch (err) {
                console.log("Error saving user bracket score:", err);
            }
        }
        
        return res.status(200).json({ success: true, msg: "All user scores updated successfully!" });
    } catch (err) {
        console.error("Global Handler Error:", err);
        res.status(500).json({ success: false, msg: "Server error" });
    }
};

module.exports = updateHandler;