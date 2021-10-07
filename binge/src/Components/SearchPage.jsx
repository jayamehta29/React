import { React, useState, useEffect } from 'react'
import { API_KEY, API_URL, IMAGE_URL } from "../api";
import axios from "axios";

const SearchPage = (props) => {
  const {obj} = props;
  console.log(obj);
    const [mdata, setMd] = useState([]);
  
    useEffect(() => {
      async function apiData() {
        let data = await axios.get(API_URL + "/search/movie", {
          params: { api_key: API_KEY, page: 1, query: obj },
        });
        let mdata = data.data.results.slice(0, 5);
        setMd(mdata);
      }
  
      apiData();
    }, []);

    return (
        <div style={{backgroundColor:"yellow"}}>
            hello
            {mdata.title}
        </div>
    )
}

export default SearchPage
