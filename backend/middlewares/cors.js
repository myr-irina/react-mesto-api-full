// const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
// const allowedCors = [
//   'https://mesto.mesto.students.nomoredomains.monster',
//   'https://api.mestoproject.students.nomoredomains.club',
//   'http://mesto.mesto.students.nomoredomains.monster',
//   'http://api.mestoproject.students.nomoredomains.club',
//   'http://localhost:3000',
// ];

// // eslint-disable-next-line consistent-return
// module.exports = (req, res, next) => {
//   const { method } = req;
//   const requestHeaders = req.headers['access-control-request-headers'];
//   const { origin } = req.headers;

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Credentials', 'true');
//   }

//   if (method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//     res.header('Access-Control-Allow-Headers', requestHeaders);
//     return res.end();
//   }

//   next();
// };
