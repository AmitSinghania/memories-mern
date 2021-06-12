import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

//MONGODB DATABASE CONNECTION USING MONGODBATLAS

const CONNECTION_URL =
	'mongodb+srv://mern-stack:pjfRpEJ974B5A2KZ@cluster0.k4j9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlparser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, (req, res) =>
			//CANCENATION//TEMPLATE STRING
			console.log(`Server running on port:${PORT}`),
		),
	)
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

//PASSWORD MONGODB//pjfRpEJ974B5A2KZ
