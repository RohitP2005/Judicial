import { useState } from 'react'
import axios from 'axios';


function Home() {
const [file,setFile]=useState(null);

const handleFileChange = (event) => {
  setFile(event.target.files[0]);
};

const handleSubmit = async () => {
  try {
    // Create a FormData object to append the file
    const formData = new FormData();
    formData.append('inputFile', file);

    // Make an Axios POST request
    const response = await axios.post('/test', formData);
    
    console.log('File uploaded successfully:', response.data);
    // Handle success, if needed
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
          <button type="button" onclick={handleSubmit}>Upload</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Home
