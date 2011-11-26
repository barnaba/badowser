function() {
    var textarea = $("textarea", this);

    $$(this).app.db.saveDoc({
        "body": textarea.val(),
        "date": new Date().getTime()
    });

    textarea.val("");

    return false;
}
