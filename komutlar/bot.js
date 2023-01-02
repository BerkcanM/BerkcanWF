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
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!")
  message.channel.send("<@"+member.id+">, Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz <a:zkalp:959547111052025906>")
  message.delete()
await member.setNickname(`✵ ${isim} `)
  member.addRole("905630935658168340"); //B O T
  member.addRole("905630765910482985"); //B O T 2
  member.removeRole("939280341343023134");//KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "")
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(user.avatarURL)
   .setFooter(message.author.tag ,message.author.avatarURL)
  .setDescription(`
  <:Darklight:1048936001218822185>  ⇒ *Verildi Roller* <@&905630935658168340>
  <:Darklight:1048936001218822185>  ⇒ *Kayıt Olan* ${member.user}
  <:Darklight:1048936001218822185>  ⇒ *Kayıt Yapan Yetkili* ${message.author}`)
return message.channel.send(embed).then(kanal.send(embed)).then((e) => setTimeout(() => { e.delete(); }, 10000));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["b","bot"],
  kategori: "╰●・Đ𝙰𝚁𝙺 ' Ⱡ𝙸𝙶𝙷𝚃 〔🎮〕",
  permLevel: 5
}
exports.help = {
  name: 'b',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'bot isim yaş'
}