var express = require('express');
var myrequest = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
    myreq();
});

function myreq() {
    var opt = {
        url:'http://pt.csust.edu.cn/eol/homepage/common/index.jsp',
        headers: {
            'Host': 'pt.csust.edu.cn',
            'Connection': 'keep-alive',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate, sdch',
            'Accept-Language': 'zh-CN,zh;q=0.8'
        }
    };
    myrequest(opt, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.headers['set-cookie'][0]);
            //console.log(body);
        }
        console.log(error);
    })
}

module.exports = router;
