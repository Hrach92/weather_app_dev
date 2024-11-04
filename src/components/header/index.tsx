import styles from './styles.module.scss'
import Switcher from "./switcher";
import Search from "./search";

const Header = (): React.JSX.Element => {

  return <div className={styles.container}>
    <Search />
    <Switcher />
  </div>
};
export default Header
