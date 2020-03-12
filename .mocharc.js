module.exports = {
    ui: "bdd",
    extension: ["js"],
    require: [
        "./node_modules/chai/register-assert.js",
        " ./node_modules/chai/register-expect.js"
    ],
    "watch-files": "./test/*.js"
}
