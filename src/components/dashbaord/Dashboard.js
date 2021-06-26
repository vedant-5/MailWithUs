import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Tabs, Card } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import TopNav from "./TopNav";
import CreateEmail from "./CreateEmail";
import Scheduled from "./Scheduled";
import History from "./History";

const { TabPane } = Tabs;
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <>
        <TopNav user={user.name.split(" ")[0]} />
        <div>
          <Card style={{ backgroundColor: "#D8C3A5" }}>
            <Container>
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span>
                      <h6>Create New Email</h6>
                    </span>
                  }
                  key="1"
                >
                  <Card style={{ backgroundColor: "#EAE7DC" }}>
                    <CreateEmail />
                  </Card>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <h6>Scheduled</h6>
                    </span>
                  }
                  key="2"
                >
                  <Scheduled />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <h6>History</h6>
                    </span>
                  }
                  key="3"
                >
                  <History />
                </TabPane>
              </Tabs>
            </Container>
          </Card>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
