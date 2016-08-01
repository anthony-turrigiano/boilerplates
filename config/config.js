module.exports = {
    host : process.env.IP || '0.0.0.0',
    port : process.env.PORT || 8080,
    path : {
        root : "./",
        sass : "./sass",
        gulpTasks : "./gulpTasks",
        src : {
            css: "./public/src/css",
            fonts: "./public/src/css",
            icons: "./public/src/icons",
            img : "./public/src/img",
            js : "./public/src/js",
            videos : "./public/src/videos",
            favicons : "./public/src/img/favicons",
        }
    }
};