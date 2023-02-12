module.exports.genPets = () => {
  return new Promise((res, rej) => {
    const pets = [];

    const names = [
      'Bella',
      'Charlie',
      'Max',
      'Daisy',
      'Lucy',
      'Rocky',
      'Oscar',
      'Sadie',
      'Rufus',
      'Buddy',
      'Molly',
      'Zoe',
      'Henry',
      'Lola',
      'Alfie',
      'Marley',
      'Bailey',
      'Rusty',
      'Jack',
      'Simba',
      'Willow',
      'Sophie',
      'Cooper',
      'Leo',
      'Jasper',
      'Finn',
      'Nala',
      'Gatsby',
      'Peanut',
      'Duke',
      'Roxy',
      'Winston',
      'Cleo',
      'Thor',
      'Kit',
      'Shadow',
      'Murphy',
      'Tilly',
      'Louie',
      'Rosie',
      'Luna',
      'Scout',
      'Salem',
      'George',
      'Pepper',
      'Elsa',
      'Cookie',
      'Zeus',
      'Tuxedo',
      'Goose',
      'Pippin',
      'Moo',
      'Boots',
      'Honey',
      'Daphne',
      'Harper',
      'Sable',
      'Coco',
      'Ollie',
      'Biscuit',
      'Rascal',
      'Wally',
      'Felix',
      'Brody',
      'Otis',
      'Snowball',
      'Pinky',
      'Jax',
      'Lily',
      'Pixie',
      'Murphy',
      'Max',
      'Cheddar',
      'Oliver',
      'Bodhi',
      'Hazel',
      'Wally',
      'Cleo',
      'Jasper',
      'Emma',
      'Rusty',
      'Ellie',
      'Koda',
      'Goose',
      'Sophie',
      'Minnie',
      'Nala',
      'Luke',
      'Finnegan',
      'Mocha',
      'Rusty',
      'Milo',
      'Pepper',
      'Bonnie',
    ];

    const types = ['dog', 'cat', 'hamster', 'rabbit', 'bird', 'fish', 'ferret', 'turtle'];
    const genders = ['male', 'female'];
    const colors = [
      'black',
      'white',
      'brown',
      'gray',
      'gold',
      'silver',
      'orange',
      'yellow',
    ];

    var descriptions = [
      'This pet is playful and affectionate, always eager for playtime and cuddles. They love chasing balls and playing with toys.',
      'This pet is mischievous and curious, always getting into things and exploring their surroundings. Despite their trouble-making ways, they also love affection from their owners.',
      'This pet is loyal and protective, always alert and ready to defend their family. They have a strong bark and make excellent watchdogs.',
      'This pet is happy-go-lucky and energetic, always eager for playtime and adventure. They have a unique way of communicating and love to run and play.',
      'This pet is gentle and loving, enjoying quiet time and being petted. They are content lounging in sunny windowsills or on cozy blankets.',
      'This pet is energetic and playful, always up for a game of fetch and eager to play with toys. They love going on adventures and exploring.',
      'This pet is confident and independent, not afraid to explore and take on new challenges. They have a regal presence and love to lounge in the sun.',
      'This pet is friendly and social, enjoying the company of people and other animals. They are always up for playtime and love meeting new friends.',
      'This pet is cuddly and curious, always eager for belly rubs and snuggles. They love playing and exploring, and are known for their playful nature.',
      "This pet is loyal and loving, always by their owner's side and eager for walks and playtime. They have a friendly disposition and enjoy meeting new people.",
      'This pet is sweet and playful, always up for playtime with toys and people. They are known for bringing their toys to their owners to play.',
      'This pet is smart and energetic, always eager to learn new tricks and play. They have a strong work ethic and love to herd and play.',
      'This pet is gentle and affectionate, enjoying long walks and naps in the sun. They have a relaxed and laid-back demeanor, and are known for their droopy ears.',
      'This pet is sassy and independent, not afraid to let their owners know what they want. They are playful and love to explore, and have a unique personality.',
      'This pet is playful and affectionate, always eager for playtime with toys and people. They have a beautiful tabby coat and a loveable disposition.',
      'This pet is fun-loving and energetic, always up for a game of fetch and eager for adventure. They are friendly and social, and love meeting new friends.',
      'This pet is curious and mischievous, always getting into things and exploring their surroundings. They have a unique pattern and a loveable disposition.',
    ];

    for (let i = 0; i < 10000; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const gender = genders[Math.floor(Math.random() * genders.length)];
      const age = Math.floor(Math.random() * 10 + 1);
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const fee = Math.floor(Math.random() * 1000 + 100);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const image = `https://placedog.net/500/500?random=${Math.floor(
        Math.random() * 30 + 1
      )}`;

      pets.push({
        name,
        type,
        gender,
        age,
        description,
        fee,
        image,
        color,
      });
    }
    res(pets);
  });
};
