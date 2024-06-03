function component() {
    const element = document.getElementById('content');

    element.innerHTML = "<h1>Ola mundo</h1>"
    element.innerHTML += "<h1>Ola mundo</h1>"
    element.innerHTML += "<h1>Ola mundo</h1>"
    element.innerHTML += "<h1>Ola mundo</h1>"
    element.innerHTML += "<h1>Ola mundo</h1>"

    return element;
  }

  //document.body.appendChild(component());
  component();