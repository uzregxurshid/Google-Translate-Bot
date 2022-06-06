const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbeng = new BaseScene("enguzb");

uzbeng.enter(ctx => {
  ctx.reply('Welcome to UZB - ENG translation bot!\n\n' +
  "Enter your text to translate:\n\n",
  Markup.keyboard([
    ["🔙 Back to main menu"]
  ]).oneTime().resize().placeholder('Enter your text')
  );
});

uzbeng.on("text", ctx => {
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
});


uzbeng.use((ctx) => ctx.scene.reenter());

module.exports = uzbeng;

