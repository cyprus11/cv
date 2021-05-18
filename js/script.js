window.jsPDF = window.jspdf.jsPDF
window.html2canvas = html2canvas

$(document).ready(function() {
  var specialElementHandlers = {
    "#editor":function(element, renderer) {
      return true;
    }
  };

  $("#cmd").click(function(){
    var doc = new jsPDF();
    //doc.html($("#target").html(),15,15,{
    //  "width":170,
    //  "elementHandlers":specialElementHandlers
    //});

    doc.html(document.body, {
      callback: function(doc) {
        doc.save("TyugaevAV CV.pdf");
      }
    });
  });
});