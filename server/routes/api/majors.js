const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});


async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://aravi:wormfeet2@ds057816.mlab.com:57816/student-outcomes',
    {
      useNewUrlParser: true
    }
  );

  return client.db('student-outcomes').collection('UTK');
}

module.exports = router;