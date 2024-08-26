# DiscordBot

# Fall 2023
## Description
- The plan is to automate the cleaning of a Discord server by creating a dedicated Discord bot. The bot will respond to a command and work on a set schedule. It will have configurable options, a customizable blacklist, and a preview feature to show which inactive members are going to be removed.

## Technologies Used
- JavaScript
- [Node.js](https://nodejs.org/en/)

## Bit Bot Boot Team Roles
**Gabriel Kerven**
https://github.com/GGC-SD/DiscordBot.git
1. Lead Programmer
2. Client liasion
   :boom:

***Alexis Pardo***
1. UI/UX Design :pencil2:
2. Testing lead :computer:

***Ravjot Singh***
https://github.com/GGC-SD/DiscordBot.git
1. Data Modeler
2. Team Manager :raising_hand_man:

***Chidiebube Okebalama***
https://github.com/GGC-SD/DiscordBot.git
1. Lead Programmer :floppy_disk:
2. Documentation Lead :bookmark_tabs:

## Communication Tools
- Discord

## Repo Location
- [Repo Link](https://github.com/GGC-SD/DiscordBot.git)

## Progress Tracking Tool
- Jira
- [Progress tool Link](https://jira.ggc.edu/secure/RapidBoard.jspa?rapidView=29&projectKey=SDAD&view=planning&selectedIssue=SDAD-249&epics=visible&issueLimit=100)

## Set Up
- Using your Operating Systems Terminal set the ExecutionPolicy. Use the command: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser.
- The RemoteSigned is also a safe PowerShell Execution policy to set in an enterprise environment. This policy dictates that any script that was not created on the system that the script is running on, should be signed. Therefore, this will allow you to write your own script and execute it. You would not be able to run a script that was downloaded from the Internet, or got from a friend who wrote it under his account or on a different computer. PowerShell differentiates between script you wrote on that computer, and a script that came from elsewhere using the file metadata.
- (The scope makes the RemoteSigned only effect a single user instead of allowing all the users to become effected by the terminal command. This is a security precaution.)
- Install <a href = "https://nodejs.org/en">Node.js</a>. and its dependency <a href = "https://community.chocolatey.org/packages/nodejs.install">Chocolatey</a>.
- Initilize the bots project using command npm init -y.
- Install nodemon using the terminal and the command npm install -g nodemon (nodemon installation allows the script to run continuously in the background while also autoupdating anytime script is changed in the bot project and saved allowing all changes to be quickly deployed for the bot).
- Install dotenv on using the terminal and the command npm install dotenv (This causes allows your bot project a place for the bots token to be stored later in the project and then be placed into a gitignore file in order to keep your token and other confidential project information safe if the bot is shared on GitHub.)
- Install discord.js using the terminal and the command npm i discord.js.
- Create a Discord bot on the Discord bot <a href = "https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%2F">Discord Developer Portal</a>.
- Add the bot's token (Discord developer Portal-> application-> "specific app"-> bot -> Reset Token) to config.json and adjuste the configuration to indicate where the script is on your local machine.
- Run the bot by using nodemon or nodemon index.js or any other command you prefer.

## List of working features
- ***Help command:*** Lists out all the different configuration commands for the bot.
- ***Blacklist show command:*** Shows the current blacklisted user/roles. Blacklisted users will not be purged from the server.
- ***Blacklist add command:*** Lets you add a specific user/role to the blacklist which makes them bypass the purges.
- ***Blacklist remove command:*** Lets you remove a specific user/role from the blacklist.
- ***Blacklist Database:*** Stores user data for the blacklist.
- ***Show inactivity command:*** Shows members who are considered "inactive" that are eligible to be purged.

## Project Licencing
- <a href = "https://github.com/GGC-SD/DiscordBot">Order 66</a> © 2023 by <a href = "https://github.com/GGC-SD/DiscordBot/graphs/contributors" target = "_blank">Gabriel Kerven, Chidiebube Okebalama, Alexis Pardo, Ravjot Singh, Anca Doloc Mihu, David Rivera, Mike Deiters</a> is licensed under <a href = "https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1" target = "_blank">CC BY-ND 4.0</a>



# Fall 2024
## Description
- Text here

## Links
- [Repo Link](https://github.com/GGC-SD/DiscordBot.git)
- [Documentation Link](documents/docs-Fall2024)

## Technologies
- JavaScript
- [Node.js](https://nodejs.org/en/)

## Working Features
- ***Help command:*** Lists out all the different configuration commands for the bot.
- ***Blacklist show command:*** Shows the current blacklisted user/roles. Blacklisted users will not be purged from the server.
- ***Blacklist add command:*** Lets you add a specific user/role to the blacklist which makes them bypass the purges.
- ***Blacklist remove command:*** Lets you remove a specific user/role from the blacklist.
- ***Blacklist Database:*** Stores user data for the blacklist.
- ***Show inactivity command:*** Shows members who are considered "inactive" that are eligible to be purged.

## Installation Steps
- Using your Operating Systems Terminal set the ExecutionPolicy. Use the command: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser.
- The RemoteSigned is also a safe PowerShell Execution policy to set in an enterprise environment. This policy dictates that any script that was not created on the system that the script is running on, should be signed. Therefore, this will allow you to write your own script and execute it. You would not be able to run a script that was downloaded from the Internet, or got from a friend who wrote it under his account or on a different computer. PowerShell differentiates between script you wrote on that computer, and a script that came from elsewhere using the file metadata.
- (The scope makes the RemoteSigned only effect a single user instead of allowing all the users to become effected by the terminal command. This is a security precaution.)
- Install <a href = "https://nodejs.org/en">Node.js</a>. and its dependency <a href = "https://community.chocolatey.org/packages/nodejs.install">Chocolatey</a>.
- Initialize the bots project using command npm init -y.
- Install nodemon using the terminal and the command npm install -g nodemon (nodemon installation allows the script to run continuously in the background while also autoupdating anytime script is changed in the bot project and saved allowing all changes to be quickly deployed for the bot).
- Install dotenv on using the terminal and the command npm install dotenv (This causes allows your bot project a place for the bots token to be stored later in the project and then be placed into a gitignore file in order to keep your token and other confidential project information safe if the bot is shared on GitHub.)
- Install discord.js using the terminal and the command npm i discord.js.
- Create a Discord bot on the Discord bot <a href = "https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%2F">Discord Developer Portal</a>.
- Add the bot's token (Discord developer Portal-> application-> "specific app"-> bot -> Reset Token) to config.json and adjuste the configuration to indicate where the script is on your local machine.
- Run the bot by using nodemon or nodemon index.js or any other command you prefer.

## How To Run
- Text here
- Text here
- Text here

## Other Project Explanations
- Text here
- Text here
- Text here

## Neck Beard Team Roles
**Sebastian Lian Carmagnola**
https://github.com/GGC-SD/DiscordBot.git
1. Data Modeler :space_invader:
2. Testing Lead :keyboard:

**Najee Douglas**
1. UI/UX Design :file_folder:
2. Documentation Lead :scroll:

**Etienne Laccruche** 
https://github.com/GGC-SD/DiscordBot.git
1. Lead Programmer 💻
2. Client Liaison 🧑‍🤝‍🧑

**Jonathan Hummel**
1. Lead Programmer ⭐
2. Team Manager 🏴‍☠️

## Project Flyer & Video
- Flyer here
- Video link here
