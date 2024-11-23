"use client"

import {MdChat, MdNotifications, MdPublic, MdSearch} from "react-icons/md"
import styles from '@/app/UI/navbar/navbar.module.css'
import { usePathname } from "next/navigation"

const Navbar = ()=>{

    const pathName = usePathname();

    return(
        <div className={styles.container}>
            <div className={styles.title}>{pathName.split("/").pop()}</div>
            <div className={styles.menu}>
            <div className={styles.menu}>
            <MdSearch/>
            <input type="text" placeholder="Search ..." className={styles.input}/>
        </div>
        <div className={styles.icons}>
            <MdChat size={20}/>
            <MdNotifications size={20}/>
            <MdPublic size={20}/>
        </div>
            </div>
       
        </div>
        
    )
}

export default Navbar;