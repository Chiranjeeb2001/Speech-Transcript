import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import './HomeScreen.css'; 
import * as XLSX from 'xlsx';

const HomeScreen = ({ userEmail }) => {
  
  const [excelData, setExcelData] = useState([]);
  const { transcript, resetTranscript } = useSpeechRecognition();

  
  const startSpeechRecognition = () => {
    SpeechRecognition.startListening();
  };

  
  const stopSpeechRecognition = () => {
    SpeechRecognition.stopListening();
  };

  
  const saveToExcel = () => {
    console.log('Saving to Excel...');
    
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    const data = excelData.map((item, index) => [index + 1, item, date, time]);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([['S.No', 'Transcribed Text', 'Date', 'Time'], ...data]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Details');
    XLSX.writeFile(workbook, 'transcribed_text.xlsx');
    resetTranscript(); 
    
  };

  
  const addToExcel = (text) => {
    setExcelData(prevData => [...prevData, text]);
  };

  const deleteItem = (index) => {
    setExcelData(prevData => prevData.filter((_, i) => i !== index));
  };

  
  const saveTranscript = () => {
    addToExcel(transcript);
    resetTranscript(); 
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Speech to Text </h1>
        <div className="speech-box">
         
          <textarea
            value={transcript}
            placeholder="Transcribed text will appear here..."
            readOnly
          ></textarea>
          <div className="btn-group">
           
            <button onClick={startSpeechRecognition}>Start</button>
           
            <button onClick={stopSpeechRecognition}>Stop</button>
            
            <button onClick={saveTranscript}>Save</button>
          </div>
        </div>
        <div className="excel-data">
          <h2>Data</h2>
          <ul>
         
            {excelData.map((item, index) => (
              <li key={index}>
                <span>{index + 1}. {item}</span>
               
                <button className='btn-group' onClick={() => saveToExcel(item)}>Save to Excel</button>
                
                <button className='btn-group' onClick={() => deleteItem(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
