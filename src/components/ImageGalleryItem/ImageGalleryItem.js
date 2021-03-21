import React, { Component } from "react";
// import axios from "axios";
// import Searchbar from "../Searchbar/Searchbar";
// import Button from "../Button/Button";

class ImageGalleryItem extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: "",
  };
  // componentDidMount() {}
  // onChangeQuery = (search) => {
  //   this.setState({ searchQuery: search }, this.fetchArticles);
  // };

  // fetchArticles = () => {
  //   const { currentPage, searchQuery } = this.state;
  //   const baseUrl = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20121520-31007c0d251d9bb7e2efefbf9&image_type=photo&orientation=horizontal&per_page=12`;
  //   axios.get(baseUrl).then((response) => {
  //     this.setState((prevState) => ({
  //       articles: response.data.hits,
  //       currentPage: prevState.currentPage + 1,
  //     }));
  //   });
  // };

  render() {
    const { articles } = this.state;
    return (
      <>
        {articles.map(({ id, webformatURL }) => (
          <li className="ImageGalleryItem" key={id}>
            <img
              src={webformatURL}
              alt="articles"
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }
}
export default ImageGalleryItem;
