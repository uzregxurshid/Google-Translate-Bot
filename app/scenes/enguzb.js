const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbeng = new BaseScene("enguzb");

uzbeng.enter(ctx => {
  ctx.reply('Welcome to UZB - ENG translation bot!\n\n' +
  "Enter your text to translate:\n\n",
  Markup.keyboard([
    ["🔙 Back to main menu"]
  ]).resize().placeholder('Enter your text')
  );
}).on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 Back to main menu") {
    return ctx.scene.enter("main");
  }
  translate(message, {
    from: 'en',
    to: 'uz'
  })
  .then(res => {
    ctx.reply(res.text);
  }
  )
}).command('start', ctx => {
  ctx.scene.enter('main');
}).use((ctx) => ctx.scene.reenter());

module.exports = uzbeng;

