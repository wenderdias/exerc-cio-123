let lightOn = false;

function toggleLight() {
  const lampImage = document.getElementById('lamp');
  const button = document.getElementById('toggleButton');
  const body = document.body;

  lightOn = !lightOn;

  if (lightOn) {
    lampImage.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    button.textContent = 'Apagar';
    body.style.backgroundColor = '#ffff99'; 
  } else {
    lampImage.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    button.textContent = 'Acender';
    body.style.backgroundColor = '#f0f0f0'; 
  }
}

document.getElementById('toggleButton').addEventListener('click', toggleLight);
