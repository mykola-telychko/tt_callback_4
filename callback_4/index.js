// Function to perform an asynchronous request
function performAsyncReq(data, callback) {
    // Simulate an asynchronous request 
    setTimeout(() => {
        const result = " Result: " + data;// Replace this with your actual asynchronous request logic
        callback(null, result);           // Call the callback with the result
    }, 1000);                             // Simulated delay of 1 second
}

// Function to handle sequential requests
function processSequentialRequests(requests, callback, index = 0) {
    if (index < requests.length) {
        performAsyncReq(requests[index], (error, result) => {
            if (error) {
                console.error("Error during request:", error);
            } else {
                callback(result);
            }
            processSequentialRequests(requests, callback, index + 1);
        });
    }
}

// Example usage
const requestList = ["Request 1", "Request 2", "Request 3"];

function handleReq(result) { console.log(result); }

// processSequentialRequests->handleReq(requestList)
processSequentialRequests(requestList, handleReq);





// // Function to perform an asynchronous request
// function performAsyncRequest(data) {
//     return new Promise((resolve, reject) => {
//         // Your code to make the request goes here
//         // For example, you can use fetch for an HTTP request
//         // After the request is completed, call resolve or reject
//         resolve("Request Result: " + data);
//     });
// }

// // Function to handle sequential requests
// async function processSequentialRequests(requestDataArray, callback) {
//     for (const requestData of requestDataArray) {
//         try {
//             // Execute the asynchronous request and await the result
//             const result = await performAsyncRequest(requestData);

//             // Call the callback with the result of the request
//             callback(result);
//         } catch (error) {
//             // Handle errors if they occur
//             console.error("Error during request:", error);
//         }
//     }
// }

// // Example usage
// const requestDataArray = ["Request 1", "Request 2", "Request 3"];

// function callback(result) {
//     console.log(result);
// }

// processSequentialRequests(requestDataArray, callback);

