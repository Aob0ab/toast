const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
const { devGuildIds, devUserIds, token } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
    devGuildIds: devGuildIds,
    devUserIds: devUserIds,
    bulkRegister: true,
});

client.login(token);
