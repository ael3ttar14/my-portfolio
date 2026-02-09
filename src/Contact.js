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
          <p>💼 Github:<a href="https://github.com/ahmadhamdy14"> ahmadhamdy14</a></p>
          <p>🔗 LinkedIn:<a href="https://www.linkedin.com/in/ahmad-hamdy-031350374/">Ahmad Hamdy</a></p>
          <p>📍 Address: Egypt, Benha</p>
        </div>
        <p className="thank">Thank you for visiting my profile!</p>
      </div>
    </div>
  );
}
