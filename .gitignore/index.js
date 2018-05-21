const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!!";

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("je suis pret !")
    client.user.setGame("!!help");
});

client.on("message", message => {
    
    if(message.content === "Bonjour"){
        message.reply("salut je m'appelle ultrabot");
        console.log("le bot dit bonjour je m'appelle ultrabot");
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0066CC")
        .setTitle("voici mes commandes aide/this is my help command")
        .setDescription("je suis un bot moderation voici mes commandes !")
        .addField("!!help", "Affiche les commandes du bot !")
        .addField("Bonjour", "le bot repond !")
        .addField("!!statistiques", "Le bot vous envoie des informations sur votre profil !")
        .setFooter("menu aide - !!help")
        message.channel.sendMessage(help_embed);
        console.log("un utilisateur a effectuer la commande help")
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 
        case "statistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#000033")
        .setTitle(`statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de creation de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes message prives ; Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
    }
});
