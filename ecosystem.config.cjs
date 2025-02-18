module.exports = {
  apps: [
      {
          name: "zeroverse-agents",
          script: "pnpm",
          args: 'start --characters="./characters/maikol.character.json,./characters/lettuce.character.json,./characters/valorion.character.json"',
          env_file: ".env",
          log_file: "logs.log",
          max_size: "100M",
          time: true,
      },
  ],
};
