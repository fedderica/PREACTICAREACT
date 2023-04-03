import React, { useEffect, useState } from 'react';

const RandomUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
       fetch("https://api.randomuser.me/")
       .then((res) => res.json())
       .then((data) => {
        console.log(data);
        setUser(data);

        const userData = {
            name: data.results[0].name.first,
            email: data.results[0].email,
            picture: data.results[0].picture.thumbnail,

        };

        setUser(userData);

       });
    }, []);

    return (
        <div>
            <h1>Hola Mundo </h1>
        </div>
    );
};

export default RandomUser;