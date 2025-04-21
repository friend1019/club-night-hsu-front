import TicketImg from "../../img/티켓2.png";
import { ticketContent } from "./TicketContent";
import "../../css/HomePage/Ticket.css";

const Ticket = ({ isExpanded, onToggle }) => {
  const calculateHeight = () => {
    return isExpanded ? `${ticketContent.length * 60}px` : "100px";
  };

  return (
    <div
      className={`ticket-list ${isExpanded ? "expanded" : ""}`}
      onClick={onToggle}
      style={{
        height: calculateHeight(),
        paddingBottom: isExpanded ? "10px" : "0",
        paddingTop: isExpanded ? "0" : "10px",
        transition: "height 1.0s ease, padding-bottom 1.0s ease",
      }}
    >
      {ticketContent.map((ticket, idx) => (
        <div
          className="ticket-container"
          key={idx}
          style={{
            transform: isExpanded
              ? `translateY(${(ticketContent.length - 1 - idx) * 0}px)`
              : `translateY(${idx * -44}px)`,
            transition: "transform 0.6s ease, opacity 0.6s ease",
            zIndex: ticketContent.length - 1 - idx,
          }}
        >
          <img src={TicketImg} alt="Ticket" className="ticket-image" />
          <div className="ticket-info">
            <div className="performance-name">{ticket.name}</div>
            <div className="performance-time">
              <span className="time-text"></span>
              <span className="time-number">{ticket.time}</span>
            </div>
            <div className="performance-number">{ticket.number}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
