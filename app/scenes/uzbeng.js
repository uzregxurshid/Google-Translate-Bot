const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbeng = new BaseScene("uzbeng");

uzbeng.enter(ctx => {
  ctx.reply('🇺🇿 UZB - 🇬🇧 ENG\n\n' +
  "Tarjima qilinadigan matningizni kiriting:\n\n",
  Markup.keyboard([
    ["🔙 Asosiy menyuga qaytish"]
  ]).resize().placeholder('Matnni kiriting: ')
  );
});

uzbeng.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 Asosiy menyuga qaytish") {
    return ctx.scene.enter("main");
  }
  if (message=="/start") {
    return ctx.scene.enter("main");
  }
  translate(message, {
    from: 'uz',
    to: 'en'
  })
  .then(res => {
    ctx.reply(res.text);
  }
  )
});


uzbeng.use((ctx) => ctx.scene.reenter());

module.exports = uzbeng;

