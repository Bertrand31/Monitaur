module.exports = {

    listChecks: function(check_id, callback) {
        var criteria = check_id ? {id: check_id} : null;
        Checks.find(criteria).exec(function (err, records) {
            if (err) throw err;
            callback(records);
        });
    },

    createCheck: function(data, callback) {
        Checks.create(data).exec(function (err, created) {
            if (err) throw err;
            callback(created);
        });
    },

    updateCheck: function(criteria, data, callback) {
        Checks.update(criteria, data).exec(function (err, updated) {
            if (err) throw err;
            callback(updated);
        });
    },

    destroyCheck: function(check_id, callback) {
        Checks.destroy(check_id).exec(function (err, destroyed) {
            if (err) throw err;
            callback(destroyed);
        });
    },

    insertHistory: function(checks) {
        checks.forEach(function(check) {
            Checks.find({id: check.id}).exec(function (err, target) {
                if (err) throw err;

                var newHistoryArray = target[0].history;
                newHistoryArray.push({date: check.date, time: check.open ? check.duration : null});
                Checks.update({id: check.id}, {history: newHistoryArray}).exec(function(err, updated) {
                    if (err) throw err;
                });

            });
        });
    }

};
