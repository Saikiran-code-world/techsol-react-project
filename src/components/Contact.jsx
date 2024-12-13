import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>contact Us</h1>
        <form>
          <div>
            <label> name</label>
            <input type="text" required placeholder="enter" />
          </div>
          <div>
            <label> email</label>
            <input type="email" required placeholder="abc@gamil.com" />
          </div>
          <div>
            <label> message</label>
            <input type="text" required placeholder="Tell us about ur query" />
          </div>

          <button type="submit">send</button>
        </form>
      </main>
    </div>
  );
};

export default contact;
