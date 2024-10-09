const blacklistSchema = require('../models/blacklistSchema');
const { userMention } = require('discord.js');

async function removeBlacklistDB(userId, userTag) {
    const userIdString = userId.toString();
    const doc = await blacklistSchema.blackListDB.findOne();
    const exist = await blacklistSchema.blackListDB.findOne({ blackListedUsers: { $elemMatch: { userId: userIdString } } });

    if (doc && exist) {
        // Remove the user from the blacklist
        await blacklistSchema.blackListDB.updateOne({ $pull: { blackListedUsers: { userId: userIdString } } });
        console.log(`User ${userTag} has been removed from the blacklist.`);
        return `User ${userMention(userId)} has been removed from the blacklist.`;
    } else {
        console.log(`User ${userTag} was not found in the blacklist.`);
        return `User ${userMention(userId)} is not on the blacklist.`;
    }
}

module.exports = {
    removeBlacklistDB
};
