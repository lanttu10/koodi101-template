const database = require('../database');

exports.getMeasures = async (ctx) => {
  let options = {};

  let result = await database.Enviro.findAll(options);
  let enviro = await Promise.all(result.map(enviro => enviro.toJSON()));

  let response = {
    results: enviro,
  };

  ctx.body = response;
};

exports.addMeasure = async (ctx) => {
    const params = ctx.request.body;

    const enviro = await database.Enviro.create({
        createdAt: params.createdAt,
        measureTime: params.measureTime,
        temperature: params.temperature,
        pressure: params.pressure,
        brightness: params.brightness
    });
  ctx.body = await enviro.toJSON();
  ctx.status = 201;
};
