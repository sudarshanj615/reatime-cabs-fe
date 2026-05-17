export const routes = {
  home: "/",
  userLogin: "/login/user",
  driverLogin: "/login/driver",
  userRegister: "/register/user",
  driverRegister: "/register/driver",
  bookRide: "/dashboard/user/book-ride",
  parcel: "/parcel",
  userDashboard: "/dashboard/user",
  driverDashboard: "/dashboard/driver",
  about: "/about",
  contact: "/contact",
  support: "/support",
};

export const navLinks = [
  { label: "Book Ride", href: routes.bookRide },
  { label: "Parcel", href: routes.parcel },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
  { label: "Support", href: routes.support },
];
