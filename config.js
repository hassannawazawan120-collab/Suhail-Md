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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923414047467";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_55_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImR2UnJNVDhlL2RlK1NGN1Rmd1Z4OFpjNGdHOGpFZ2gvWlg1VjFRWTJsR009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE0MDQ3NDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzkwQTg3MTQzREY1QjYzMjNGRjA5NUVBNDc1MjkzOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NzM2OTQ1MDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTQwNDc0NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNjdCNkY0MTQ2NTI5N0ZDN0E3MEFGOUVBMzhGODFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc3MzY5NDUwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0UEFCYzBHU1FQNlZuUVRqM3dvR0h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3MDUyN2MxLWU2MTQtNGQ1OC04NDhiLTA0YzAyY2ZlMDk2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxMzYsXG4gICAgICAxNDIsXG4gICAgICAyNDUsXG4gICAgICAxNDQsXG4gICAgICA0MSxcbiAgICAgIDIzNSxcbiAgICAgIDU1LFxuICAgICAgMTIsXG4gICAgICAxNTksXG4gICAgICAxNzcsXG4gICAgICA4NCxcbiAgICAgIDk4LFxuICAgICAgMzAsXG4gICAgICAxNzQsXG4gICAgICA4MSxcbiAgICAgIDE4OSxcbiAgICAgIDkxLFxuICAgICAgMjUwLFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDI0MSxcbiAgICAgIDU2LFxuICAgICAgMTgwLFxuICAgICAgMTU3LFxuICAgICAgNyxcbiAgICAgIDQzLFxuICAgICAgMTg3LFxuICAgICAgMTEzLFxuICAgICAgMjE5LFxuICAgICAgNzMsXG4gICAgICAxODAsXG4gICAgICAxODEsXG4gICAgICAyOCxcbiAgICAgIDIyMixcbiAgICAgIDQzLFxuICAgICAgNjYsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pMGdwWUZFS0RjNGMwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3MxQVpQWnZWZDFOTEZsQVRFZFJaTFgrRzNKbXZHSDAveEU1RnF0QmN4az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkRTR1MzRwOXB0aUtXa3lhV1Y1UTR4SnpHdUgyR2NXMEI3aHZGTGt0a2ZzT3VNTXZJV0ZBR2M1NHdJYXJGTVFhY3F1T28za0I3T2luaVVMV0lBWE9DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFam5nMCt4d2N2blhjRittSEVoWjQ1cGpaQnZmZ3lZQmIycGkzNHBjOXczcTRIZUdUUEp5TERSeUJqSUNKNFhUemNuSjh4aTVLSENNdjRvdkp5dkxBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzczNjk0NTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUVtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLS2tHUWtjUWlFOVp4U3hOSDh5YjB6Z0ZtUWFlK24zSk52UHp4TFpsbzM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODgzNTQxMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc3MzY5NDUwNDgyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
