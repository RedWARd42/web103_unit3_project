import React, { useEffect, useState } from "react";
import "../css/Event.css";

const Event = ({ title, date, time, image }) => {
  const [formattedTime, setFormattedTime] = useState("");
  const [remaining, setRemaining] = useState("");

  // ✅ Format time once
  useEffect(() => {
    if (!time) return;

    const formatTime = (time) => {
      const [hour, minute] = time.split(":");
      const dateObj = new Date();
      dateObj.setHours(hour, minute);
      return dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    setFormattedTime(formatTime(time));
  }, [time]);

  // ✅ Remaining time countdown
  useEffect(() => {
    if (!date || !time) return;

    const target = new Date(`${date}T${time}`);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setRemaining("Event started!");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setRemaining(`${hours}h ${minutes}m remaining`);
    }, 60000);

    return () => clearInterval(interval);
  }, [date, time]);

  return (
    <article className="event-information">
      <img src={image} alt={title} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {date}
            <br /> {formattedTime}
          </p>
          <p>{remaining}</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
