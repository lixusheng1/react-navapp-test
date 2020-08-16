import React from 'react';
import { connect } from 'dva';
import  './IndexPage.css';
import MainLayout from "../components/MainLayout";

function IndexPage(props) {
  return (
      <MainLayout  {...props} />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
