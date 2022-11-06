const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var generale = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('')
.setDescription(``)
.setImage('')
var conditions = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle(``)
.setDescription(``)
.setImage('')
var discussion = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle(``)
.setDescription(``)
.setImage('')
var discussion2 = new Discord.MessageEmbed()
.setColor('#303136')
.setDescription(``)

client.on('ready', () => {
	console.log('ready')
})

client.on('messageCreate',  message => {
  if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("🧾 Lire le règlement de la communauté")
            .addOptions([
                {
                    label: "1. Generale",
                  emoji: "",
                    value: "generale"
                },
                {
                    label: "2. Discussion",
                  emoji: "",
                    value: "discussion"
                },
              {
                    label: "3. Conditions",
                emoji: "",
                    value: "conditions"
                }
            ])
			);
  const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('assistance')
					.setLabel(`Contacter l'assistance de la communauté`)
					.setStyle('PRIMARY'),
			);
  const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://discord.com/channels/681797849926860810/945909799609065503/977002360641552435')
					.setLabel(`Prendre des rôles`)
					.setStyle('LINK'),
			);
	if (message.content.toLowerCase().startsWith('.')) {
	 	const msg = message.content.slice(1).trim()
      	const args = msg.split(/ +/)
      	const command = args.shift().toLowerCase()

      	if (command === "rules") {
 			const regle = new Discord.MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/878095446210379786/992180198034387065/EnSCF0FUYAUJFPF.jpg")
          .setColor("#303136")
        	const descregle = new Discord.MessageEmbed()
          .setAuthor({ name: 'Kaori Café', iconURL: 'https://i.imgur.com/d0diZ3p.jpg'})
          .setTitle("Règlement & Présentation du serveur KaoriCafé")
          .setColor("#303136")
          .setDescription("Faites de bonnes rencontres, passer du bon temps sur notre communauté sociale sur le thème de la discussion générale, tout en respectant le règlement de notre communauté\n\n **Liens Utiles**\n<:twitter:988909880373035060> [Twitter](https://twitter.com/DiscordStraw?t=8A1kieIei2KPKWaWown6xw&s=09)\n<:youtube:988909931962974278> [Youtube](https://youtube.com/c/strawcafe)\n\n**Information mis à jour le** <t:1655846640:R>\n**Règlement mis à jour le** <t:1655848500:R>")

       		message.channel.send({ embeds: [ regle, descregle ], components: [row]})
      	}
	}
});
client.on("interactionCreate", interaction => {
            if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                console.log("Selection made");
            
                if(interaction.values == "generale"){
                    interaction.reply({embeds: [generale], ephemeral: true});
                
            };
              if(interaction.values == "discussion"){
                    interaction.reply({embeds: [ discussion, discussion2 ], ephemeral: true});
                
            };
              if(interaction.values == "conditions"){
                    interaction.reply({embeds: [conditions], ephemeral: true});
                
            };
        }
        }
    });

client.login(process.env.TOKEN)
