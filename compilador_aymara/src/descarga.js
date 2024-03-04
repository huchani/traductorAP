function download() {

  var textToWrite = salida.value.replace(/\n/g, "\r\n");
    var textFileAsBlob = new Blob([textToWrite], {
      type: 'text/plain'
    });
    var file_name = "archivo";
    var fileNameToSaveAs = file_name + ".py";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "My Hidden Link";
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
  