require('dotenv').config();

const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.SES_USER}:${process.env.SES_PASS}@cluster0.ackxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const database = client.db('SportsAccessories_DB');
    const SportsCollection = database.collection('All_Accessories');

    app.get('/All_Accessories', async (req, res) => {
      const All_Accessories = SportsCollection.find();
      const result = await All_Accessories.toArray();
      res.send(result);
    });

    app.get('/All_Accessories/:id', async (req, res) => {
      const ID = req.params.id;
      const RealID = { _id: new ObjectId(ID) };
      const result = await SportsCollection.findOne(RealID);
      res.send(result);
    });

    // Add Data client site & push database.
    app.post('/All_Accessories', async (req, res) => {
      const Data = req.body;
      // console.log('server data add', Data);
      const result = await SportsCollection.insertOne(Data);
      res.send(result);
    });

    app.put('/All_Accessories/:id', async (req, res) => {
      const filterID = req.params.id;
      const RealID = { _id: new ObjectId(filterID) };
      const Product = req.body;
      // console.log('Update data', RealID, Product);

      const updateProduct = {
        $set: {
          CategoryName: Product.CategoryName,
          ItemName: Product.ItemName,
          Price: Product.Price,
          Customization: Product.Customization,
          ProcessingTime: Product.ProcessingTime,
          StockStatus: Product.StockStatus,
          Rating: Product.Rating,
          Description: Product.Description,
          Photo: Product.Photo,
        },
      };

      const result = await SportsCollection.updateOne(RealID, updateProduct);
      res.send(result);
    });

    app.delete('/All_Accessories/:id', async (req, res) => {
      const RealID = req.params.id;
      const FilterID = { _id: new ObjectId(RealID) };
      const result = await SportsCollection.deleteOne(FilterID);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World This is our sport server!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
