const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const HitSchema = new mongoose.Schema({ count: { type: Number, default: 0 } });
const Hit = mongoose.model('Hit', HitSchema);

app.post('/api/hit', async (req, res) => {
    let hitData = await Hit.findOne();
    if (!hitData) hitData = new Hit({ count: 0 });

    hitData.count += 1;
    await hitData.save();

    res.json({ count: hitData.count });
});

/* app.get('/api/cv', (req, res) => {
    res.json({ cv_link: process.env.CV_LINK });
}); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
