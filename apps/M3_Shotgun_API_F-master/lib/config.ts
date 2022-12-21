//iron-session config
export const ironOptions = {
    cookieName: "bipezsbpi",
    password: "4JbGnNbiRTpciwbHf9uq",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };