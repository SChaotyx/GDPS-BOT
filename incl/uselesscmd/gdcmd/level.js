exports.run = async(client, message, args) => {
    const GDClient = require("../../lib/GDClient.js");
    const GD = new GDClient();
    const embeds = require("../../lib/embeds.js");
    const emb = new embeds();
    var str = args.slice(0).join(' ');
    GD.levels(str).then( levelData =>{
        if(levelData === "-1"){
            message.channel.send("<@"+message.author.id+">, el nivel no existe.");
            return false;
        }
        let embedData = emb.levels({lvl : levelData[0]});
        console.log(embedData);
        message.channel.send(embedData);
    });
}