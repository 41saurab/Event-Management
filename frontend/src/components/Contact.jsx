import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/v1/message/send", { name, email, subject, message }, { withCredentials: true, headers: { "Content-Type": "application/json" } })
      .then((response) => {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 69</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +977-9800000000</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>Mail Us: admin@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.1503637124833!2d87.28534467526767!3d26.80334047671247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4195f2ed94f7%3A0xe12d17db9a332ded!2sHotel%20Kanchanjunga!5e0!3m2!1sen!2snp!4v1719192807851!5m2!1sen!2snp"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea rows={10} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
