const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('')
        .setDescription(),
    run: async ({ interaction }) => {
        await interaction.reply();
    },
    options: {

    }
}