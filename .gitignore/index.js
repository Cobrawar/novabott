


/////////////////////////////////////////////////VARIABLES///////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = ("!");
var staff = (".");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
});


bot.on('message', message => {

    bot.user.setUsername('!help')
        .catch(console.error)
    bot.user.setAvatar('./bot.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('Développement')
        .catch(console.error)


//////////////////////////////////////////////////COMMANDES///////////////////////////////////////////////////////////////////////   

    if (message.content === prefix + "regles") {
        var regles_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les règles :")
        .setDescription("Ou avoir le document compet ici : http://www.mediafire.com/file/hln0gs5qh1bbtc1/R%C3%A8gles.odt")
        .addField("1.   Pas de propos raciste, sexiste ou même discriminants, les insultes, flood, spam compris.")
        .addField("2.   Pour les problémes : ne pas le résoudre seul mais appeller un plus haut grader (Helper, Admin, Modo, Fondateur).")
        .addField("3.   Toutes sanctions appliquées par un Admin ou plus sont à respecters mais peuvent être discutés")
        .addField("4.   En cas de problèmes, en vers un membres (nimporte quel grade), soucis 	technique ; appeller un Modérateur ou plus dans le channel HELP puis attendez 	dans le channel vocal HELP.")
        .addField("5.   Tout images ou liens innapropriés sera immédiatement sanctionner par un tempban minimum.")
        .addField("6.   Tout envoie de vidéo est interdit sauf pour la musique dans le salon spécifique")
        message.channel.sendMessage(regles_embed);
        message.delete();
    }

    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Commandes :")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !chat")
        .addField("8.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("9.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("10.  .mute @pseudo  ---> réservé au grade Admin ou plus")
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("Demandez de l'aide dans le salon écrit [Help] et attendez une réponse")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setTitle("Les commandes du bot de musique :")
        .addField("/joinbot ---> Faire venir le bot dans votre channel")
        .addField("/leavebot ---> Faire partir le bot de votre channel")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setTitle("Les différents grades du serveur :")
        .setDescription("Augmenter de garde ? : demander une requête à une Administrateur ou plus")
        .addField("1.   Fondateur : Grade le plus élevé du serveur, tous les droits.")
        .addField("2.   Administrateur : Fait respecter les règles du serveur et aide les Fondateurs ")     
        .addField("3.   Modérateur : Règle les soucis entre joueurs et contribut aux respect des règles")     
        .addField("4.   Helper : Helper : Aide les personnes en difficultés et sert de porte parole")
        .addField("5.   VIP : Grade de membre supérieur, peut insérer des liens et autres")
        .addField("6.   Membre : Grade de base du serveur")
        .addField("7.   Golbute : Grade punit, correspond à un tempban")
        message.channel.sendMessage(grade_embed);
        message.delete();
    }

    if (message.content === prefix + "maj") {
        var maj_embed = new Discord.RichEmbed()
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "chat") {
        var chat_embed = new Discord.RichEmbed()
        .setTitle("Chat :")
        .addField("Le channel Chat est là pour discuter de tout et de rien sans embrouilles.")
        message.channel.sendMessage(chat_embed);
        message.delete();

    }
   
///////////////////////////////////////////////////COMMANDES STAFF//////////////////////////////////////////////////////////////

    if(message.content.startsWith(staff + "kick")) {
        var kick_embed = new Discord.RichEmbed()
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("I don't know if the user exist");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("I don't have the permission for kick user");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username}  has been kicked by ${message.author.username}`)
        });
        message.channel.sendMessage(kick_embed)
        message.delete();
    }


    if(message.content.startsWith(staff + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("I don't know if the user exist");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){
            return message.channel.send("I don't have the permission for ban user");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username}  has been banned by ${message.author.username}`)
        });
        message.delete();
    }

    if(message.content.startsWith(staff + "mute")) {
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("I don't know if the user exist");
        }
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
            return message.channel.send("I don't have the permission for mute user");
        }
        mute.mute().then(member => {
            message.channel.send(`${member.user.username}  has been muted by ${message.author.username}`)
        });
        message.delete();
    }




///////////////////////////////////////////////////BLACKLIST////////////////////////////////////////////////////////////////////


     if (message.content === "fdp") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "pute") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "merde") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "salope") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "enculer") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connard") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "putain") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "connasse") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "saloperie") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ntm") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "nique") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "ta mere") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.content === "gueule") {
        message.reply("Warning !");
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }


/////////////////////////////////////////////////MUSIQUE////////////////////////////////////////////////////////



bot.on('message', message => {
  
  if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    
    }

  }

  if (message.content === '/leavebot') {

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
      .then(deconncetion => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully disconnected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  
  }

}



});

})

bot.login(process.env.TOKEN);
