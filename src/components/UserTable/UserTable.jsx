import React, { PureComponent, Fragment } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './UserTable.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BoxBackground from '../BoxBackground/BoxBackground';
import faker from 'faker';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle as fasTimesCircle, faCog} from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle as farTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormField from '../FormField';

const pageButtonRenderer = ({
  page,
  active,
  disable,
  title,
  onPageChange
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  const activeStyle = {};
  if (typeof page === 'string') {
    activeStyle.backgroundColor = 'black';
    activeStyle.color = '#5486FB';
  }
  return (
    <li className="page-item">
      {/* <a href="#test" onClick={ handleClick } style={ activeStyle }>{ page }</a> */}
      <Button variant="table" onClick={ handleClick } style={ activeStyle } active={active ? true : false}>{ page }</Button>
    </li>
  );
};

const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <Row>
    <Col sm={6}>
      <Form.Control type="text" ref={ n => input = n } placeholder="Search"  className="formField"/>
    </Col>
    <Col sm={2}>
      <Button variant="round" className="btn-fixed" onClick={ handleClick } style={{background:"black",color:"#f2c300",borderColor:"#f2c300"}}>Search</Button>
    </Col>
    <Col sm={4}>
      <Button variant="round-blue" className="btn-fixed" style={{width:"15vw"}} onClick={props.addUser} >Add User</Button>
    </Col>
    </Row>
  );
};

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

class MyVerticallyCenteredModal extends PureComponent {
  onChange = (e) => {
    this[e.target.name] =  e.target.value.trim();
  };

  
  onSubmit = (event) =>{
    // event.preventDefault();
    const { email, password} = this;
    console.log("Email: " + email)
    console.log("Password: " + password)
  }
  render () {
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <BoxBackground className="module-background">
      <Modal.Body>
        <Form action="/congrats" onSubmit={this.onSubmit}>
          <FormField className="boldText" name="email" label="Email" exampleText="example@example.com" fieldType="email" defaultValue="jack.james@g.net" onChange={this.onChange}/>
          <Form.Group as={Row} controlId="roleSelect">
            <Form.Label column sm={3} className="formLabel boldText">Role</Form.Label>
            <Col sm={8}>
              <Form.Control as="select" custom className="formField" defaultValue="Volunteer" onChange={this.onChange}>
                <option> </option>
                <option>Admin</option>
                <option>Volunteer</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <br/>
          <Form.Row>
          <Col>
            <Button variant="round" className="btn-fixed" onClick={ this.props.onHide}  style={{background:"black",color:"#f2c300",borderColor:"#f2c300"}}>Back</Button>
          </Col>
          <Col>
          <Button variant="round" className="btn-fixed" href="/" style={{width:"12vw"}}>Save</Button>
          </Col>
          </Form.Row>
        </Form>
      </Modal.Body>
      </BoxBackground>
    </Modal>
  )}
}

class UserTable extends PureComponent { 
  state = { show: false}
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

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
        <Col sm={2}>
        <a href={"/"+row.id}> 
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={farTimesCircle}  color="white" size="2x" />
            <FontAwesomeIcon icon={fasTimesCircle} color="#f44336" size="2x" />
          </span>
        </a>
        </Col>
        <Col sm={3}>
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
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText:'First',
    prePageText:  'Previous',
    nextPageText: 'Next',
    lastPageText: 'Last',
    disablePageTitle: true,
    pageButtonRenderer
  };

  render () {
    return(
      <Fragment>
      <MyVerticallyCenteredModal
            show={this.state.show}
            onHide={this.handleClose}
          />
      <BoxBackground className="black-background large-background">
          <ToolkitProvider
          keyField="id"
          data={ fakeUsers }
          columns={ this.columns }
          search
          >
            {
              props => (
                <div>
                  <MySearch { ...props.searchProps } addUser={this.handleShow}/>
                  <hr />
                  <BootstrapTable 
                    pagination={ paginationFactory(this.options)}
                    bordered={ false }
                    noDataIndication="Table is Empty" 
                    headerWrapperClasses="table-row-odd table-rounded" 
                    classes="table-borderless"
                    tabIndexCell
                    wrapperClasses=" "
                    rowClasses={ this.rowClasses }
                    { ...props.baseProps }
                  />
                </div>
              )
            }
          </ToolkitProvider>
      </BoxBackground>
      </Fragment>
    )}
}

export default UserTable;

