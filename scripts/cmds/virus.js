const fs = require("fs");
const path = __dirname + "/chicken_status.json";

// Ensure the status file exists
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify({ enabled: true }, null, 2));
}

function getStatus() {
  const data = fs.readFileSync(path);
  return JSON.parse(data).enabled;
}

function setStatus(value) {
  fs.writeFileSync(path, JSON.stringify({ enabled: value }, null, 2));
}

module.exports = {
  config: {
    name: "chicken",
    version: "1.1",
    author: "SAIF + ChatGPT",
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "Responds to 🐤 or 🐥"
    },
    longDescription: {
      en: "Replies to chicken emojis. Can be turned on/off"
    },
    category: "fun",
    guide: {
      en: "{pn} [on/off] — to enable or disable auto-reply\nJust sending Virus or virus triggers reply when on"
    }
  },

  onStart: async function ({ args, message, event, role }) {
    if (args[0] === "on") {
      
      return message.reply("✅ 𝐕𝐢𝐫𝐮𝐬 𝐚𝐮𝐭𝐨-𝐫𝐞𝐩𝐥𝐲 𝐢𝐬 𝐧𝐨𝐰 𝐎𝐍.");
    } else if (args[0] === "off") {
      setStatus(false);
      return message.reply("❌ 𝐕𝐢𝐫𝐮𝐬 𝐚𝐮𝐭𝐨-𝐫𝐞𝐩𝐥𝐲 𝐢𝐬 𝐧𝐨𝐰 𝐎𝐅𝐅.");
    } else if (args.length > 0) {
      return message.reply("⚙️ Usage: 𝐕𝐈𝐑𝐔𝐒 [on/off]");
    }
  },

  onChat: async function ({ message, event }) {
    const content = event.body;

    if (!getStatus()) return;

    if (content && (content.includes("Virus") || content.includes("virus"))) {
      return message.reply("GOK 𝗥𝗲𝗽𝗹𝘆 GOK 𝗥𝗲𝗽𝗹𝘆 𝗗𝗜 𝗠𝗔 𝗗𝗔 𝗬𝗔𝗔𝗥 🤩ENTER PARGAT DA💥 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P <3 :P 
    }
  }
};
