const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

// GET endpoint to show all or a specific student
app.get("/admin/show", async (req, res) => {
    try {
        const data = await fs.readFile('student.json', { encoding: 'utf-8' });
        const students = JSON.parse(data);
        const sid = req.query.sid;

        if (sid === "*" || !sid) {
            return res.json({ msg: students });
        }

        const result = students.find(ele => ele.email === sid);
        if (!result) {
            return res.json({ msg: [] });
        }

        return res.json({ msg: [result] });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.listen(port, () => {
    console.log("Express server is running on::" + port);
});