const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;


const info = new BaseScene("info");

info.enter(ctx => {
  ctx.reply(
    'Welcome to UZB - ENG translation bot!\n\n' +
    'This bot is created by @xurshid_aliyarov\n\n' +
    'Github: https://github.com/uzregxurshid\n\n'+
    'Channel: https://t.me/div_blocks',
    Markup.keyboard([
      ["🔙 Back to main menu"]
    ]).oneTime().resize().placeholder('Select one of the options')
  );
});

info.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 Back to main menu") {
    return ctx.scene.enter("main");
  }
});


info.use((ctx) => ctx.scene.reenter());

module.exports = info;

