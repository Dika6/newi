let fs = require('fs')
let chalk = require('chalk')
global.owner = ['6281252848955']
global.autoread = false
global.selfmode = false
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = 'SHOLEH GANS'
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Selamat tinggal @user`,
promote: '@user Sekarang admin!',
demote: '@user Sekarang bukan admin!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.server = false
global.prefix = '🐤'
global.author = '@naaaanndo'
global.packname = 'WhatsApp Bot'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://rikka-api.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me',
  caliphAPI: 'https://api.caliph71.xyz'
}

global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'NOT-PREMIUM',
   'https://api.lolhuman.xyz': '1fdcdd479b5c1f5a32565d1a',
  'https://api.xteam.xyz': '533cd93c6e5d4e4f'
,
  'https://api.zeks.me': 'nandowangy',
  'https://rikka-api.xyz': 'mRQLcpUQ',
   'https://api.caliph71.xyz': 'mRQLcpUQ'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
