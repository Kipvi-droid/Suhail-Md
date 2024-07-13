const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_24_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWJhQ3ZidFRieEVrUTdzOW1ZVmpCbVUzMGhRVlRwU1gxODNtMjd4WExZbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmRvWUVqVzJROU9Eb0c4UDc5Z2Q5QVwiLFxuICBcInBob25lSWRcIjogXCI4YmRjNWIyNC0yYzQ3LTQzMmItYjI2Mi05OWI2MGQwMDc1YWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA5MCxcbiAgICAgIDIxNixcbiAgICAgIDE1MixcbiAgICAgIDM3LFxuICAgICAgMjM3LFxuICAgICAgNzEsXG4gICAgICA4MyxcbiAgICAgIDE2MixcbiAgICAgIDkwLFxuICAgICAgMTUzLFxuICAgICAgOSxcbiAgICAgIDkzLFxuICAgICAgMTc5LFxuICAgICAgNTksXG4gICAgICA2NixcbiAgICAgIDE2LFxuICAgICAgNjQsXG4gICAgICA2OCxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA3MixcbiAgICAgIDI0MyxcbiAgICAgIDE0MCxcbiAgICAgIDE5OSxcbiAgICAgIDM1LFxuICAgICAgMTg4LFxuICAgICAgMTM5LFxuICAgICAgMjUwLFxuICAgICAgMjM4LFxuICAgICAgMjAwLFxuICAgICAgMTA1LFxuICAgICAgMjAsXG4gICAgICA2OCxcbiAgICAgIDE3NSxcbiAgICAgIDcwLFxuICAgICAgMTc4LFxuICAgICAgMTY2LFxuICAgICAgMTc2LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlQzNFhCMTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMTY0NTkzMDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkbPwnZKa8J2SivCdko/wnZKILi4uXCIsXG4gICAgXCJsaWRcIjogXCIzODYyOTMzODU2Njg0NToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRFZpWEVRZ2VITHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRsR1cwUitJcGIvMWN1Mks3Vm95eDJQUEdoSnNtMk83czZVb3VvR3JyRjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0xOemxpai90VnZzWXlKOUVlR1ZMUkcyamdZeFpER0xLQ2JPcGVJeGQ1Qi9XcjJ1elgzM1FzS25iK2cvaWd0L2ZQcHFFcFFyREI0dXdLUjM4M1UzREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXVjc2d2ZlhmTmtVSFQ0UWZsWDVmemVJOVZuN3JUMUY4ZzhhZnBvd3BZTWxMQTdWOU5CSGphdzFYNk9HdnMxNVFOV1h5RklUY2hrOXBlSWcxcWR5aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzExNjQ1OTMwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkwNTg2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp1elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWVJdksxdEpEcGZManlaNnVKeTNOZ2UzRFBwOVJOWnVYUEYwcnhqRUtGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzcxMzY1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
