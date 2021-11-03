const db = require('../database/university-db.js')

class freelancerController{
    // Gets a specific username given a city
    static async getUserNameByCity(ctx) {
        try {
            return new Promise((resolve, reject) => {
                const query = 'SELECT function_a(?) AS userName';
                db.query
                ({
                    sql : query,
                    values : [ctx.params.city]}
                    , (err, res) => {
                    if(err){
                        reject(err);
                    }

                    ctx.body = `The USERNAME for this city is: ${res[0].userName}`;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(error) {
            console.log('Error in freelancerController.');
        }
    }

    // Allows for creation of a entirely new profile
    static async insertProfile(ctx) {
        try {
            return new Promise((resolve, reject) => {
                let freelancer = ctx.request.body;
                const query = 'INSERT INTO profile VALUES(?,?,?)';
                db.query({
                    sql: query,
                    values:[freelancer.users_resume,freelancer.current_city,freelancer.username]
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
            console.log('Error in freelancer Controller.');
        }
    }
    
    // Alllows for deletion  of a profile given a specific username
    static async deleteProfile(ctx) {
        try {
            return new Promise((resolve, reject) => {
                let freelancer = ctx.request.body;
                db.query({
                    sql: 'DELETE FROM profile WHERE username = ?',
                    values:[ctx.params.username]
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
            console.log('Error in freelancer Controller.');
        }
    }


}
module.exports = freelancerController;
