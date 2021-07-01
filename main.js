const RPC = require("discord-rpc");
const rpc = new RPC.Client({transport: "ipc"});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Text",
        state: "Too text!",
        startTimestamp: new Date(),
        largeImageKey: "python", 
        largeImageText: "Hmm!",

        smallImageKey: "bot_developer", 
        smallImageText: "Wow!"
    });
    
})

rpc.login({clientId: "792818909844996139" }) // insert here your app id
