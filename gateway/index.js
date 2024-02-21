import express from "express";
import axios from "axios";

const app = express();
const PORT = 4000;


app.post('/api/meeting/Save', async (req, res) => {
    try {
		
		//http://meeting-microservice/ -- from meeting/kubernetes deploy.yaml
        const meeting_microservice = await axios.post('http://meeting-microservice/meeting/Save', req.body);
        
        res.json(meeting_microservice.data);
    } catch (error) {
        console.error('Error with meeting api call meeting/Save', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
	console.log("Gatway open");
});