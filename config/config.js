module.exports = {
    host : process.env.IP || '0.0.0.0',
    port : process.env.PORT || 8080,
    path : {
        root : ".",
        sass : "./sass",
        gulpTasks : "./gulpTasks",
        src : {
            css: "./src/public/css",
            fonts: "./src/public/css",
            icons: "./src/public/icons",
            img : "./src/public/img",
            js : "./src/public/js",
            public : "./src/public",
            videos : "./src/public/videos",
            favicons : "./src/public/img/favicons",
        }
    }
};