function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Random Quote Generator</h1>

      <div className="quote-box">
        <p className="quote-text">Quote</p>
        <p className="quote-author">— Author</p>
      </div>

      <div className="buttons">
        <button className="btn">New Quote</button>
        <button className="btn">Copy</button>
      </div>

      <p className="footer">© 2024 Random Quote Generator.</p>
    </div>
  );
}

export default App;
