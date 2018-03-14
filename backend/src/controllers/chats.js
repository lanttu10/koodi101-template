const database = require('../database');

exports.list = async (ctx) => {
  let options = {};

  let result = await database.Chat.findAll(options);
  let chats = await Promise.all(result.map(chat => chat.toJSON()));

  let response = {
    results: chats,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const chat = await database.Chat.create({
    createdAt: this.createdAt,
    temperature: this.temperature,
    pressure: this.pressure,
    brightness: this.brightness
  });

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
