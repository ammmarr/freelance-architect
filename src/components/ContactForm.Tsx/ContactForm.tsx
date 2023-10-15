import style from "./index.module.scss";
const ContactForm = () => {
  return (
    <form className={style.container}>
      <h2>Contact Us</h2>
      <div className={style.inputContainer}>
        <input type="text" placeholder="Name" />
      </div>
      <div className={style.inputContainer}>
        <input type="text" placeholder="Email" />
      </div>
      <div className={style.inputContainer}>
        <textarea placeholder="message" />
      </div>
      <button className="button" style={{ padding: "  20px 40px" }}>
        <span>Send Message!</span>
      </button>
    </form>
  );
};

export default ContactForm;
