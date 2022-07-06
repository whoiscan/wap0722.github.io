const dns = require('dns');
dns.resolve4('www.miu.edu', (err, addresses) => console.log('IP Address (Resolve4): %s', addresses));
dns.lookup('www.miu.edu', function (err, res) {
    console.log('IP Address (Lookup): %s', res);
});