//SCRIPT RECODE BY FANGZ 💌
// JANGAN DI HAPUS📣

//BUY NO ENC? CHAT wa.me/6288215689772
//GITHUB: https://github.com/Fangzbotz2007

//GA TAU CARA EDIT NYA? CHAT AUTHOR↑↑↑

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/tasty_futuree' //Instagram mu
global.sgh = 'https://github.com/TastyFuture' //Github mu
global.sgc = 'https://chat.whatsapp.com/Fg5TAdmbOZT5jl5emJMeod' //Group WhatsApp mu
global.sdc = '-' //Discord Mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini ana gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '088215689772' //Dana
global.povo = '088215689772' //Ovo
global.pgopay = '081296728194' //Gopay
global.ppulsa = '088293742724' //Pulsa 
global.ppulsa2 = '-' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = 'https://saweria.co/syakata' //Saweria

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6281296728194' //Nomor Bot mu
global.nomorown = '6288293742724' //Nomormu
global.namebot = '꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' //Nama bot mu
global.nameown = 'Syakata' //Nama mu


/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  [], //Owner1
  [], //Owner2
  [], //Owner3
  ['6288293742724', 'Syakata', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ ⁩இ 」' //Wm
global.wm2 = '➳༻❀ Bot By Syakata ❁ུ۪۪.;:୭̥.' //Name Wm
global.wm3 = '⫹⫺ ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ'
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = '꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' //Titlenya
global.author = '                ✧ Syakata⁩ ✧' //Wm author


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/f16384e84c0b687087904.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/312d5d7a5ad4d4f8b5d7a.jpg'
global.thumbbc = 'https://telegra.ph/file/3377bec81cd8614917d24.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.eror = '《 ACCESS DENIED 》'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/0b42f219535e17ade5e48.jpg'

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// GAUSAH DI GANTI.
global.dmenut = '❏───···─────〈' //top
global.dmenub = '│✶' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '┗───···─────✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━━━═┅═✦ *DASHBOARD* ❏═┅═━━━━━┅'
global.cmenut = '✦╍╌╌╍╌╌╍ ◸'                       //top
global.cmenuh = '◿ ╍╌╌╍╌╌╍'                        //header
global.cmenub = '│◛ '                            //body
global.cmenuf = '╰───···─────\n'                //footer
global.cmenua = '\nBy https://github.com/Fangzbotz2007\n     ' //after
global.pmenus = '│'                              //pembatas menu selector

global.htki = '––––––◸' // Hiasan Titile (KIRI)
global.htka = '◿––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '𖥸'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = '2022'
global.stickauth = `© ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ`

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
