import React, { PureComponent } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './UserTable.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BoxBackground from '../BoxBackground/BoxBackground';
import faker from 'faker';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const createUser = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
});

const createUsers = (numUsers = 5) =>
  new Array(numUsers).fill(undefined).map(createUser);

const fakeUsers = createUsers(100);
const { SearchBar } = Search;
class UserTable extends PureComponent { 

   columns = [{
    dataField: 'name',
    text: 'Name',
    classes: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) return 'table-row-even';
      return 'table-row-odd';
    },
    headerClasses: (column, colIndex) => {
      return 'table-row-odd';
    }
  }, {
    dataField: 'email',
    text: 'Email',
    classes: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) return 'table-row-even';
      return 'table-row-odd';
    },
    headerClasses: (column, colIndex) => {
      return 'table-row-odd';
    }
  }, {
    dataField: 'address',
    text: 'Address',
    classes: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) return 'table-row-even';
      return 'table-row-odd';
    },
    headerClasses: (column, colIndex) => {
      return 'table-row-odd';
    }
  }, {
    seledataFieldctor: 'bio',
    text: 'Bio',
    classes: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) return 'table-row-even';
      return 'table-row-odd';
    },
    headerClasses: (column, colIndex) => {
      return 'table-row-odd';
    }
  }, {
    dataField: 'image',
    text: 'Image',
    classes: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) return 'table-row-even';
      return 'table-row-odd';
    },
    headerClasses: (column, colIndex) => {
      return 'table-row-odd';
    }
  }];


  render () {
    return(
      <BoxBackground>
          <ToolkitProvider
  keyField="id"
  data={ fakeUsers }
  columns={ this.columns }
  search
  
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable pagination={ paginationFactory()}
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

      </BoxBackground>
    )}
}

export default UserTable;

