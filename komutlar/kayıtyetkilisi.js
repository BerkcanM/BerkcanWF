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
  message.channel.send("<@"+member.id+">, Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz <a:zkalp:959547111052025906>")
  message.delete()
await member.setNickname(`♛ ${isim} {${yas}}`)
  member.addRole("905630791118233602"); //KAYIT YETKİ
  member.removeRole("939280341343023134");//KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "990537693685501962")
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(user.avatarURL)
  .setDescription(`
  <:Darklight:1048936001218822185> ⇒ **Kayıt Olan** ${member.user}
  <:Darklight:1048936001218822185> ⇒ **Kayıt Yapan Yetkili** ${message.author}
  <:Darklight:1048936001218822185> ⇒ **Kanallara Göz At**   <#905630996152586351> 
  <:Darklight:1048936001218822185> ⇒ **Kanallara Göz At 2** <#939593667751051337>
  <:Darklight:1048936001218822185> ⇒ **Kanallara Göz At 3** <#1031885644206710804>`)
return message.channel.send(embed).then(kanal.send(embed)).then((e) => setTimeout(() => { e.delete(); }, 10000));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ky","ky"],
  kategori: "╰●・Đ𝙰𝚁𝙺 ' Ⱡ𝙸𝙶𝙷𝚃 〔🎮〕",
  permLevel: 5
}
exports.help = {
  name: 'ky',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'ky isim yaş'
}