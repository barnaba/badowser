function(row) {
    return {
        "date": new Date(row.key),
        "body": row.value
    };
}
