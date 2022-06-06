const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbrus = new BaseScene("uzbrus");

uzbrus.enter(ctx => {
  ctx.reply('Welcome to UZB - ENG translation bot!\n\n' +
  "Tarjima qilinadigan matningizni kiriting:\n\n",
  Markup.keyboard([
    ["🔙 Back to main menu"]
  ]).resize().placeholder('Matnni kiriting')
  );
});

uzbrus.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 Back to main menu") {
    return ctx.scene.enter("main");
  }
  if (message=="/start") {
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
});


uzbrus.use((ctx) => ctx.scene.reenter());

module.exports = uzbrus;

