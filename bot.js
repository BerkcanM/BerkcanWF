const Discord = require("discord.js")
const client = new Discord.Client();

const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

///////////
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "cik") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
//-------------------------------------ZULA TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "905637704270770227") return;
  message.react("906188696787755038").then(() => {
  message.react("959546845472899162")
  message.react("906512408036655135")
  })
    })
//-------------------------------------KS TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1036027534850142331") return;
  message.react("906188696787755038").then(() => {
  message.react("959546845472899162")
  message.react("906512408036655135")
  message.react("996800526081605662")
  })
    })
//-------------------------------------PUBG TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1021342249587589130") return;
  message.react("906188803377618955").then(() => {
  })
    })
//-------------------------------------OYUN TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1018677161084858458") return;
  message.react("996800526081605662").then(() => {
  message.react("1005162716530491492")
  message.react("1002230608937877615")
  message.react("990418884135907398")
  message.react("906188696787755038")
  message.react("906188718661054515")
  })
    })
//-------------------------------------TASARIM TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "957054915321155674") return;
  message.react("906188696787755038").then(() => {
  })
    })

//--------------------------------------------------------------------------------------\\

  //-------------------------------------SEVİYE TEPKİ------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "901556138921852938") return;
  message.react("941657646287708191").then(() => {
  })
    
   })
//-------------------------------------SES TEPKİ------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1049012223877582929") return;
  message.react("1049020239993655396").then(() => {
  })
    
   })
//-------------------------------------BOOST TEPKİ------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "941654743246340147") return;
  message.react("990418882718216202").then(() => {
  })
    
   })
 //-------------------------------------DUYURU TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "939570109679296543") return;
  message.react("946580258658865172")
  message.react("946580229994983434")
  message.react("946580436035964938")
  message.react("946580350476369961")
  message.react("946580367106793493")
  message.react("946580319547588728")
  message.react("946580293572259860")
  message.react("946580303982518303")
  message.react("946580477114974238")
  message.react("989213357166977044")
  message.react("906188696787755038")
  message.react("959546845472899162")
  message.react("945472135042826290")
    
  })
 //-------------------------------------DOĞÜM GÜNÜ TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "939593667751051337") return;
  message.react("1003599244046909520").then(() => {
  })
        })
//----------------------------------------HG-------------------------------------------------------\\
   
//---------------------------------------Modlog---------------------------------------------------\\
//🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢   ❄️   SİLİNEN MESAJLAR LOG SİSTEMİ   ❄️

client.on("messageDelete", async message => {
if(message.member.user.bot || !message.content) return;  
let silinenmesajlar = db.fetch(`silinenmesajlarveri_${message.guild.id}`)
if(!silinenmesajlar) return;
const date = new Date();

const silinenmesajlarlog = new Discord.MessageEmbed()
.setDescription(`*BİR KULLANICI MESAJINI SİLDİ*   

*KULLANICI:* <@${message.author.id}> \``)

.setColor('RED')
.addField("*KANAL BİLGİ*:",`\ #${message.channel}\\\``)
.addField("*SİLİNEN MESAJ*:",`\`\`\`${message.content}\`\`\``)
client.channels.cache.get(silinenmesajlar).send(silinenmesajlarlog)
})

//🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴,
//----------------------------------------İsim Yaş-------------------------------------------------//
client.on("guildMemberAdd", member => {
  member.setNickname('・İ𝚜𝚖𝚒𝚗𝚒𝚣 𝚈𝚊şı𝚗ı𝚣');
  
});
//----------------------------------------Boost-------------------------------------------------//
const logs = require('discord-logs');
client.on('guildMemberBoost', (member) => {
let kanal = client.channels.get('941654743246340147');
kanal.send(`<:Darklight:1048936001218822185> ${member.user} Değerli Kullanıcı ${member.guild.name} Sunucumuza Boost Bastı Teşekkür Ederim <a:33:945473373637595177>`);
member.send(`<:Darklight:1048936001218822185> ${member.user} Değerli Kullanıcı ${member.guild.name} Sunucumuza Boost Bastı Teşekkür Ederim <a:33:945473373637595177>`);
});
//------------------------------------HG2---------------------------------------------------------\\
client.on('guildMemberAdd', async member => {
   await member.addRole(`939280341343023134`) //id yazan yere verilecek rol (unregistered)
   await member.setNickname(`・İ𝚜𝚖𝚒𝚗𝚒𝚣 𝚈𝚊şı𝚗ı𝚣`) //yeni gelen kullanıcının adını değiştirme
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 129600000) {
takizaman = 'Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.find(x => x.id === `939216882161057823`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.RichEmbed()
  .setTitle(
      "<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> 𝙷𝚘ş 𝙶𝚎𝚕𝚍𝚒𝚗 𝚂𝚞𝚗𝚞𝚌𝚞𝚖𝚞𝚣𝚊 𝙺𝚊𝚢ı𝚝 𝙾𝚕𝚖𝚊𝚢ı 𝚄𝚗𝚞𝚝𝚖𝚊"
    )
    .setDescription(`
    
<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> ${member} Sunucuda Seninle Beraber **[${message.guild.memberCount}]** Kişiyiz.

<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> Sunucuda Kaydının Yapılması İçin İsmini Yaşını Vermeniz Gerekiyor``

<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> <@&905630791118233602> Rolündeki Yetkililer Seninle İlgilenecektir.

<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> Discord Hesabın Açılalı: **${gecen}**

<a:sagoks:959864838148989019> <:Darklight:1048936001218822185> Bu Kullanıcı: **${takizaman}**

`)
.setColor('RED')
message.send(taki)
  
          });
//------------------------------------Mesaj Tepki---------------------------------------------------------\\
client.on("message", message => {

if(message.channel.id === "939216882161057823"){
message.react("1050112861986361446")
message.react("1050112646294294550")
}
})
//------------------------------------ROL---------------------------------------------------------\\
client.on("guildMemberUpdate", async (oldMember, newMember) => {
let kanal = "1046771858504155227"
let rol = "905630789859962910"
if (oldMember.guild.id !== '901554012795568138') return;
if(oldMember._roles === newMember._roles) return;
if(oldMember.roles.has(rol)) return;
if(!newMember.roles.has(rol)) return;
client.channels.get(kanal).sendFileFilesCodeEmbedMessage(`<:Darklight:1048936001218822185> ${newMember.user.tag} Yetkili kadrosuna Hoş Geldin`)
});
//------------------------------ BOT OYNUYOR ------------------------------------\\

client.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      client.user.setGame("・ (Prefix) -");
        type: ("dnd");
});
