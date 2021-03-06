const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const uzbeng = new BaseScene("enguzb");

uzbeng.enter(ctx => {
  ctx.reply('π¬π§ ENG - πΊπΏ UZB\n\n' +
  "Enter your text to translate:\n\n",
  Markup.keyboard([
    ["π Back to main menu"]
  ]).resize().placeholder('Enter your text: ')
  );
});

uzbeng.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "π Back to main menu") {
    return ctx.scene.enter("main");
  }
  if (message=="/start") {
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

