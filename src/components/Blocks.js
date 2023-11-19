import React from "react";
import Ticket from "./Lists";
import "./Blocks.css";
import {
  FundOutlined,
  FallOutlined,
  SlackOutlined,
  PieChartOutlined,
  PlusOutlined, DribbbleSquareOutlined,DribbbleOutlined,StopOutlined, InsertRowBelowOutlined ,MergeCellsOutlined,HighlightOutlined ,SmallDashOutlined,ExclamationOutlined 
} from "@ant-design/icons";
const Column = ({ title, tickets }) => {
  return (
    <div>
    <div className="boardColumn">
      {
        title=="Todo" ? <div>
          <SlackOutlined  style={{ marginRight: "5px", color: "#ff4500" }}/>
          <span><h3>Todo</h3> 3</span>  <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  <PlusOutlined /> &nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
        </div>: title=="In progress" ? <div>
        <PieChartOutlined style={{ marginRight: "5px", color: "#ff4500" }}/>
        <span><h3>In progress   </h3>   5</span> <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div> :
      title=="Backlog"?  <div> <FallOutlined style={{ marginRight: "5px", color: "#ff4500" }}/>
      <span><h3>Backlog</h3> 2</span> <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>:  title=="0"?  <div>
      <span><h3><StopOutlined  style={{ marginRight: "5px", color: "#FF0000" }}/> &nbsp; No priority</h3> 1</span> <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>: title=="1"?  <div>
      <span><h3><InsertRowBelowOutlined style={{ marginRight: "5px", color: "#FF0000" }}/> &nbsp;Low</h3> 3</span> <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;   <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>:title=="2"?  <div>
         <span><h3><MergeCellsOutlined style={{ marginRight: "5px", color: "#FF0000" }}/>&nbsp;Medium</h3> 2</span> <p>  &nbsp;  &nbsp;    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>:title=="3"?  <div>
      <span><h3><HighlightOutlined style={{ marginRight: "5px", color: "#FF0000" }} /> &nbsp;High</h3> 3</span> <p>  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  <PlusOutlined />&nbsp; <SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>:title=="4"?  <div>
      <span><h3><ExclamationOutlined style={{ marginRight: "5px", color: "#FF0000" }}/>&nbsp; Urgent</h3> 1</span> <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;    <PlusOutlined />&nbsp;<SmallDashOutlined /></p>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}</div>:
        <div> <h2><ExclamationOutlined style={{ marginRight: "5px", color: "#FF0000" }}/>&nbsp;Users</h2><p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <PlusOutlined />&nbsp; <DribbbleOutlined /></p>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}</div>
        
      }
      {/* <FundOutlined/>
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))} */}
    </div>
    </div>
  );
};

export default Column;
