const { Scenes, Markup } = require("telegraf");
const { BaseScene } = Scenes;

const mainScene = new BaseScene("main");

mainScene.enter(ctx => {
  ctx.reply(
    'Welcome to UZB - ENG translation bot!\n\n' +
    'Please, select one of the following options:\n\n' +
    '3. Info',
    Markup.keyboard([
      ["🇺🇿 UZB - 🇬🇧 ENG", "🇬🇧 ENG - 🇺🇿 UZB"],
      ["🇺🇿 UZB - 🇷🇺 RU", "🇷🇺 RU - 🇺🇿 UZB"],
      ["ℹ️ Info"]
    ]).resize().placeholder('Select one of the options')
  );
}).on("text", ctx => {
  const message = ctx.message.text;
  switch (message) {
    case "🇺🇿 UZB - 🇬🇧 ENG":
      return ctx.scene.enter("uzbeng");
    case "🇬🇧 ENG - 🇺🇿 UZB":
      return ctx.scene.enter("enguzb");
    case "🇺🇿 UZB - 🇷🇺 RU":
      return ctx.scene.enter("uzbrus");
    case "🇷🇺 RU - 🇺🇿 UZB":
      return ctx.scene.enter("rusuzb");
    case "ℹ️ Info":
      return ctx.scene.enter("info");
    default:
      return ctx.reply("Please, select one of the options");
  }
}).command('start', ctx => {
  ctx.scene.reenter();
}).use((ctx) => ctx.scene.reenter());


module.exports = mainScene;
