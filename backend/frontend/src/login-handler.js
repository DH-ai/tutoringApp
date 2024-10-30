


// need to look into this more

const login = async (email, password, setLoggedIn) => {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    if (response.ok) {
        setLoggedIn(true);
    }
    
    return data;
}

export { login };
