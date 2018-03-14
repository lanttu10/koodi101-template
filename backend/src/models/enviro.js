var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var EnviroMeasure = sequelize.define('enviro', {
  message: Sequelize.TEXT,
}, {
  timestamps: true,
  instanceMethods: {
    toJSON: async function () {
      return {
        // This is a unique id that is generated automatically
        id: this.id,
        // This also comes for free
        createdAt: this.createdAt,
        temperature: this.temperature,
        pressure: this.pressure,
        brightness: this.brightness,
      };
    },
  },
});

module.exports = EnviroMeasure;
