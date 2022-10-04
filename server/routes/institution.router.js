const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => { // Get all institutions
    const query = `
        SELECT * FROM "institutions`
        pool.query(query)
})


// to get the institution related to the logged in researcher
router.get('/researchInst', (req, res) => {
  console.log('the user who is logged in is', req.user);
  const query = `SELECT "institution".name FROM "institution"
  JOIN "user"
  ON "institution".id = "user".inst_id
  WHERE "user".id = $1;`;
  pool.query(query,[req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error in getting clinician list for researcher', err);
      res.sendStatus(500)
    })
});