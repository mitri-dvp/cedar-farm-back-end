module.exports = {
  async angusCow(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::angus-cow.angus-cow').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('ANGUS COW :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('ANGUS COW :: ERROR');
    }
  },
  async commercialSheep(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::commercial-sheep.commercial-sheep').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('COMMERCIAL SHEEP :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('COMMERCIAL SHEEP :: ERROR');
    }
  },
  async ewe(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::ewe.ewe').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('EWE :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('EWE :: ERROR');
    }
  },
  async ram(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::ram.ram').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('RAM :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('RAM :: ERROR');
    }
  },
  async sire(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::sire.sire').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('SIRE :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('SIRE :: ERROR');
    }
  },
  async all(ctx) {
    try {
      for (let i = 0; i < 5; i++) {
        await strapi.query('api::angus-cow.angus-cow').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
        await strapi.query('api::commercial-sheep.commercial-sheep').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
        await strapi.query('api::ewe.ewe').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
        await strapi.query('api::ram.ram').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
        await strapi.query('api::sire.sire').create({
          data: {
            uid: `00${i}`,
            name: 'Steve',
            price: 1000,
            dateOfBirth: '1995-01-01',
            weight: 20,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
            sold: false,
            slug: `steve-${i}`,
            publishedAt: '2022-06-25T19:17:32.965Z',
          },
        });
      }
      ctx.send('ALL :: SUCCESS');
    } catch (error) {
      console.log(error);
      ctx.internalServerError('ALL :: ERROR');
    }
  },
};
