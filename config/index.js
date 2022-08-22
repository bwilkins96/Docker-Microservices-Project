require('dotenv').config()

console.log('\n---------------------------------\n')
console.log('heyyyyyyyy over here!!!!!!!!')
console.log('username:', process.env.DB_USERNAME)
console.log('password:', process.env.DB_PASSWORD)
console.log('database:', process.env.DB_DATABASE)
console.log('host:', process.env.DB_HOST)
console.log('\n---------------------------------\n')

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
};
