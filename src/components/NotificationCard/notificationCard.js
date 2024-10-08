import React from "react";
import Notification from "./notification";

const NotificationCard = ({tabNotifications}) => {
    let tabNotifs = null;
    if(tabNotifications) {
        tabNotifs = tabNotifications.map((notif, index) => {
            return(
                <Notification description={notif.message} isSeen={notif.seen} key={index}/>
            );
        });
    } else {
        tabNotifs= <p> No notifications</p>
    }  

    return(
        <ul className="max-h-80 divide-y border-light-gray" style={{overflowY:"overlay"}}>
            {tabNotifs}
        </ul>
    )
}

export default NotificationCard;