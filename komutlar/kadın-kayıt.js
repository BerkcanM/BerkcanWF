const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('1046160591020101723') && !message.member.hasPermission('SEND_MESSAGES')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için `Mesaj Gönder` yetkisine sahip olmalısın')
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketliyip ismini yaşını yazmalısın!').setColor("Red"));
  message.delete()
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!")
   let yas = args[2];
      if(!yas) return message.channel.send("Lütfen bir yaş girin!")
await member.setNickname(`★  ${isim} {${yas}}`)
  member.addRole("1046160600931242067"); //ERKEK
  member.removeRole("1046160602663497728");//KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "")
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("Red")
  .setThumbnail(user.avatarURL)
  .setDescription(`• **Sunucudaki Kayıt Bilgileri**:
  
  • **Kayıt Edilen Kullanıcı**: ${member.user}
  
  • **Kayıt Eden Yetkili**:     ${message.author}
  
  • **Verilen Rol**: <@&1046160600931242067>
  
  • **Kayıt Türü** : Cinsiyet / Kız
  
  • **Yeni İsim** : ★  ${isim} {${yas}}`)
return message.channel.send(embed).then(kanal.send(embed)).then((e) => setTimeout(() => { e.delete(); }, 10000));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kk","kk"],
  kategori: "",
  permLevel: 5
}
exports.help = {
  name: 'kk',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'erkek isim yaş'
}