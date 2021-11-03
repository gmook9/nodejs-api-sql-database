const db = require('../database/university-db.js')

class profileController{
    // This is a VIEW
    // We use the VIEW to do something cool and look at the total number of profiles
    // We call this VIEW inside of the route below
    static async viewNumberProfiles(ctx) {
        try {
            return new Promise((resolve, reject) => {
                const query = ` SELECT * FROM number_of_profiles;`;
                db.query
                ({
                    sql : query}
                    , (err, res) => {
                    if(err){
                        reject(err);
                    }

                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(error) {
            console.log('Error in profileController.');
        }
    }

    // This update is used to update a non student email given a user ID
    static async updateEmail(ctx) {
        try {
            return new Promise((resolve, reject) => {
                let profile = ctx.request.body;
                const query = `
                UPDATE user_non_student_test
                SET non_edu_email = ?
                WHERE user_id = ?
                `;
                db.query({
                    sql: query,
                    values:[profile.non_edu_email,ctx.params.user_id]
                }, (err, res) => {
                    if(err){
                        reject(err);
                    }

                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
          });
            });
        } catch(error) {
            console.log('Error in profileController.');
        }
    }

    // This allows for the creation of a new non student email
    static async insertNonEduStudent(ctx) {
        try {
            return new Promise((resolve, reject) => {
                const query = `INSERT INTO non_student (non_edu_email) VALUES(?);`;
                let insertEmail = ctx.request.body;
                db.query({
                    sql: query,
                    values:[insertEmail.non_edu_email]
                }, (err, res) => {
                    if(err){
                        reject(err);
                    }

                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
          });
            });
        } catch(error) {
            console.log('Error in profileController.');
        }
    }

}

module.exports = profileController;