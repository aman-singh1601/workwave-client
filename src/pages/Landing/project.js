import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

import womanPic from '../../assets/images/landing/woman-with-laptop-color-background.png'

// import withRouter from "components/Common/withRouter";
// import { map } from "lodash";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Cards
import CardProject from "./card-project";

// import { getProjects as onGetProjects } from "store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "../../components/Common/withRouter";

const ProjectsGrid = (props) => {
  //meta title
  document.title = "Projects Grid | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  // const { projects } = useSelector(state => ({
  //   projects: state.projects.projects,
  // }));

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  // useEffect(() => {
  //   dispatch(onGetProjects());
  // }, [dispatch]);

  const handlePageClick = (page) => {
    setPage(page);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumbs */}

        <Container className="w-75">
          {/* <Breadcrumbs title="Welcome to Workwave" breadcrumbItem="Workspaces" /> */}
          <h2>Welcome to Workwave</h2>

          <Col className="rounded-sm border">
            <CardProject />
          </Col>

          <Card className="mt-5 border">
          <Row className="w-100" style={{height:'90px'}}>
          <Col className="col-md-auto"><img src={womanPic}/></Col>
            <Col className="mt-4">
              <Row className="">
              <Col className="col-8 fs-4 fw-bold"> Want to use Workwave with a different Team ?</Col>
              <Col className="col-4 justify-content-end">
              <button
                    className = 'btn btn-primary btn-block px-4'
                    type = 'submit'
                  >
                    Create new Workspace
                  </button>
              </Col>
              </Row>
            </Col>
          </Row>
          
          </Card>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ProjectsGrid);
