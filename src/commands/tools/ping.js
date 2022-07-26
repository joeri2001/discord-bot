const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping @everyone!"),
  async execute(interaction) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `@everyone ${
      message
    }`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
