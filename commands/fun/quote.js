const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quote")
        .setDescription('tells you a random quote'),
    run: async ({ interaction }) => {
        const ZEN_URL = 'https://zenquotes.io/api/random';
        let response = await axios.get(ZEN_URL)
        let embed = new EmbedBuilder()
            .setTitle(response.data[0].q)
            .setDescription('-'+response.data[0].a)
            .setColor("#64FE97")
        await interaction.reply({ embeds: [embed] })
    },
    options: {
        // devOnly: true,
    }
}