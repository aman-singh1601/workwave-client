import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import {
  Badge,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import images from '../../assets/images'
import companies from "../../assets/images/companies";

const CardProject = ({ projects=[1,2] }) => {
  return (
    <React.Fragment>
      {map(projects, (project, key) => (
        <Row className="mx-auto" xl="8" sm="6" key={key}>
          <Card className="workspace-card mb-0 rounded-0 border-bottom" >
            <CardBody>
              <div className="d-flex">
                <div className="avatar-md me-4">
                  <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    {/* <img src={companies[project.img]} alt="" height="30" /> */}
                  </span>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    {/* <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    > */}
                      Project Name
                    {/* </Link> */}
                  </h5>
                  <p className="mb-4">project description</p>

                  <div className="avatar-group">
                    {/* {project.team.map((team, key) =>
                      !team.img || team.img !== "Null" ? (
                        <React.Fragment key={key}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + key}
                            >
                              <img
                                src={images[team.img]}
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <UncontrolledTooltip
                                placement="top"
                                target={"member" + key}
                              >
                                {team.fullname}
                              </UncontrolledTooltip>
                            </Link>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment key={key}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + key}
                            >
                              <div className="avatar-xs">
                                <span
                                  className={
                                    "avatar-title rounded-circle bg-" +
                                    team.color +
                                    " text-white" +                                   
                                    " font-size-16"
                                  }
                                >
                                  {team.name}
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target={"member" + key}
                                >
                                  {team.fullname}
                                </UncontrolledTooltip>
                              </div>
                            </Link>
                          </div>
                        </React.Fragment>
                      )
                    )} */}
                  </div>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Badge className={"bg-" + 'success'}>
                    Completed
                  </Badge>
                </li>
                <li className="list-inline-item me-3" id="dueDate">
                  <i className="bx bx-calendar me-1" /> 23-01-2202
                </li>
              </ul>
            </div>
          </Card>
        </Row>
      ))}
    </React.Fragment>
  );
};

CardProject.propTypes = {
  projects: PropTypes.array,
};

export default CardProject;
