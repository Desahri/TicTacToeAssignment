var URL = "http://localhost:3001/data?data="

/*
 * sends the object as json to the server handling SQL insertion
 */
function sendData(data) {
    var JSONString = JSON.stringify(data);
    fetch(URL + JSONString);
}

export default sendData;