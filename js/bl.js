

var myIndex = 0;
function slide() {

  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slide, 3000); // Change image every 3 seconds
}

function reserveFunction(){
    window.location.href = 'reservierung.html'
}


function validateForm() {
    if (isEmpty(document.getElementById('data_2').value.trim())) {
    alert('Vorname fehlt!');
    return false;
    }
    if (isEmpty(document.getElementById('data_3').value.trim())) {
    alert('Nachname fehlt!');
    return false;
    }
    if (isEmpty(document.getElementById('data_4').value.trim())) {
    alert('Telefon fehlt!');
    return false;
    }
    if (isEmpty(document.getElementById('data_5').value.trim())) {
    alert('Email fehlt!');
    return false;
    }
    if (!validateEmail(document.getElementById('data_5').value.trim())) {
    alert('Email muss valid sein!');
    return false;
    }
    if (isEmpty(document.getElementById('data_6').value.trim())) {
    alert('Anreise fehlt!');
    return false;
    }
    if (isEmpty(document.getElementById('data_7').value.trim())) {
    alert('Abreise fehlt!');
    return false;
    }
    return true;
    }
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }

    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }


    function popup() { 
      if(validateForm())
        downloadPdf();
    
    }

    function downloadPdf(){ 
      
        var doc = new jsPDF();  
        //var elementHTML = $('#pdf').html();
        //console.log(document.getElementById('data_2').value);
        //var elementHTML =  document.getElementById('data_2').value;
        var elementHTML = '<h1> Hotel-Bestätigung - Banja Luka </h1>' + '<p> Hotelname: ' +  document.getElementById('hotels').value +  '<p>Vorname: '  + document.getElementById('data_2').value +  '</p>' + '<p>Nachname: '  + document.getElementById('data_3').value +  '</p>' + '<p>Mail: '  + document.getElementById('data_5').value +  '</p>' + '<p>Von: '  + document.getElementById('data_6').value +  '</p>' + '<p>Bis: '  + document.getElementById('data_6').value +  '</p>';

        var specialElementHandlers = {
            '#elementH': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(elementHTML, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });




        // Save the PDF
        doc.save('Bestätigung.pdf');
    }


 
