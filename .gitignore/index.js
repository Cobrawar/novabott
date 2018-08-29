


/////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Discord = require('discord.js');
const bot = new Discord.Client();




var prefix = ("!");
var staff = (".");
var pv =("²")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply('Hello');
        console.log('Bot say Hello')
    }
    if(message.content === "Sa va ?"){
        message.reply('Oui, et vous ?');
    }
});


bot.on('message', message => {

    
    bot.user.setAvatar('./bot.png')
        .then (() => console.log('Avatar succesfull'))
        .catch(console.error)
    bot.user.setGame('!help')
        .catch(console.error)


//////////////////////////////////////////////////COMMANDES//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === prefix + "regles") {
        var regles_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les règles :")
        .setDescription("Ou avoir le document complet ici : http://www.mediafire.com/file/hln0gs5qh1bbtc1/R%C3%A8gles.odt")
        .addField("1.   Pas de propos raciste, sexiste ou même discriminants, les insultes, flood, spam compris.")
        .addField("2.   Pour les problémes : ne pas le résoudre seul mais appeller un plus haut grader (Helper, Admin, Modo, Fondateur).")
        .addField("3.   Toutes sanctions appliquées par un Admin ou plus sont à respecters mais peuvent être discutés")
        .addField("4.   En cas de problèmes, en vers un membres (nimporte quel grade), soucis 	technique ; appeller un Modérateur ou plus dans le channel aide-plainte puis attendez dans le channel vocal HELP ou les consigner du gradé.")
        .addField("5.   Tout images ou liens innapropriés (+18 ou non comforme aux règles) sera immédiatement sanctionner par un tempban minimum et supprrimé.")
        .addField("6.   Tout envoie de vidéo est interdit sauf pour la musique dans le salon spécifique (Musique) ---> réservé aux VIP ou plus ")
        message.channel.sendMessage(regles_embed);
        message.delete();
    }

    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Commandes :")
        .addField("1.   !regles")
        .addField("2.   !help")
        .addField("3.   !playlist")
        .addField("4.   !aide")
        .addField("5.   !musique")
        .addField("6.   !grade")
        .addField("7.   !maj")
        .addField("9.   !discution")
        .addField("10.  !pt")
        .addField("Commandes Admin :")
        .addField("1.   .kick @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("2.   .ban @pseudo  ---> réservé au grade Admin ou plus ")
        .addField("3.  .mute @pseudo  ---> réservé au grade Admin ou plus")
        .addField("4.  .clear @pseudo ---> réservé au grade Admin ou plus")
        
        
        message.channel.sendMessage(help_embed);
        message.delete();
    }

    if (message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Aide :")
        .addField("Besoin d'aide ?")
        .addField("1° Demandez de l'aide dans le salon écrit aide-plainte et attendez une réponse de la part d'un gradé")
        .addField("2° Suivez la procédure demander")
        message.channel.sendMessage(aide_embed);
        message.delete();
        
    }

    if (message.content === prefix + "playlist") {
        var playlist_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les différentes Playlists :")
        .addField("Cobrawar (tout) : https://open.spotify.com/user/cobrawar/playlist/0Id4qeWtenUD3puIUBAZ5W?si=EomHqtLPSOe_Lx77IML6Jw")
        .addField("Miradyn (rap) : https://open.spotify.com/user/thomas77780/playlist/5bV0Cc9VjWpVpoRCQMt4HV?si=3SCH0FgtQH-tz7VucVpk2A")
        .addField("PowerGaming (Cool) : https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6taq20FeuKj?si=WgNUWwrwS-SHN2tlfsovVQ")
        message.channel.sendMessage(playlist_embed);
        message.delete();
    }

    if (message.content === prefix + "musique") {
        var musique_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Les commandes du bot de musique : (Vous devez être VIP ou plus)")
        .addField("!join ---> Faire venir le bot dans votre channel")
        .addField("!leave  ---> Faire partir le bot de votre channel")
        .addField("! play + (URL) ---> Faire jouer une musique au bot à partir de youtube ! ")
        .addField("!pause ---> Mettre la musique en pause")
        .addField("!stop ---> Stopper la musique")
        .addField("Proposez des musiques dans le channel musique")
        message.channel.sendMessage(musique_embed);
        message.delete();
      
    }
    
    if (message.content === prefix + "grade") {
        var grade_embed = new Discord.RichEmbed()
        .setColor("#40A497")
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
        .setColor("#40A497")
        .setTitle("La dernière mise à jour :")
        //.addField("http://www.mediafire.com/file/4di093tdzn4idqg/Nova+2.0.odt")
        message.channel.sendMessage(maj_embed);
        message.delete();

    }

    if (message.content === prefix + "discution") {
        var chat_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Discution :")
        .addField("Le channel Discustion est là pour discuter de tout et de rien sans embrouilles en respectant les règles!")
        message.channel.sendMessage(chat_embed);
        message.delete();

    }
    
    if (message.content === prefix + "candidature") {
        var candidature_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**Candidature : **")
        .addField ("Candidature demandée avec succès, posteée là ! ")
        message.channel.sendMessage(candidature_embed);
        message.delete();
    }

    if (message.content === prefix + "pt") {
        var pt_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Plainte")
        .addField("Faites votre plainte")
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        if(message.mentions.users.size === 1) {
            
        }
    }
   
///////////////////////////////////////////////////COMMANDES STAFF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("I don't know if the user exist");
        }
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("I don't have the permission for mute user");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`${mute.user.username} is mute !`);
        });
        
        message.delete();
    }
    
    
    if(message.content.startsWith(staff + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("I don't know if the user exist");
        }
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
            return message.channel.send("I don't have the permission for mute user");
        }
        if(!message.guild.memeber(client.user).hasPerimission("ADMINISTRATOR")) return message.channel.send("I don't have the permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`${mute.user.username} is now unmute !`);
        });
        
        message.delete();
    }

    if(message.content.startsWith(staff + "clear")) {
        if(!message.guild.member(message.author).hasPermission("CLEAR_MEMBERS")) return message.channel.send("You don't have the permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send("You need to mention an @user");
    }
    var clear = message.guild.member(message.mentions.users.first());
    if(!clear) {
        return message.channel.send("I don't know if the user exist");
    }
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")){
        return message.channel.send("I don't have the permission for mute user");
    }
    clear.clear().then(member => {
        message.channel.send(`${member.user.username}  has been clear by ${message.author.username}`)
    });
    message.delete();
}

///////////////////////////////////////////////////COMMANDES PV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content === pv + "p") {

       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");
       message.reply("PUTEUUH");

       message.delete();

    }

    if (message.content === pv + "noir") {

        message.reply("LE NOIR EST MORT, JE L'AI TUER !!!");
    
        message.delete();

    }
    
















///////////////////////////////////////////////////BLACKLIST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


/////////////////////////////////////////////////MUSIQUE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  
  //if (!message.guild) return;

  if (message.content === '/joinbot') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
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

  if (message.content === '/play' + "") {

    
  }

});

})


bot.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
