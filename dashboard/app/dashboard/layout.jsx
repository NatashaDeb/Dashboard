import Navbar from "../UI/navbar/navbar";
import Sidebar from "../UI/sidebar/sidebar";
import styles from '@/app/UI/dashboard/dashboard.module.css'

const Layout = ({children}) =>{
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
            </div>
        </div>
        
    )
}

export default Layout;