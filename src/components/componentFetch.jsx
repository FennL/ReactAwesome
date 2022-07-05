import React, { Component } from "react";

class FetchComponent extends Component {
  state = {
    banners: [],
  };

  componentDidMount() {
    // fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({
    //       banners: data.banner, // 此时数据已经写入state，等待渲染
    //     });
    //   });
    fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
        method:"POST",
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'accept':'application/json,text/plain,*/*'
        },
        body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
    })
    .then(
        res => res.json()   
    ).then(
        data => { 
            console.log(data) // 成功答应，并且页面渲染没有数据
        }
    )
  }
  render() {
    const { banners } = this.state;
    return (
      <React.Fragment>
        {banners.length > 0 ? (
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        ) : (
          <div>没有数据...</div>
        )}
      </React.Fragment>
    );
  }
}

export default FetchComponent;
