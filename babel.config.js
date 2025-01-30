module.exports = function(api) {
    api.cache(true);

    return {
        presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],

        plugins: [["module-resolver", {
            root: ["./"],

            alias: {
                "@": "./",
                "tailwind.config": "./tailwind.config.js"
            }
        }], [
      'react-native-iconify/babel',
      {
        icons: [
          "mdi:heart",
          "mdi:home",
          "mdi:account",
          "feather:activity",
          "devicon:google",
          "logos:google-icon"
        ],
      },
    ],
  ]};
};