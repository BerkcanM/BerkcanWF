const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('905630791118233602') && !message.member.hasPermission('SEND_MESSAGES')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için `Mesaj Gönder` yetkisine sahip olmalısın')
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketliyip ismini yaşını yazmalısın!').setColor("Red"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  message.channel.send("<@"+member.id+">, Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz <a:zkalp:959547111052025906>")
  message.delete()
await member.setNickname(`・İ𝚜𝚖𝚒𝚗𝚒𝚣 𝚈𝚊şı𝚗ı𝚣`)
  member.addRole("939280341343023134"); //KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "")
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(user.avatarURL)
   .setFooter(message.author.tag ,message.author.avatarURL)
  .setDescription(`
  <:Darklight:1048936001218822185>  ⇒ *Kayıtsız Verildi* <@&939280341343023134>
  <:Darklight:1048936001218822185>  ⇒ *Kayıt Olan* ${member.user}
  <:Darklight:1048936001218822185>  ⇒ *Kayıt Yapan Yetkili* ${message.author}`)
return message.channel.send(embed).then(kanal.send(embed))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kt","kt"],
  kategori: "╰●・Đ𝙰𝚁𝙺 ' Ⱡ𝙸𝙶𝙷𝚃 〔🎮〕",
  permLevel: 0
}
exports.help = {
  name: 'kt',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'bot isim yaş'
}