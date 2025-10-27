const form = document.getElementById('dataForm');
const input = document.getElementById('inputData');
const responseBox = document.getElementById('responseBox');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userInput = input.value;

  try {
    const response = await fetch('http://127.0.0.1:5000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userInput })
    });

    const result = await response.json();
    responseBox.textContent = `Backend responded: ${JSON.stringify(result)}`;
    responseBox.style.color = 'green';
  } catch (error) {
    console.error('Error:', error);
    responseBox.textContent = 'Error connecting to backend!';
    responseBox.style.color = 'red';
  }

  input.value = '';
});
