// Upload image
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// Retrieve image
app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).send('No file found');
        }

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).send('Not an image');
        }
    });
});
