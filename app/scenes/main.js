const { Scenes, Markup } = require("telegraf");
const { BaseScene } = Scenes;

const mainScene = new BaseScene("main");

mainScene.enter(ctx => {
  ctx.reply(
    'Welcome to UZB - ENG translation bot!\n\n' +
    'Please, select one of the following options:\n\n' +
    '1. Translate from Uzbek to English\n' +
    '2. Translate from English to Uzbek\n' +
    '3. Info',
    Markup.keyboard([
      ["🇺🇿 UZB - 🇬🇧 ENG", "🇬🇧 ENG - 🇺🇿 UZB"],
      ["ℹ️ Info"]
    ]).oneTime().resize().placeholder('Select one of the options')
  );
});


mainScene.on("text", ctx=>{
  const message = ctx.message.text;
  switch (message) {
    case "🇺🇿 UZB - 🇬🇧 ENG":
      return ctx.scene.enter("uzbeng");
    case "🇬🇧 ENG - 🇺🇿 UZB":
      return ctx.scene.enter("enguzb");
    case "ℹ️ Info":
      return ctx.scene.enter("info");
    default:
      return ctx.reply("Please, select one of the options");
  }
})


// hande any update for reenter scene
mainScene.use((ctx) => ctx.scene.reenter());

module.exports = mainScene;
