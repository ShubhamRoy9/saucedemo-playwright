const { test, expect } = require('@playwright/test');

//request fixture gives us API client
test('@Getapi Get user details', async ({request}) => {

    //Send GET request
    const response = await request.get('https://reqres.in/api/users/2', {
        headers: {
            'Accept': 'application/json'
        }
    });

    //status validation 
    expect(response.status()).toBe(200);

    //convert to JSON 
    const body = await response.json();

    //Data validation
    expect(body.data.id).toBe(2);
    expect(body.data.email).toContain('@');
    expect(body.data.first_name).toBeDefined();



})