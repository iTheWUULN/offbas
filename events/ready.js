﻿const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Client, GatewayIntentBits, Partials, ActivityType, EmbedBuilder, setPosition } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const chalk = require("chalk");
require("dotenv").config();

const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 3
});

module.exports = async (client) => {

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (e) {
    console.error(e);
  }
  
  
  console.log(chalk.green`[START]` + ` ${client.user.tag} bot aktif!`);

  setInterval(async () => {
    const x = ["Stars Team | Yetkili Başvuru"]
        const random = x [
      Math.floor(Math.random() * x.length)];
      client.user.setPresence({
        activities: [{ name: `${random}`, tpye: ActivityType.Listening }],
        status: "idle"
      })
  }, 10000);
};
