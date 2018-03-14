var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var EnviroMeasure = sequelize.define('enviro', {
    measureTime: Sequelize.TEXT,
    temperature: Sequelize.FLOAT,
    pressure: Sequelize.FLOAT,
    brightness: Sequelize.FLOAT
}, {
    timestamps: true,
    instanceMethods: {
        toJSON: async function () {
            return {
                // This is a unique id that is generated automatically
                id: this.id,
                // This also comes for free
                createdAt: this.createdAt,
                createdAt: this.createdAt,
                measureTime: this.measureTime,
                temperature: this.temperature,
                pressure: this.pressure,
                brightness: this.brightness,
      };
    },
  },
});

module.exports = EnviroMeasure;
