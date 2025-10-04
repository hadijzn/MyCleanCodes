
const getQuote = async () => {
  document.getElementById('get-qoute').innerText = 'Loading...'
  const res = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
  const data = await res.json();
  const parsedData = JSON.parse(data.contents);
    const datam = (`${parsedData[0].q} — ${parsedData[0].a}`);
    document.getElementById('get-qoute').innerText = 'New Quote'
  setQuote(datam)

};
const setQuote = (datam) => {  
  document.getElementById('quote-p').innerText =datam
}