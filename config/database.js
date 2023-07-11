module.exports = ({ env }) =>({

  connection:{
    client: 'postgres',
    connection:{
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false)
    },
    pool: {
      min: 0,
      max:1
    }
  }
  // nome: Jean
  // Carlos
  //jean.aires21@gmail.com
  // 980922Ged*
})
