const fs = require("fs");

module.exports = {
  name: "klipler",
  description: "Tüm klipleri listeleyin",
  execute(message) {
    fs.readdir("./sounds", function(err, files) {
      if (err) return console.log("Unable to read directory: " + err);

      let clips = [];

      files.forEach(function(file) {
        clips.push(file.substring(0, file.length - 4));
      });

      message.reply(`${clips.join(" ")}`).catch(console.error);
    });
  }
};
