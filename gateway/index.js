import express from "express";
import axios from "axios";

const app = express();
const PORT = 4000;
//vet ej vad jag borde skriva här
const HOST = OklartAtm;

app.post('/api/meeting/Save', async (req, res) => {
    try {
      
        const meeting_microservice = await axios.post('http://${HOST}:4001/meeting/Save', req.body);
        
        res.json(meeting_microservice.data);
    } catch (error) {
        console.error('Error forwarding request to microservice:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
	console.log("Gatway open");
});