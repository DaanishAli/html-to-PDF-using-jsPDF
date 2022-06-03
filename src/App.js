import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';

function App() {
  function generatePDF() {
    var doc = new jsPDF("p", "pt", "legal");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
          pdf.save("mypdf.pdf");
      }
    })

  } return (
    <div className="App">
      <div id="content" style={{padding:"20px"}}>
        <h1> html to pdf1</h1>
        <h1> html to pdf2</h1>
        <h1> html to pdf3</h1>
        <h1> html to pdf4</h1>
        <h1> html to pdf5</h1>
      </div>
      <button onClick={() => generatePDF()}>Generate Pdf</button>
    </div>
  );
}

export default App;
