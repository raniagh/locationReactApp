import { Select } from "antd";
import axios from "axios";
import { useState } from "react";

const StartInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue);
    }
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const fetch = async (value) => {
    //Call API using Axios
    /* const ticket = axios.create({
      baseURL: "",
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers":
          "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json",
      },
    });
    const params = new URLSearchParams({
      language: "de",
      outputFormat: "RapidJSON",
      type_sf: "any",
      name_sf: value,
    });
    try {
      const response = await ticket.get(
        `https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?${params}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } */

    //Fetch Static data
    let response = require("../../utils/startData.json");
    const data = response.locations.map((item) => ({
      value: item.name,
      text: item.name,
    }));
    setData(data);
  };
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

export default StartInput;
