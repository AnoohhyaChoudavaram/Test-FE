import React, { useEffect, useState } from 'react';
import { getData } from './services/service';

const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, [])
    return (
        <>
        <table style={{border:"1px solid"}}>
        <tr>
          <th>first Name</th> 
          <th>Last Name</th>
          <th>Middle Name</th>
          <th>Address</th>
          <th>State</th> 
        </tr>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td > {item.first_name}</td>
                        <td > {item.last_name}</td>
                        <td > {item.middle_name}</td>
                        <td > {item.address}</td>
                        <td > {item.state}</td>
                    </tr>
                );
            })}
            </table>
        </>
    );
};

export default Main;