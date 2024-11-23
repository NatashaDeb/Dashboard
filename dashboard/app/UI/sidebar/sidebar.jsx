import styles from '@/app/UI/sidebar/sidebar.module.css'
import { MdAttachMoney, MdDashboard, MdOutlineSupervisedUserCircle, MdShoppingBag } from "react-icons/md";
import MenuLink from './menuLink/menuLink';

const menuItems = [
    {
        title: "Users",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdOutlineSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ]
    }
]

const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
        <img 
          src="https://tse1.mm.bing.net/th?id=OIP.yDYyQy9y45TLrMXFaGMFYgHaHa&pid=Api&P=0&h=180" 
          alt="Sidebar Image" 
          width={60} // Define a width for the image
          height={60} // Define a height for the image
          style={{ borderRadius: '50%' }} // Make it circular
        />
        <div className={styles.userDetails}>
            <span className={styles.userName}></span>
            <span className={styles.userTitle}></span>
            Hello World</div>
      </div>
        <ul className={styles.list}>
            {menuItems.map((item)=>(
                <li key={item.title}>
                    <span className={styles.item}>{item.title}</span>
                    {item.list.map((i)=>(
                        <MenuLink item = {i} key={i.title}/>
                    ))}
                </li>
            ))}
        </ul>

      </div>
    );
  };
  
  export default Sidebar;
  