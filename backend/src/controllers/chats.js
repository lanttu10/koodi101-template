const database = require('../database');

exports.list = async (ctx) => {
  let options = {};

  let result = await database.Chat.findAll(options);
  let chats = await Promise.all(result.map(chat => chats.toJSON()));

  let response = {
    results: chats,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const enviro = await database.Chat.create({
    createdAt: params.createdAt,
    temperature: params.temperature,
    pressure: params.pressure,
    brightness: params.brightness
  });

  ctx.body = await enviro.toJSON();
  ctx.status = 201;
};
