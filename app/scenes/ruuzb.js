const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const translate = require('@vitalets/google-translate-api');


const ruuzb = new BaseScene("ruuzb");

ruuzb.enter(ctx => {
  ctx.reply('Welcome to UZB - ENG translation bot!\n\n' +
  "Tarjima qilinadigan matningizni kiriting:\n\n",
  Markup.keyboard([
    ["🔙 Back to main menu"]
  ]).resize().placeholder('Enter your text')
  );
});

ruuzb.on("text", ctx => {
  const message = ctx.message.text;
  if (message === "🔙 Back to main menu") {
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

ruuzb.command('start', ctx => {
  ctx.scene.enter('main');
});
ruuzb.use((ctx) => ctx.scene.reenter());


module.exports = ruuzb;

