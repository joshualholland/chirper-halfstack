import mysql from 'mysql';

let pool = mysql.createPool(
    {
        host: 'localhost',
        database: 'chirpr',
        user: 'chirprapp',
        password: 'fourzeros'
    }
);

const getChirps = () => {
    let query = `SELECT c.*, u.name FROM chirps c JOIN users u on u.id = c.userid;`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results);
            }
        })
    })
};

const getChirp = (id) => {
    let query = `SELECT c.*, u.name FROM chirps c JOIN users u on u.id = c.userid WHERE c.id = ${id};`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results[0])
            }
        })
    })
};

const addChirp = (chirp) => {
    let query = `INSERT INTO chirps(userid, text) VALUE(?);`;
    let data = Object.values(chirp);

    return new Promise((resolve, reject) => {
        pool.query(query, [data], (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const editChirp = (text, id) => {
    let query = `UPDATE chirps SET text = '${text.text}' WHERE id = ${id};`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};

const deleteChirp = (id) => {
    let query = `DELETE FROM chirps WHERE chirps.id = ${id};`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


export { getChirps, getChirp, addChirp, editChirp, deleteChirp };
