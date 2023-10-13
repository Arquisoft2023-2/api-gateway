
const routes = {
    apiFlight: {
      user: {
        url: "http://user:8080/user",
        route: "/apiUser",
      },
      notification: {
        url: "http://notification:3000/notifications",
        route: "/apiNotification",
      },
      gps: {
        url: "http://gps:3001/ubicacion",
        route: "/apiGPS",
      },
      msg: {
        url: "http://message:8000/messages",
        route: "/apiMsg",
      },
      auth: {
        url: "http://authms:80/api/Auth",
        route: "/apiAuth",
      },
    }
  };
  
  export default routes;

