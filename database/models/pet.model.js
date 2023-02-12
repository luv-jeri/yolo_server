const { model } = require('mongoose');
const petSchema = require('../schemas/pet.schema');
const atlasPlugin = require('mongoose-atlas-search');

petSchema.index({ descriptions: 'text' });
petSchema.index({ name: 1 });

const petModel = model('Pet', petSchema);

module.exports = petModel;
