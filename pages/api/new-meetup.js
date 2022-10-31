import { MongoClient } from 'mongodb';
// /api/new-meetup
//POST /api/new-meetup

async function handle(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb+srv://Nhattien98:Nhattien12@cluster0.wmycumr.mongodb.net/meetup?retryWrites=true&w=majority',
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default handle;
