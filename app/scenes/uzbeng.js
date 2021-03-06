const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbeng = new BaseScene("uzbeng");

uzbeng.enter(ctx => {
  ctx.reply('πΊπΏ UZB - π¬π§ ENG\n\n' +
  "Tarjima qilinadigan matningizni kiriting:\n\n",
  Markup.keyboard([
    ["π Asosiy menyuga qaytish"]
  ]).resize().placeholder('Matnni kiriting: ')
  );
});

uzbeng.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "π Asosiy menyuga qaytish") {
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

