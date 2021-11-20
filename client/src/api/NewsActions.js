import axios from "axios";

const newsUrl = "https://nnewsapi.herokuapp.com/api";

export default class NewsActions {
  static async getAllNews(keyword) {
    try {
      let url = `${newsUrl}/news?q=${keyword}`;
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getAllPoliticsNews(keyword) {
    try {
      let url = `${newsUrl}/politics?q=${keyword}`;
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getAllEntertainmentNews(keyword) {
    try {
      let url = `${newsUrl}/entertainment?q=${keyword}`;
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getAllSportsNews(keyword) {
    try {
      let url = `${newsUrl}/sports?q=${keyword}`;
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

