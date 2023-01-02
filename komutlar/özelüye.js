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
   let yas = args[2];
      if(!yas) return message.channel.send("Lütfen bir yaş girin!")
  message.delete()
await member.setNickname(`✧ ${isim} {${yas}}`)
  member.addRole("905630926371971122"); //ÖZEL
  member.addRole("953428670712799262"); //ÖZEL 2
  member.removeRole("939280341343023134");//KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "990537693685501962").then((e) => setTimeout(() => { e.delete(); }, 90000));
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
   .setFooter(message.author.tag ,message.author.avatarURL)
  .setDescription(`
  <:Darklight:1048936001218822185> ⇒ **Kayıt Olan* ${member.user}
  <:Darklight:1048936001218822185> ⇒ **Kayıt Yapan Yetkili** ${message.author}
  <<:Darklight:1048936001218822185> ⇒ **Kanallara Göz At**   <#905630996152586351> 
  <:Darklight:1048936001218822185> ⇒ **Kanallara Göz At 2** <#939593667751051337>
  <:Darklight:1048936001218822185> ⇒ **Kanallara Göz At 3** <#1031885644206710804>`)
return message.channel.send(embed).then(kanal.send(embed)).then((e) => setTimeout(() => { e.delete(); }, 1000));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ö","özel"],
  kategori: "╰●・〖𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃〗",
  permLevel: 5
}
exports.help = {
  name: 'ö',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'özel isim yaş'
}