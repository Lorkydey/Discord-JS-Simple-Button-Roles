const Rannouncement = '1036330804973949028'
const RDevelopment = '1036330835344896021'
const Rspacer = '1036329575891882135'
module.exports = {
    name: 'interactionCreate',
    /**
     * @param {ButtonInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (interaction.isButton()) {
            const buttonID = interaction.customId
            
            
            
            // Announcement Role
            if (buttonID === 'AnnouncementRoles') {
                console.log('a')
                const member = interaction.member;
    
                console.log(member.roles.cache);
    

                
                if (member.roles.cache.has(Rannouncement)) {
                    member.roles.remove(Rannouncement);
                    if (!member.roles.cache.has(RDevelopment)) {
                        member.roles.remove(Rspacer);
                    }
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else {
                    member.roles.add(Rannouncement);
                    member.roles.add(Rspacer);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    })
                }
            }


            // Development Role
            if (buttonID === 'DevelopmentRoles') {
                console.log('a')
                const member = interaction.member;
    
                console.log(member.roles.cache);
    

                
                if (member.roles.cache.has(RDevelopment)) {
                    member.roles.remove(RDevelopment);
                    if (!member.roles.cache.has(Rannouncement)) {
                        member.roles.remove(Rspacer);
                    }
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else {
                    member.roles.add(RDevelopment);
                    member.roles.add(Rspacer);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    })
                }
            }
        }
    }
}