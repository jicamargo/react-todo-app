import styles from "@/styles/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
       {props.children}
    </header>
  );
};
export default Header;
