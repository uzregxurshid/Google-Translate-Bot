const { Scenes, Markup } = require("telegraf");
const { BaseScene } = Scenes;

const mainScene = new BaseScene("main");

mainScene.enter(ctx => {
  ctx.reply(
    'Select the language you want to translate:\n\n',
    Markup.keyboard([
      ["πΊπΏ UZB - π¬π§ ENG", "π¬π§ ENG - πΊπΏ UZB"],
      ["πΊπΏ UZB - π·πΊ RU", "π·πΊ RU - πΊπΏ UZB"],
      ["βΉοΈ Info"]
    ]).resize().placeholder('Select one of the options: ')
  );
}).on("text", ctx => {
  const message = ctx.message.text;
  switch (message) {
    case "πΊπΏ UZB - π¬π§ ENG":
      return ctx.scene.enter("uzbeng");
    case "π¬π§ ENG - πΊπΏ UZB":
      return ctx.scene.enter("enguzb");
    case "πΊπΏ UZB - π·πΊ RU":
      return ctx.scene.enter("uzbrus");
    case "π·πΊ RU - πΊπΏ UZB":
      return ctx.scene.enter("rusuzb");
    case "βΉοΈ Info":
      return ctx.scene.enter("info");
    default:
      return ctx.scene.reenter();
  }
}).command('start', ctx => {
  ctx.scene.reenter();
}).use((ctx) => ctx.scene.reenter());


module.exports = mainScene;
