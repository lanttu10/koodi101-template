const sequelize = require('./models/sequelize');

exports.Enviro = require('./models/enviro');

exports.sync = (options) => {
  return sequelize.sync(options);
};

exports.transaction = (options) => {
  return sequelize.transaction(options);
};
