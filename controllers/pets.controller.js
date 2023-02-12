const catcher = require('../lib/utils/catcher');
const _Error = require('../lib/utils/_error');
const Pet = require('../database/models/pet.model');
const { genPets } = require('../lib/functions/genPets');
const Features = require('../lib/handlers/features.handler');

module.exports.get = catcher(async (req, res, next) => {
  let pets = new Features(Pet.find(), req.query);

  pets = pets.sort().paginate().select().filter();

  pets = await pets.query;

  res.status(200).json({
    status: 'success',
    data: {
      pets,
    },
  });
});

module.exports.create = catcher(async (req, res, next) => {
  const randomPets = await genPets();

  const pets = await Pet.insertMany(randomPets);

  res.json({
    status: 'success',
    data: {
      pets,
    },
    message: 'Pets created successfully',
  });
});

module.exports.lookup = catcher(async (req, res, next) => {
  const { search, type, age, fee } = req.query;

  const aggregate = [
    {
      $search: {
        index: 'main',
        text: {
          query: search,
          path: {
            wildcard: '*',
          },
        },
      },
    },
  ];

  if (type) {
    aggregate.push({ $match: { type } });
  }

  if (age) {
    aggregate.push({ $match: { age: { $lte: parseInt(age) } } });
  }

  if (fee) {
    aggregate.push({ $match: { fee: { $lte: parseInt(fee) } } });
  }

  const pets = await Pet.aggregate(aggregate);

  res.json({
    status: 'success',
    data: {
      pets,
    },
    message: 'Pets created successfully',
  });
});

module.exports.delete = catcher(async (req, res, next) => {
  const { id } = req.params;

  const pet = await Pet.findByIdAndDelete(id);

  if (!pet) {
    return next(new _Error(`Pet with id ${id} not found`, 404));
  }

  res.json({
    status: 'success',
    data: {
      pet,
    },
    message: 'Pet deleted successfully',
  });
});
