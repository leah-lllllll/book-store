const isPro = Object.is(process.env.NODE_ENV, 'production')
 
console.log(isPro);
 
module.exports = {
  baseUrl: isPro ? 'http://47.101.69.44:5000/' : 'api/'
}

