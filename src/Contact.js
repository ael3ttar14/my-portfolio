import Header from "./components/Header";

export default function Contact() {
  return (
    <div>
      <Header/>
      <div className="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-info">
          <p>📞 Phone: +201069199985</p>
          <p>📧 Email: <a href="mailto:ahmad.el3ttar14@gmail.com">ahmad.el3ttar14@gmail.com</a></p>
          <p>💼 Github:<a href="https://github.com/ael3ttar14"> ael3ttar14</a></p>
          <p>🔗 LinkedIn:<a href="https://www.linkedin.com/in/ahmad-elattar-031350374/">Ahmad Elattar</a></p>
          <p>📍 Address: Egypt, Benha</p>
        </div>
        <div className="form">
          <div className="form-left">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="text" placeholder="Your Phone *" />
          </div>
          <div className="form-right">
            <textarea placeholder="Your Message *"></textarea>
          </div>
        </div>
        <button className="btn">SEND MESSAGE</button>
        <p className="thank">Thank you for visiting my profile!</p>
      </div>
    </div>
  );
}
