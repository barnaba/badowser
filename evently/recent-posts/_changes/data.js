function(row) {
    return {
        "date": new Date(row.key),
        "body": row.value.body,
        "author": row.value.author
    };
}
