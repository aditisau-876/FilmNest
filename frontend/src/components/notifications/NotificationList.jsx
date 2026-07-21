import NotificationCard from "./NotificationCard";
import EmptyNotifications from "./EmptyNotifications";

const NotificationList = ({ notifications }) => {

  if(notifications.length===0){

    return <EmptyNotifications/>;

  }

  return(

    <section className="max-w-6xl mx-auto px-8 py-12">

      <div className="space-y-6">

        {notifications.map((item, index) => (

          <NotificationCard
            key={`${item.type}-${index}`}
            notification={item}
          />

        ))}

      </div>

    </section>

  );

};

export default NotificationList;