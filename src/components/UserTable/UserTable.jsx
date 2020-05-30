import React, { PureComponent } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './UserTable.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BoxBackground from '../BoxBackground/BoxBackground';
import faker from 'faker';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle as fasTimesCircle, faCog} from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle as farTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { Row, Col } from 'react-bootstrap';

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
    sort: true,
    align: () => {
      return 'left';
    }
  }, {
    dataField: 'email',
    text: 'Email',
    sort: true,
    align: () => {
      return 'left';
    }
  }, {
    dataField: 'phone',
    text: 'Phone',
    align: () => {
      return 'left';
    }
  }, {
    seledataFieldctor: 'github',
    text: 'Githib',
    sort: true,
    align: () => {
      return 'left';
    }
  }, {
    dataField: 'org',
    text: 'Orginization',
    sort: true,
    align: () => {
      return 'left';
    }
  }, {
    dataField: 'role',
    text: 'Role',
    sort: true,
    align: () => {
      return 'left';
    }
  }, {
    dataField: 'action',
    text: 'Action',
    formatter: (cell, row, rowIndex, extraData) => (
      <Row className="row-centered">
        <Col sm={3}>
        <a href={"/"+row.id}> 
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={farTimesCircle}  color="white" size="2x" />
            <FontAwesomeIcon icon={fasTimesCircle} color="#f44336" size="2x" />
          </span>
        </a>
        </Col>
        <Col sm={5}>
        <a href={"/"+row.id}> 
            <FontAwesomeIcon icon={faCog} color="black" size="2x" />
        </a>
        </Col>
      </Row>
    ),
  }];
  rowClasses = (row, rowIndex) => {
    if (rowIndex % 2 === 0) 
      return 'table-row-even';
    return 'table-row-odd';
  };
  options = {
    // paginationSize: 4,
    // pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText:'First',
    prePageText:  'Previous',
    nextPageText: 'Next',
    lastPageText: 'Last',
    disablePageTitle: true
  };
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
                  <SearchBar { ...props.searchProps } />
                  <hr />
                  <BootstrapTable 
                    pagination={ paginationFactory(this.options)}
                    bordered={ false }
                    noDataIndication="Table is Empty" 
                    headerWrapperClasses="table-row-odd table-rounded" 
                    classes="table-borderless rounded-circle"
                    tabIndexCell
                    wrapperClasses="rounded-circle"
                    rowClasses={ this.rowClasses }
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

