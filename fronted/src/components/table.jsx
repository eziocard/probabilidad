import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function Table(){
  const [claves,setClaves] = useState([]); 
  const [data,setData] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/database';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data); // Almacena los datos
        if (data.length > 0) {
          setClaves(Object.keys(data[0])); // Obtiene las claves del primer objeto
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return(
  <>
    <div>
      <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <table className="table">
          <thead className="table-light">
              <tr>
                  {claves.map((key) => (
                      <th key={key}>{key}</th>
                  ))}
              </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
                    <tr key={index}>
                      {claves.map((key) => (
                        <td key={key}>{item[key]}</td> // Muestra el valor correspondiente a la clave
                      ))}
                    </tr>
                  ))}   
          </tbody>
        </table>

      </div>
    </div>
  </>
  )
}
export default Table
