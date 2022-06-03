import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';

function App() {
  function generatePDF() {
    var doc = new jsPDF("p", "pt", "legal");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        // this code is used for download pdf do not show diractly in the browser
          // pdf.save("mypdf.pdf");

          // this code is used for show pdf in browser
          var string = doc.output('datauristring');
          var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
          var x = window.open();
          x.document.open();
          x.document.write(embed);
          x.document.close();
      }
    })

  } return (
    <div className="App">
      <div id="content" style={{padding:"20px"}}>
        <h1> html to pdf1</h1>
        <h1> html to pdf2</h1>
        <h1> html to pdf3</h1>
      
      </div>
      <button onClick={() => generatePDF()}>Generate Pdf</button>
    </div>
  );
}

export default App;
