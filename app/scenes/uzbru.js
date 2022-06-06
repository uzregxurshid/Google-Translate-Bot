const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbru = new BaseScene("uzbru");

uzbru.enter(ctx => {
  ctx.reply('Welcome to UZB - ENG translation bot!\n\n' +
    "Tarjima qilinadigan matningizni kiriting:\n\n",
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
    from: 'uz',
    to: 'ru'
  })
    .then(res => {
      ctx.reply(res.text);
    }
    )
}).command('start', ctx => {
  ctx.scene.enter('main');
}).use((ctx) => ctx.scene.reenter());

module.exports = uzbru;

