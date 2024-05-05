const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('get an avatar of a user')
        .addUserOption(option => option.setName('user').setDescription('target user').setRequired(true)),
    run: async ({ interaction }) => {
        let user = interaction.options.getUser('user');
        let embed = new EmbedBuilder().setTitle(`${user.username}'s avatar`).setImage(user.displayAvatarURL({ size: 4096 }));
        await interaction.reply({ embeds: [embed] });
    },
    options: {
        // devOnly: true,
    }
}