import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
  {
    dataField: 'id',
    text: 'Product ID'
  },
  {
    dataField: 'title',
    text: 'Title'
  },
  {
    dataField: 'issueNumber',
    text: 'Issue Number'
  }
];
const pagination = {
  sizePerPage: 5,
  showTotal: true
};

const ComicsList = ({ comics, comicID, selectRow }) => {
  return (
    <BootstrapTable
      keyField="id"
      data={comics}
      columns={columns}
      rowEvents={comicID}
      pagination={paginationFactory(pagination)}
      hover
    />
  );
};
export default ComicsList;
