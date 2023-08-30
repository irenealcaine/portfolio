import "./ContactItem.scss";

const ContactItem = ({ item, index, colors, neonOn }) => {
  return (
    <a
      key={index}
      className={`contact-item ${
        colors[Math.floor(Math.random() * colors.length)]
      } ${neonOn && "on"}`}
      href={item.href}
    >
      <p>{item.text}</p>
    </a>
  );
};

export default ContactItem;
