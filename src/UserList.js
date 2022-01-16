import React from 'react'
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import axios from "axios";


const UserList = () => {
    const [userlist, setuserList] = useState([]);
      
        useEffect(() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setuserList(res.data))
            .catch((err) => console.log(err));
        }, []);
    return (
        
            <div className="myColor">
      <div className="card">
        {userlist.map((e) => (
          <Card className="mimou">
            <Card.Body className="body">
              <Card.Title>{e.name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {e.username}
              </Card.Subtitle>
              <Card.Text>
                Adresse : {e.address.street} / {e.address.city}
              </Card.Text>
              <Card.Link href="#">{e.email}</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
            
            );
        };

export default UserList
