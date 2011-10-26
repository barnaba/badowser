function() {
    var textarea = $("textarea", this);

    $.couch.db("db").saveDoc({
        "body": textarea.val(),
        "date": new Date().getTime()
    });

    textarea.val("");

    return false;
}
