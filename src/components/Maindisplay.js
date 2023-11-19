// Card.js
import React from "react";
import "./Maindisplay.css"
import { Card } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,FileTextOutlined, 
} from "@ant-design/icons";

function CardComponent({ id,title, description, user,userId }) {
  return (
    <div className="cardmargin">
    <Card className="card">
      <div className="card-body">
        <h4>{id} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<UserOutlined className="circle"/></h4>
        <h2 className="card-title">
          <CheckCircleOutlined
            style={{ marginRight: "5px", color: "#52c41a" }}
          />
          
          {title}
        </h2>
        <p className="card-text">
          {description}
        </p>
        <div className="box"><FileTextOutlined style={{ marginRight: "20px", color: " #00008b" }}/> <h8 >Feature Request
          
          </h8> </div>
        
      </div>
    </Card>
    </div>
  );
}

export default CardComponent;
