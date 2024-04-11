// Define the URL of the JSON endpoint
const endpoint = "https://dummy.restapiexample.com/api/v1/employees";

// Fetch data from the endpoint using Fetch API
fetch(endpoint)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Display the retrieved data on the console
    console.log("Retrieved data:", data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });
