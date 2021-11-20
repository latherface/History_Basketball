/* Change languaje */
let actualLanguaje = 'es';

function setLanguaje(newLanguaje) {
    const oldLanguajeElements = document.getElementsByClassName(actualLanguaje);
    
    for (element of oldLanguajeElements) {   
        element.style.display = 'none';
    }
	
    actualLanguaje = newLanguaje;

    const newLanguajeElements = document.getElementsByClassName(actualLanguaje);
    for (element of newLanguajeElements) {
        element.style.display = 'block';
    }
}

/* Run script after DOMContentLoaded event to ensure form element is 
present */
document.addEventListener("DOMContentLoaded", function() {
    /* Obtain form element via querySelector */
    const form = document.querySelector('form[name="addtext"]');
  
    /* Bind listener to forms submit event */
    form.addEventListener("submit", function(event) {
      /* Prevent browsers default submit and page-reload behavior */
      event.preventDefault();
  
      /* Obtain values from each field in form */
      const name = form.querySelector('input[name="name"]').value;
      const surname = form.querySelector('input[name="surname"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const newsletter = form.querySelector('input[name="newsletter"]').checked;
      const filename = form.querySelector('input[name="name"]').value + ".txt";
  
      /* Compose text file content */
      const text = `
      name:${name}
      surname:${surname}
      email:${email}
      Newsletter:${newsletter}
      `;
  
      /* Create temporary link element and trigger file download  */
      const link = document.createElement("a");
      const href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
      link.setAttribute("href", href);
      
      link.setAttribute("download", filename);
  
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
    });
  });