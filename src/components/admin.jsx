import React, { Component } from "react";
import { useParams} from 'react-router-dom'

function Admin() {
    console.log(this.props);
    const params = useParams();
  return <div>{ params.id}</div>

  
}

export default Admin;
