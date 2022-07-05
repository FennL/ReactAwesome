import React, { Component } from "react";

class FetchComponent extends Component {
  state = {
    banners: [],
  };

  componentDidMount() {
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          banners: data.banner, // 此时数据已经写入state，等待渲染
        });
      });
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
