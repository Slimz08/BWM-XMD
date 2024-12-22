const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWW+rOBj9L34tvWEnRKo0hGwkISRkz+hqZMAsCdiATSip8t+v6KL2Ye6dDk8W4OPjs3wvAJOEohlqQO8F5GVyhQy1S9bkCPRAvwpDVAIOBJBB0AO245Ur27jQgb5UJ8PhInUSZGoNHEz9ldSX8yHRL/vhaSr5T+DOgbzy0sT/A2Cw6ixcp+7cHLZE/sZ8RhvS2aP9hjW3nTLDFSliNrSP3lZ+AvcWESZlgqNhHqMMlTCdoWYJk/J79GFfKUcHQldY2fOpWSyaaq2pjZFleSV1M9eTdQXrM5KOyffoV10sZX5aaTPkpak4W9S6Im3F47XKUrqO6ECq3c28T7f18Y0+TSKMAitAmCWs+bbu0WjkbSKhQK4B41ofdBs4dbuaNmxOxTyKkhmeX5SZu6p5+3vE91uI61Fp8ZW7OeuCEQzKqC8gQbBqkk8uqJHmUGi6l9Mt+kp8WX5k5fJ/dLcMLYZx0xkd6fVAYkE5rsLb5oxtgv3IHCm75FZs151jMaHfo5/mfn9hpolEbmm4J5drKjpSHhEFlXWDpuLR2TfqNk+zjP+kD1lV/jHcdDhE/AFvVjuUnaxSNPY3gzzIq5E2euiTqXgWh4u6tJbGTowkHq/lS7SHK5FnoZcu6NUfG9lhcMaojlJpF0+QcNoMoqfXG11QYwWgJ9w5UKIooayELCG4fafoHIDBdY38ErFXdYFsLqCbk1QWVIf44emE9wevieydPXNgRcJ5Nj9XzkTotDXjQF4SH1GKgklCGSkbG1EKI0RB7++fHMDomb351p6mChwIk5KyLa7ylMDgw9SPj9D3SYXZusG+2S5QCXr852vEWIIj2spYYVj6cXJFZgwZBb0QphTdORCga+KjFg/Is+c+i67hal78cyrMQie2cDJayjHBb79Av+vxgS8++nJXepT9bvjYDXX/UeS1rgq1AIkSDziQvFem3fNbBwe7LM3ccHKWOxTHhRYf1mouri2923114U16VKIA9FhZIQ540L9U+YZcEP4DrrwsnlN75j5czo12lNWDGEfbpKG4IV9w3ywFvZfPMWWSoMUT5KUxmh+XgAPZawKT9uaiyuuapKmirkg9VfqL/qhbIWGe/8CItbjvorc7AsRgklLQA6aFi1KtR8PFIMQeHY8NKzLMqFX1w6SPsL+laRWNhXL9UG7ngUYsb3otjPP0JnWuZuXaysBYsOgy9olNI/npX0BAD6hyAbcp9Z5JNdDUQNzPxzdth4rGc67L4WDLB9394mZqAT3qoT3GxQG6RZisHo7eAy+Snee727k9HfVd6g2XrDhFQmquntrT3sLy9bB1sd+cul7mmKuZLMdb5j9LbqVMNtVCtGwbCoEQq5XT7PKlLMxqQUr4HApKfHQsi6aettw9V6KpdLKxTuXpLI3jgpjvNXwdA+n7+E1eG/LyHq0wQa/TDMPWov8y52vK+Tv3BeN9Pv4mSf2t1WeQvxaCKSHVHDeeGlmNr3e0urxsnFU98I7TPp4N5pYD7vefHMhTyEJSZm1VcFCSJAAcSCFlxmdRN0mGKINZDnqCJsldSeR1hQNZY+T5mkH20W9gtI81uID7L0ht5f76BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝛭𝛯𝐿𝐿𝛩",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 𝛭𝛯𝐿𝐿𝛩",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

