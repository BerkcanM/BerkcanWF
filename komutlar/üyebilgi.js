const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "1046160601828839535";
  let kızRolü = "1046160600931242067";
  let ekipRolü = "1046160591020101723";
  let kayıtsızRolü = "1046160602663497728";
  let vipRolü = "1046160599052198058";
  let botRolü = "1046160617557463070";
  const embeddd = new Discord.RichEmbed()
    .setColor("GOLD")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
      `🧮 **Sunucu Toplam User:** ${message.guild.memberCount} 
      \n 🟢 **Sunucu Toplam Aktif User:** ${
        message.guild.members.filter(b => b.presence.status !== "offline").size
      } \n \n ≫ **Sunucudaki Bot Üye**: ${
        message.guild.roles.get(botRolü).members.size
      } \n \n ≫ **Sunucudaki Erkek Üye**: ${
        message.guild.roles.get(erkekRolü).members.size
      } \n \n ≫ **Sunucudaki Kız Üye**: ${
        message.guild.roles.get(kızRolü).members.size
      } \n \n ≫ **Sunucudaki Vip Üye**: ${
        message.guild.roles.get(vipRolü).members.size
      } \n \n ≫ **Sunucudaki Kayıt Yetkili Üye**: ${
        message.guild.roles.get(ekipRolü).members.size
      } \n \n ≫ **Sunucudaki Kayıtsız Üye**: ${
        message.guild.roles.get(kayıtsızRolü).members.size
      } \n \n 🔊 **Ses Kanalında Bulunan Kişi Sayısı** : ${
        message.guild.members.filter(a => a.voiceChannel).size
      }`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki üyeleri sayar.",
  usage: "!say",
  kategori: "moderasyon"
};
