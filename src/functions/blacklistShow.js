const blacklistSchema = require('../models/blacklistSchema');
const { userMention } = require('discord.js');

async function showBlacklistDB(client) {
    const doc = await blacklistSchema.blackListDB.findOne();
    const userList = [];

    if (doc) {
        const blacklistedUsers = doc.blackListedUsers;

        // Iterate through the blacklisted users and fetch their details
        for (const { userId, role, duration } of blacklistedUsers) {
            const user = await client.users.fetch(userId);

            // If the user exists, push their info into the userList
            if (user) {
                userList.push(`${userMention(userId)} - Role: ${role}, Kick in: ${duration} days`);
            }
        }
    }

    return userList;
}

module.exports = {
    showBlacklistDB
};
