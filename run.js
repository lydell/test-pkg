#!/usr/bin/env node
console.log("is yarn 2+?", /\byarn\/(?!1\.)/.test(process.env.npm_config_user_agent || ""));
console.log(process.env.npm_config_user_agent);
