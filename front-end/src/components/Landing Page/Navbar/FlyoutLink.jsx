import {React, useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import './FlyoutLink.css';

const FlyoutLink = ({ children, href, content: Content }) => {
    const [open, setOpen] = useState(false);
    const showFlyout = Content && open;

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="flyout-link">
            <a href={href} className="link">
                {children}
                <span className={`underline ${showFlyout ? 'show' : ''}`} />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flyout-content"
                    >
                        <Content />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FlyoutLink
