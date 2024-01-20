import { useState } from 'react'
import axios from 'axios';


function Home() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check if file is not null
        if (!file) {
            alert("Please select a file.");
            return;
        }


        // check whether the file is pdf of not
        if (!file.type === "application/pdf") {
            alert("Please select a pdf file.");
            return;
        }


        // main logic

        try {
            // Create a FormData object to append the file
            const formData = new FormData();
            formData.append('affadavit', file);

            // Make an Axios POST request
            const response = await axios.post('/upload', formData);

            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error, if needed
        }
    };

    return (
        <>

            <div className="app">
                <div className="centerDiv">
                    <h2 className='fileHeader'>Upload Document</h2>
                    <form className='form' onSubmit={handleSubmit}>
                        <input type="file" name="inputFile" onChange={handleFileChange} />
                        <button>Upload</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
