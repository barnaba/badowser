function(head, req) {
    start({"headers": {"Content-type": "text/html"}});

    var mustache = require("lib/mustache");
    var posts = [];

    while(row = getRow()) {
        posts.push({
            "date": new Date(row.key),
            "body": row.value
        });
    }

    return mustache.to_html(this.templates.recent, {"posts": posts});
}
