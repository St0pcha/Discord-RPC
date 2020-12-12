const RPC = require('discord-rpc');

const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: "Тестирование", // 2 текст после названия приложения
        state: "Привет!", // 3 текст после названия приложения
        startTimestamp: new Date(),
        largeImageKey: "image", // в "" вводим название большой картинки, которую загрузили
        largeImageText: "Ты это нашел!", // текст когда ты наводишься на большую картинку

        smallImageKey: "image2", // в "" вводим название маленькой картинки, которую загрузили
        smallImageText: "Вау!" // текст когда ты наводишься на маленькую картинку
    });
    
    console.log(`RPC успешно загружён!`)
})

rpc.login({
    clientId: "" // сюда вводим клиент айди приложения
})