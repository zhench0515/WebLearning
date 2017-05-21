require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// 网站访问计数器
var fs = require('fs')
const fileName = 'counter.txt'
app.use(express.static('wwwroot'))
app.get('/counter', (req, res) => {
  function send(count) {
    res.status(200).send(count + '').end()
  }
  fs.exists(fileName, exists => {
    if (exists) {
      fs.readFile(fileName, (err, data) => {
        var count = parseInt(data)
        count++

        if (!isNaN(count)) {
          fs.writeFile(fileName, count, err => {
            send(err ? 0 : count)
          })
        }
        else { send(0) }
      })
    }
    else {
      fs.appendFile(fileName, '1', err => {
        console.log(err)
        send(err ? 0 : 1)
      })
    }
  })
})

// 登录注册后台
const   bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        multer = require('multer');
       
const   storage = multer.diskStorage({
            destination: 'www/uploads',
            filename: function(req, file, callback){
                // 读取cookie里的用户名
                var petname = req.cookies.petname
                callback(null, `${petname}.jpg`)
            }
        }),
        uploads = multer({storage});

// app.use(exp.static('../src/assets/www'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
/*--------------------注册--------------------*/
app.post('/user/register', (req, res) => {
  req.body.ip = req.ip
  req.body.time = new Date()
  function send(code, message) {
    res.status(200).json({ code, message })
  }
  function saveFile() {
    // 指定文件名
    var fileName = `users/${req.body.petname}.txt`
    fs.exists(fileName, exists => {
      if (exists) {
        send('registered', '用户名已经注册过了！')
      }
      else {
        fs.appendFile(fileName, JSON.stringify(req.body), err => {
          if (err) {
            send('file error', '抱歉，系统错误...')
          }
          else {
            send('success', '恭喜，注册成功！请登录...')
          }
        })
      }
    })
  }
  fs.exists('users', exists => {
    if (exists) {
      saveFile()
    }
    else {
      fs.mkdir('users', err => {
        if (err) {
          send('file error', '抱歉，系统错误...')
        }
        else {
          saveFile()
        }
      })
    }
  })
})
// /*--------------------登录--------------------*/
app.post('/user/signin', (req, res) => {
  var fileName = `users/${req.body.petname}.txt`

  function send(code, message) {
    res.status(200).json({ code, message })
  }
  fs.exists(fileName, exists => {
    if (exists) {
      fs.readFile(fileName, (err, data) => {
        if (err) {
          send('file error', '抱歉，系统错误...')
        }
        else {
          var user = JSON.parse(data)
          if (user.password == req.body.password) {
            // 把用户名写入cookie
            res.cookie('petname', req.body.petname)
            // 此处需要加密

            send('success', '登录成功...')
          }
          else {
            send('signin error', '用户名或密码错误！')
          }
        }
      })
    }
    else {
      send('register error', '用户名未注册！')
    }
  })
})
// /*--------------------退出--------------------*/
app.get('/user/signout', (req, res) => {
  // 清除cookie
  res.clearCookie('petname')
  res.status(200).json({ code: 'success' })
})
// /*--------------------提问--------------------*/
app.post('/ask', (req, res) => {
  // 先取得cookie里的用户名
  var petname = req.cookies.petname
  function send(code, message) {
    res.status(200).json({ code, message })
  }
  if (!petname) {
    send('signin error', '请重新登录...')
    return
  }
  var time = new Date()
  req.body.petname = petname
  req.body.ip = req.ip
  req.body.time = time
  function saveFile() {
    // 指定问题文件名
    // getTime()得到毫秒数
    var fileName = `questions/${time.getTime()}.txt`
    fs.appendFile(fileName, JSON.stringify(req.body), err => {
      if (err) {
        send('file error', '抱歉，系统错误...')
      }
      else {
        send('success', '问题提交成功！')
      }
    })
  }
  fs.exists('questions', (exists) => {
    if (exists) {
      saveFile()
    }
    else {
      fs.mkdir('questions', err => {
        if (err) {
          send('file error', '抱歉，系统错误...')
        }
        else {
          saveFile()
        }
      })
    }
  })
})
// /*--------------------头像--------------------*/
// photo表示input的name属性的值
app.post('/user/photo', uploads.single('photo'), (req, res) => {
  res.status(200).json({ code: 'success', message: '上传成功' })
})
/*--------------------首页--------------------*/
app.get('/questions', (req, res) => {

  function send(code, message, data) {
    res.status(200).json({ code, message, data })
  }
  function readFiles(i, files, questions, complete) {
    if (i < files.length) {
      fs.readFile(`questions/${files[i]}`, (err, data) => {
        if (!err) {
          questions.push(JSON.parse(data))
        }
        // 递归调用：自身调用自身
        readFiles(++i, files, questions, complete)
      })
    }
    else {
      complete()
    }
  }
  // files指的是questions目录下的所有问题的文件名
  // files是数组类型
  fs.readdir('questions', (err, files) => {
    if (err) {
      send('file error', '抱歉，系统错误...')
    }
    else {
      files = files.reverse()
      var questions = []
      readFiles(0, files, questions, function () {
        send('success', '读取数据成功！', questions)
      })
    }
  })
})
// /*--------------------回答--------------------*/
app.post('/answer', (req, res) => {
  var petname = req.cookies.petname

  function send(code, message) {
    res.status(200).json({ code, message })
  }

  if (!petname) {
    send('signin error', '请重新登录...')
    return
  }
  console.dir(req.body)
  var filename = `questions/${req.body.question}.txt`
  console.log(filename)
  req.body.petname = petname
  req.body.ip = req.ip
  req.body.time = new Date()
  // 向“问题”后面追加“答案”
  fs.readFile(filename, (err, data) => {
    if (err) {
      send('file error', '抱歉，系统错误...')
    }
    else {
      var question = JSON.parse(data)
      if (!question.answers) question.answers = []

      question.answers.push(req.body)

      fs.writeFile(filename, JSON.stringify(question), err => {
        if (err) {
          send('file error', '抱歉，系统错误...')
        }
        else {
          send('success', '回答提交成功！')
        }
      })
    }
  })
})

// 模拟服务器返回数据，在这里写入接口
var appData = require('../resourse.json')
var books = appData.books
// var htmlcss=appData.books.htmlcss
// var jquery=appData.books.jquery
// var javascript=appData.books.javascript
// var ajax=appData.books.ajax
// var node=appData.books.node
// var others=appData.books.others
var apiRoutes = express.Router()
apiRoutes.get('/books', function (req, res) {
  res.json({
    data: books
  })
})
app.use('/api', apiRoutes)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
