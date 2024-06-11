import { Select } from "antd";
import axios from "axios";
import { useState } from "react";
let timeout;
let currentValue;
const fetch = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  const fake = () => {
    axios
      .get(`http://localhost:8080/autocomplete?q=${value}`)
      .then((response) => {
        if (currentValue === value) {
          const { data } = response;
          const results = data.map((item) => ({
            value: item._id,
            text: item.nameAr + " " + `(${item.citId?.nameAr})`,
            text: item.citId?.nameAr
              ? item.nameAr + " " + `(${item.citId?.nameAr})`
              : item.nameAr,
          }));
          callback(results);
        }
      });
  };
  timeout = setTimeout(fake, 20);
};
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const renderOption = (option) => {
    // highlight matching text
    const regex = new RegExp(`(${value})`, "gi");
    const text = option.text?.replace(
      regex,
      '<span style="color: red">$1</span>'
    );
    return (
      <Option key={option.value} value={option.value}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Option>
    );
  };
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
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
      optionLabelProp="children"
      dropdownRender={(menu) => <div>{menu}</div>}
    >
      {data.map(renderOption)}
    </Select>
  );
};
const App = () => (
  <SearchInput
    placeholder="input search text"
    style={{
      width: 500,
    }}
  />
);
export default App;
