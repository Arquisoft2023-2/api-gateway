const routes = {
    apiFlight: {
      user: {
        url: "http://localhost:8080/user",
        route: "/apiUser",
      },
      notification: {
        url: "http://localhost:3000/notifications",
        route: "/apiNotification",
      },
      gps: {
        url: "http://localhost:3001/ubicacion",
        route: "/apiGPS",
      },
      msg: {
        url: "http://localhost:8000/messages",
        route: "/apiMsg",
      }
    }
  };
  
  export default routes;