import React, { useState, useEffect } from "react";
import { fetchTickets } from "./fetchapi";
import Column from "./Blocks";
import { Select, Button } from "antd";
import "antd/dist/reset.css";
import "./Board.css";
import {
  MenuUnfoldOutlined
} from "@ant-design/icons";

const { Option } = Select;

const KanbanBoard = () => {
  // Define KanobanBoard component
  
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem("groupingOption") || "status"
  );
  const [sortedBy, setSortedBy] = useState(
    localStorage.getItem("sortedBy") || "priority"
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTickets();
      setTickets(data.tickets);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
  }, [groupingOption]);

  useEffect(() => {
    localStorage.setItem("sortedBy", sortedBy);
  }, [sortedBy]);

  const groupTicketsByOption = (tickets, option) => {
    const groupedTickets = {};

    tickets.forEach((ticket) => {
      // Loop through tickets
      const key =
        option === "status"
          ? ticket.status
          : option === "user"
          ? ticket.user
          : ticket.priority;
      if (!groupedTickets[key]) {
        groupedTickets[key] = [];
      }
      groupedTickets[key].push(ticket);
    });

    return groupedTickets;
  };

  const sortTicketsByOption = (groupedTickets, option) => {
    const sortedTickets = {};

    Object.keys(groupedTickets).forEach((groupTitle) => {
      const group = groupedTickets[groupTitle];
      sortedTickets[groupTitle] =
        option === "priority"
          ? group.sort((a, b) => b.priority - a.priority)
          : group.sort((a, b) => a.title.localeCompare(b.title));
    });

    return sortedTickets;
  };

  const groupedTickets = groupTicketsByOption(tickets, groupingOption);
  const sortedTickets = sortTicketsByOption(groupedTickets, sortedBy);

  return  (
    <div className="kanban-board">
      <div className="options">
      
        <h3><MenuUnfoldOutlined 
            style={{ color: "#013220" }}
          />Display</h3>
        <Select
          value={groupingOption}
          onChange={(value) => setGroupingOption(value)}
          style={{ width: 180, marginRight: 10 }}
        >
          <Option value="status"> Status</Option>
          <Option value="user"> User</Option>
          <Option value="priority">Priority</Option>
        </Select>
        <div>
        <h3>Ordering:</h3>
        <Button className="order" onClick={() => setSortedBy("priority")} >
          Sort by Priority
        </Button>
        <Button onClick={() => setSortedBy("title")} >
          Sort by Title
        </Button>
      </div>
      
      </div>
      <div className="board-columns">
        {Object.keys(sortedTickets).map((groupTitle) => (
          <Column
            key={groupTitle}
            title={groupTitle}
            tickets={sortedTickets[groupTitle]}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
