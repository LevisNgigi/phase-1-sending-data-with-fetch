function submitData(name, email,) {
    const url = 'http://localhost:3000/users'

    const data = {
        name: name,
        email: email,
    };


return fetch (url, {
    method: 'POST',
    headers: {
        'ContentType': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log('Success', data);
    return data;
})
.catch(error => {
    console.log('Error', error);
    return error;
});
}

submitData("sivel", "sivel@outlook.com");   