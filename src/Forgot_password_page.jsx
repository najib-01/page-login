import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Forgot_password_page() {
    return(
        <>
        <div className="all_items">
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5}}
            className="border_login">
                <motion.div
                initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, delay:0.2}}
                >
                    <img className="img" src="/public/download.png" alt="logo" />
                </motion.div>
               <motion.div
               initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, delay:0.4}}
               className="header">
                    <h3>Recover your password</h3>
                    
                </motion.div>
                <form>
                <motion.div
                initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, delay:0.6}}
                className="inp">
                <input type="email" placeholder="Email" required/></motion.div>
                <motion.div
                initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, delay:0.9}}
                className="btn">
                    <button type="submit">Login</button>
                </motion.div></form>
                <motion.div
                initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5, delay:1.1}}
                className="link_register">
                                    <p>Don't have an account?</p>
                                    <Link className="link" to="/register">Register</Link>
                                </motion.div>
            </motion.div>
        </div>
        </>
    );
}