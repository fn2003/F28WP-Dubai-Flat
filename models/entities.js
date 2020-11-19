class User {
    constructor(password, name, email) {
        this.email = email;
        this.pseudoname = name;
        this.password = password;
        this.score = score;
    }
}

class Session {
    constructor(id, date) {
        this.id = id;
        this.startDate = date;
    }
}


module.exports = {
    User,
    Session
}