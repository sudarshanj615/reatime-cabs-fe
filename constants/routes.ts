export const routes = {
  home: "/",
  userLogin: "/signin?mode=login&role=user",
  driverLogin: "/signin?mode=login&role=driver",
  userRegister: "/signin?mode=signup&role=user",
  driverRegister: "/signin?mode=signup&role=driver",
  bookRide: "/dashboard/user/book-ride",
  parcel: "/parcel",
  userDashboard: "/dashboard/user",
  driverDashboard: "/dashboard/driver",
  about: "/about",
  contact: "/contact",
  // support: "/support",
};

export const navLinks = [
  { label: "Book Ride", href: routes.bookRide },
  { label: "Parcel", href: routes.parcel },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
  // { label: "Support", href: routes.support },
];
