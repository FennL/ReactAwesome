import React, { Component } from 'react';

class List extends Component {
    state = { 
        userinfo: [
            {
                name: "Ivan",
                age: 23,
                sex:"男"
            },
            {
                name: "Amei",
                age: 22,
                sex:"女"
            },
            {
                name: "JayChou",
                age: 2,
                sex:"男"
            }
        ]
     } 
    render() { 
        return (
            <ul>
                {
                    this.state.userinfo.map((element, index) => { 
                        return <li key={index}>
                            <span>{element.name}</span>
                            <span>{element.age}</span>
                            <span>{ element.sex}</span>
                        </li>
                    })
                }
            </ul>
        );
    }
}
 
export default List;