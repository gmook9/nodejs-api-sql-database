const db = require('../database/university-db.js')

class userController{
    // Used to get a student ID for a specific username
    static async getStudentID(ctx) {
        try {
            return new Promise((resolve, reject) => {
                const query = 'SELECT function_b(?) AS studentid';
                db.query
                ({
                    sql : query,
                    values : [ctx.params.username]}
                    , (err, res) => {
                    if(err){
                        reject(err);
                    }

                    ctx.body = `The Student Id for this username is: ${res[0].studentid}`;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(error) {
            console.log('Error in userController.');
        }
    }

    // Used to insert a new user profile
    static async insertAUser(ctx) {
        try {
            return new Promise((resolve, reject) => {
                let newuser = ctx.request.body;
                const query = 'INSERT INTO profile VALUES(?,?,?)';
                db.query({
                    sql: query,
                    values:[newuser.user_id,newuser.student_id,newuser.username]
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
            console.log('Error in userController.');
        }
    }

    // Used to UPDATE the user info given a user's ID
    static async updateUser(ctx) {
        try {
            return new Promise((resolve, reject) => {
                let newuser = ctx.request.body;
                const query = `
                UPDATE user
                SET student_id = ?,
                username = ?
                WHERE user_id = ?
                `;
                db.query({
                    sql: query,
                    values:[newuser.student_id,newuser.username,ctx.params.user_id]
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
            console.log('Error in userController.');
        }
    }

    static async deleteUser(ctx) {
        try {
            return new Promise((resolve, reject) => {
                db.query({
                    sql: 'DELETE FROM user WHERE student_id = ?',
                    values:[ctx.params.student_id]
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
            console.log('Error in user Controller.');
        }
    }


}
module.exports = userController;
