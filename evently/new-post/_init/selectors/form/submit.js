function() {
    var ctx = $$("#account").userCtx;
    var textarea = $("textarea", this);

    $$(this).app.db.saveDoc({
        "body": textarea.val(),
        "date": new Date().getTime(),
        "author": ctx ? ctx.name : ""
    });

    textarea.val("");

    return false;
}
