const { getDefaultConfig }=require("@expo/metro-config");

const config=getDefaultConfig(__dirname);

config.resolver.assetExts.push("cjs");

module.exports=config;



  