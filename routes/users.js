var express = require('express');
var iconv = require("iconv-lite");
var BufferHelper = require('bufferhelper');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    //hel("hahaha", res);
    myreq.req(res);
});
function hel(a, f) {
    setTimeout(function () {
        f.send(a);
    }, 5000);
}
var myreq = (function () {
    var myrequest = require('request');

    function req(r) {
//        var opt = {
//            url: 'http://pt.csust.edu.cn/eol/homepage/common/index.jsp',
//            //url: "http://bbs.nju.edu.cn/bbstcon?board=S_Information&file=M.1367076046.A",
//            headers: {
//                'Host': 'pt.csust.edu.cn',
//                'Connection': 'keep-alive',
//                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//                'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36',
//                'Accept-Encoding': 'gzip, deflate, sdch',
//                'Accept-Language': 'zh-CN,zh;q=0.8'
//            },
//            Encoding:'GBK'
//        };
//        var bufferhelper = new BufferHelper();
//        myrequest(opt, function (error, response, body) {
//                if (!error && response.statusCode == 200) {
//                    //console.log(response.headers['set-cookie'][0]);
//                    bufferhelper.concat(body);
//                    //var data = iconv.decode(bufferhelper.toBuffer(), 'GBK');
//                    console.log(body);
//                    r.send(body);
//                }
//                console.log(error);
//            }
//        );
        var myhttp = require('http');
        var url = "http://pt.csust.edu.cn/eol/homepage/common/index.jsp";

        function getFromURL() {
            var req = myhttp.get(url, function (res) {
                var buffer = new BufferHelper();
                res.on('data', function (data) {
                    buffer.concat(data);
                }).on('end', function () {
                    var buf = buffer.toBuffer();
                    var str = iconv.decode(buf, 'GBK');
                    console.log(str);
                    r.send(res.headers['set-cookie'][0] + '\r\n' + str);
                }).on('close', function () {
                    console.log('Close recevied!');
                });
            });
            req.on('error', function (error) {
            });
        }

        getFromURL();
    }

    return {
        req: req
    }
})();

module.exports = router;
