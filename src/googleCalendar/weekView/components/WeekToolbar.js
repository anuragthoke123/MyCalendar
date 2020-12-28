import {Row, Col, Button, Icon, Tooltip, PageHeader, Layout, Menu, Breadcrumb} from 'antd';
import React from 'react';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

const { Header, Footer, Sider, Content } = Layout;

function WeekToolbar (props) {
  const formattedDate = moment (props.startDate).format ('MMM YYYY');
  return (
   
    <Layout>
      <Header ><div className="Calender" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Button type="primary" onClick={props.goToToday}>Login</Button></Menu.Item>
        
      </Menu></Header>
    <Row type="flex" gutter={4} style={toolbar}>
       <PageHeader
    className="primary"
    onBack={() => null}
    title="Anurag Thoke"
    subTitle="20201350"
    ></PageHeader>
      <Col type="primary" span={6} offset={5} style={appTitle} >
        <Icon type="calendar" style={spacify} />Online Calendar
      </Col>
      <Col span={3} offset={9} style={alignRight}>
        <Tooltip placement="topLeft" title={moment ().format ('dddd, MMM D')}>
          <Button type="primary" onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>

      <Col span={4} style={weekButtons} style={toolbarDate}>
        <Button onClick={props.goToPreviousWeek} style={spacify} type="primary" shape="circle" icon="left" />{formattedDate}<Button 
        onClick={props.goToNextWeek} type="primary" shape="circle" icon="right" />
      </Col>

      {/* <Col span={2} style={toolbarDate}>
        {formattedDate}
      </Col> */}

    </Row>
    </Layout>
  );
}

export default WeekToolbar;
