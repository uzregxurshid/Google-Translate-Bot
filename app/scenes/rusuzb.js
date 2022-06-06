const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const rusuzb = new BaseScene("rusuzb");

rusuzb.enter(ctx => {
  ctx.reply('🇷🇺 RU - 🇺🇿 UZB\n\n' +
  "Введите текст для перевода:\n\n",
  Markup.keyboard([
    ["🔙 В главное меню"]
  ]).resize().placeholder('Введите текст: ')
  );
});

rusuzb.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 В главное меню") {
    return ctx.scene.enter("main");
  }
  if (message=="/start") {
    return ctx.scene.enter("main");
  }
  translate(message, {
    from: 'ru',
    to: 'uz'
  })
  .then(res => {
    ctx.reply(res.text);
  }
  )
});


rusuzb.use((ctx) => ctx.scene.reenter());

module.exports = rusuzb;

