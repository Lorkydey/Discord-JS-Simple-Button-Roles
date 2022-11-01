const {  ActionRowBuilder, ButtonBuilder, ButtonStyle ,Message, SlashCommandBuilder, ChatInputCommandInteraction, Client,PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("role-setup")
      .setDescription("role setup")
      .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     * @param {Message} message
     */
    async execute(interaction, client, message, ) {
        const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('AnnouncementRoles')
                    .setLabel('Announcement Pings')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji("📣"),
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('DevelopmentRoles')
                    .setLabel('Development Pings')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji("<:developer:1022985120086495324>"),
                );
                interaction.reply({
                    content: 'Message Created',
                    ephemeral: true
                })
            interaction.channel.send({
                content: 'Here are a few roles you can get to receive notifications for specific things.',
                components: [row]
            })
    },
};