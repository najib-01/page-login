import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login_page() {

    const [show, setShow] = useState(false);

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
                    <img className="img" src="/download.png" alt="logo" />
                </motion.div>
                <motion.div 
                                                                    initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:0.4}}
                className="header">
                    <h3>Login to your account</h3>
                </motion.div>
                
                <form>
                <motion.div
                                                                    initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:0.6}}
                className="inp">
                    <input type="email" placeholder="Email" required/>
                    <div className="inp_password">
                    <span onClick={() => setShow(!show)}>
                        <FontAwesomeIcon className="icon_eyeslash" icon={show ? faEye : faEyeSlash} />
                    </span>
                    
                    <input type={show ? "text" : "password"} placeholder="Password" required/>
                    </div>
                </motion.div>
                <motion.div
                                                                    initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:0.7}}
                className="checkbox_link">
                  <div className="checkbox_label"><input type="checkbox" /><label>Keep me logged in</label></div> 
                    <Link className="link" to="/forgot_password">Forgot Password</Link>
                </motion.div>
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
                                                                transition={{duration:1.5, delay:1}}
                className="hr">
                    <hr />
                    <h3>Or Login With</h3>
                    <hr />
                </motion.div>
                <div className="icons">
                    <motion.a
                                                                        initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:1.1}}

                    href="#"><FontAwesomeIcon className="icon_google" icon={faGooglePlusG} /></motion.a>
                    <motion.a
                                                                        initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:1.2}}

                    href="#"><FontAwesomeIcon className="icon_twitter" icon={faTwitter} /></motion.a>
                    <motion.a
                                                                        initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:1.3}}

                    href="#"><FontAwesomeIcon className="icon_facebook" icon={faFacebookF} /></motion.a>
                </div>    

                
                    
                <motion.div
                                                                    initial={{opacity:0}}
                                                                animate={{opacity:1}}
                                                                transition={{duration:1.5, delay:1.5}}
                className="link_register">
                    <p>Don't have an account?</p>
                    <Link className="link" to="/register">Register</Link>
                </motion.div>
            </motion.div>
        </div>
        </>
    );
}
