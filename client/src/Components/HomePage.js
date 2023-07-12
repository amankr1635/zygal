import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [cookieData, setCookieData] = useState([]);
  
  if (!localStorage.getItem('token')) {
    window.location.href = 'logIn';
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cookieData'));
    if (storedData) {
      setCookieData(storedData);
    }
  }, []);

  const handleSubmit = () => {
    if (input1.trim() !== '') {
      const newData = [...cookieData, input1];
      setCookieData(newData);
      localStorage.setItem('cookieData', JSON.stringify(newData));
      setInput1('');
    }
  };

  const handleSearch = () => {
    const searchData = localStorage.getItem('cookieData');
    if (searchData) {
      const parsedData = JSON.parse(searchData);
      const filteredData = parsedData.filter((item) => item.includes(input2));
      setCookieData(filteredData);
    } else {
      setCookieData([]);
    }
    setInput2('');
  };

  const handleClear = () => {
    localStorage.removeItem('cookieData');
    setCookieData([]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = 'logIn';
  };

  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <br />
      {cookieData.length > 0 ? (
        <ul>
          {cookieData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default HomePage;
