import React, { useState } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const data = [  { key: 1, name: 'John Doe', age: 32, address: 'New York' },  { key: 2, name: 'Jane Smith', age: 40, address: 'Los Angeles' },  { key: 3, name: 'Bob Johnson', age: 27, address: 'Chicago' },];

const MyTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    const filtered = data.filter(item => {
      return item[dataIndex].toString().toLowerCase().includes(selectedKeys[0].toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    setFilteredData(data);
  };

  const columns = [    {      title: 'Name',      dataIndex: 'name',      key: 'name',      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (        <div style={{ padding: 8 }}>          <Input            placeholder="Search name"            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, 'name')}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, 'name')}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record.name.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: (text) =>
        searchText === '' ? (
          text
        ) : (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span>
                : fragment // eslint-disable-line
            ))}
          </span>
        ),
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search address"
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, 'address')}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, 'address')}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record.address.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: (text) =>
          searchText === '' ? (
            text
          ) : (
            <span>
              {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                  ? <span key={i} className="highlight">{fragment}</span>
                  : fragment // eslint-disable-line
              ))}
            </span>
          ),
      },
    ];
  
    return (
      <Table columns={columns}  dataSource={filteredData} />
    );
  };
  
  export default MyTable;
