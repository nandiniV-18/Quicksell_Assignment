import React from "react";
import CardComponent from "./Maindisplay";

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Ticket = ({ ticket }) => {
  const { id,title, status, priority, user,userId } = ticket;

  return (
    <CardComponent
      id={id}
      userId={userId}
      title={title}
      description={
        <>

          <span>
            {/* <CheckCircleOutlined
              style={{ marginRight: "5px", color: "#52c41a" }}
            />
            Status: {status} */}
          </span>
          <br />
          <span>
            <ExclamationCircleOutlined
              style={{ marginRight: "5px", color: "#faad14" }}
            />
            Priority: {priority}
          </span>
          <br />
          <span>
            <UserOutlined style={{ marginRight: "5px" }} />
            Assigned to: {userId}
          </span>
        </>
      }
      buttonText="View Details"
    />
  );
};

export default Ticket;
