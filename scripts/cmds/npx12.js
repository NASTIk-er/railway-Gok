const axios = require("axios");
module.exports = {
  config: {
    name: "npx12",
    version: "1.0.1",
    author: "Gok",
    countDown: 5,
    role: 0,
    shortDescription: "Send hot video on emoji trigger",
    longDescription: "Sends a hot video reply when certain emojis are used at the start of a message.",
    category: "no prefix"
  },

  onChat: async function ({ api, event, message }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    const content = body.toLowerCase();

    // Trigger emojis
    const triggers = ["🥵", "💋", "🫦", "👅", "👄", "🔥"];
    const isTriggered = triggers.some(emoji => content.startsWith(emoji));
    if (!isTriggered) return;

    // List of video links
    const videos = [
      "https://files.catbox.moe/9y20cv.mp4",
      "https://files.catbox.moe/a6qzh9.mp4",
      "https://files.catbox.moe/7y129u.mp4",
      "https://files.catbox.moe/2f16gy.mp4",
      "https://files.catbox.moe/ngcvrh.mp4",
      "https://files.catbox.moe/vqrlbg.mp4",
      "https://files.catbox.moe/n2qe9k.mp4",
      "https://files.catbox.moe/kkgf7l.mp4",
      "https://files.catbox.moe/z5qlny.mp4",
      "https://files.catbox.moe/cn52xm.mp4"
    ];

    const selected = videos[Math.floor(Math.random() * videos.length)];

    try {
      const response = await axios.get(selected, { responseType: "stream" });

      await message.reply({
        body: "●❯────────────────❮●\n         -♦𝐓𝐀𝐍𝐕𝐈𝐑-𝐁𝐎𝐓♦-         \n●❯────────────────❮●\n•┈✤⋆⃝🥵লু্ঁচ্চা্ঁগু্ঁলা্ঁ সঁর্ এ্ঁনঁতে্ঁ•✤'⋆⃝💚😘\n●❯────────────────❮●",
        attachment: response.data
      });

      api.setMessageReaction("🖤", messageID, () => {}, true);
    } catch (err) {
      console.error("Failed to fetch video:", err);
      message.reply("⚠️ ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
