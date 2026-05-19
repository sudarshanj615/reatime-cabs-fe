# Frontend Test Cases

Project: RealTimeCabs  
Frontend: Next.js app router, React, Tailwind/global CSS

## Scope

These test cases cover the current frontend behavior:

- Public pages and navigation
- User and driver authentication screens
- User ride booking flow
- Ride success and live tracking screens
- User, driver, and admin dashboards
- Basic responsive and accessibility checks

Because the current frontend is mostly static UI with client-side route navigation, these cases are written so they can be executed manually first and later automated with Playwright.

## Test Data

| Field | Valid Data | Invalid Data |
| --- | --- | --- |
| User email | `user@example.com` | `userexample.com`, empty |
| Driver email | `driver@example.com` | `driverexample.com`, empty |
| Password | `Password@123` | empty, short password |
| Pickup | `MG Road` | empty |
| Drop | `Airport Terminal 1` | empty |
| Phone | `9876543210` | `12345`, letters |
| Vehicle number | `KA01AB1234` | empty |

## Public Navigation

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| NAV-001 | Home page loads successfully | Open `/` | Home page renders hero, ride search box, cab types, features, testimonials, navbar, and footer | High |
| NAV-002 | Navbar logo navigation | Click the RealTimeCabs logo | User is routed to `/` | Medium |
| NAV-003 | Navbar public links | Click each visible navbar link | Each link opens its correct page without a 404 | High |
| NAV-004 | Mobile menu opens | Resize to mobile width and tap mobile menu | Mobile navigation becomes visible and links are usable | High |
| NAV-005 | Admin pages hide public navbar | Open `/admin` | Public navbar is not displayed; admin sidebar is displayed | Medium |
| NAV-006 | Footer links work | Click footer quick links | Links navigate to the expected routes | Medium |

## Home And Search

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| HOME-001 | Pickup and drop inputs render | Open `/` | `Enter pickup location` and `Enter drop location` inputs are visible | High |
| HOME-002 | User can type pickup and drop | Type valid pickup and drop values | Typed values appear correctly in both fields | High |
| HOME-003 | Book Now navigation | Click `Book Now` | User is routed to `/dashboard/user/book-ride` | High |
| HOME-004 | Empty home search still routes | Leave fields empty and click `Book Now` | Current behavior: user is routed to booking page | Medium |
| HOME-005 | Cab type cards render | Open `/` and inspect cab section | All configured cab types from `constants/cabTypes.ts` are visible | Medium |

## Sign In Page

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| AUTH-001 | Sign in page loads | Open `/signin` | Sign-in panel, email field, password field, social login buttons, and account-type links are visible | High |
| AUTH-002 | User account switch | Click `User` in account switch | User is routed to `/login/user` | High |
| AUTH-003 | Driver account switch | Click `Driver` in account switch | User is routed to `/login/driver` | High |
| AUTH-004 | Register user link | Click `Create user account` | User is routed to `/register/user` | High |
| AUTH-005 | Register driver link | Click `join as driver` | User is routed to `/register/driver` | High |
| AUTH-006 | Email input accepts email text | Type `user@example.com` | Email field contains the typed value | Medium |
| AUTH-007 | Password input masks text | Type `Password@123` | Password is not shown as plain text | High |
| AUTH-008 | Sign In submit behavior | Fill email and password, click `Sign In` | Current behavior should be documented; page should not crash or reload unexpectedly | High |
| AUTH-009 | Google social login URL | Click Google button | Browser navigates to configured Google OAuth URL | Medium |
| AUTH-010 | Facebook social login URL | Click Facebook button | Browser navigates to configured Facebook OAuth URL | Medium |
| AUTH-011 | Apple social login URL | Click Apple button | Browser navigates to configured Apple OAuth URL | Medium |

## User Login

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| ULOGIN-001 | User login page loads | Open `/login/user` | `User Login`, email field, password field, and login button are visible | High |
| ULOGIN-002 | User login accepts input | Type email and password | Values are entered correctly; password is masked | High |
| ULOGIN-003 | User login button redirects | Click `Login` | Current behavior: user is routed to `/profile` | High |
| ULOGIN-004 | Empty login click behavior | Click `Login` with empty fields | Current behavior: user is still routed to `/profile`; mark as validation gap if not desired | Medium |
| ULOGIN-005 | User login layout on mobile | Open `/login/user` on mobile viewport | Form is visible without horizontal scrolling or clipped controls | High |

## Driver Login

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| DLOGIN-001 | Driver login page loads | Open `/login/driver` | `Driver Login`, email field, password field, and login button are visible | High |
| DLOGIN-002 | Driver login accepts input | Type email and password | Values are entered correctly; password is masked | High |
| DLOGIN-003 | Driver login button redirects | Click `Login` | Current behavior: user is routed to `/profile` | High |
| DLOGIN-004 | Empty login click behavior | Click `Login` with empty fields | Current behavior: user is still routed to `/profile`; mark as validation gap if not desired | Medium |
| DLOGIN-005 | Driver login layout on mobile | Open `/login/driver` on mobile viewport | Form is visible without horizontal scrolling or clipped controls | High |

## Registration

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| REG-001 | User registration page loads | Open `/register/user` | Full name, email, phone, password fields, and register button are visible | High |
| REG-002 | User registration fields accept values | Enter valid user test data | Fields display entered values correctly | High |
| REG-003 | User registration empty submit | Click `Register User` with empty fields | Current behavior should be documented; page should not crash | Medium |
| REG-004 | Driver registration page loads | Open `/register/driver` | Driver name, email, phone, vehicle number, vehicle type, password, and register button are visible | High |
| REG-005 | Driver vehicle type dropdown | Open vehicle type dropdown | Mini, Auto, Bike, Scooty, and SUV options are visible | High |
| REG-006 | Driver registration fields accept values | Enter valid driver test data and select vehicle type | Fields display entered values correctly | High |
| REG-007 | Driver registration empty submit | Click `Register Driver` with empty fields | Current behavior should be documented; page should not crash | Medium |

## User Dashboard

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| UDASH-001 | User dashboard loads | Open `/dashboard/user` | Page title and three dashboard cards are visible | High |
| UDASH-002 | Book Ride card navigation | Click `Book a Ride` card | User is routed to `/dashboard/user/book-ride` | High |
| UDASH-003 | Ride History card navigation | Click `Ride History` card | User is routed to `/dashboard/user/ride-history` | High |
| UDASH-004 | Profile card navigation | Click `Profile` card | User is routed to `/dashboard/user/profile` | High |
| UDASH-005 | Dashboard responsive grid | Open page on mobile and desktop | Cards stack or align cleanly without overlap | High |

## Book Ride Flow

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| BOOK-001 | Book ride page loads | Open `/dashboard/user/book-ride` | Header, search bar, pickup input, drop input, cab selector, fare estimate, and confirm button are visible | High |
| BOOK-002 | Search bar accepts text | Type `Airport` in search bar | Search text appears correctly | Medium |
| BOOK-003 | Pickup accepts text | Type `MG Road` | Pickup field contains `MG Road` | High |
| BOOK-004 | Drop accepts text | Type `Airport Terminal 1` | Drop field contains `Airport Terminal 1` | High |
| BOOK-005 | Cab selector renders all cab cards | Inspect cab selector | All configured cab types are visible | High |
| BOOK-006 | Fare estimate message displays | Inspect fare estimate card | Estimate text is visible and readable | Medium |
| BOOK-007 | Confirm ride navigation | Click `Confirm Ride` | User is routed to `/ride/success` | High |
| BOOK-008 | Confirm with empty pickup/drop | Leave fields empty and click `Confirm Ride` | Current behavior: user is routed to success page; mark as validation gap if not desired | High |
| BOOK-009 | Book ride mobile layout | Open page on mobile viewport | Inputs, cab cards, and confirm button remain usable without horizontal scrolling | High |

## Ride Success And Live Tracking

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| RIDE-001 | Ride success page loads | Open `/ride/success` | Success message and `Track Ride` button are visible | High |
| RIDE-002 | Track ride navigation | Click `Track Ride` | User is routed to `/ride/live/demo-ride` | High |
| RIDE-003 | Live ride page loads with ride id | Open `/ride/live/demo-ride` | Page shows `Live Ride #demo-ride` | High |
| RIDE-004 | Live map placeholder renders | Open live ride page | Live map component area is visible | Medium |
| RIDE-005 | Ride status renders | Open live ride page | Status card shows `Driver is on the way` | High |
| RIDE-006 | Live ride mobile layout | Open live ride page on mobile | Map and status sections are visible without overlap | High |

## Driver Dashboard

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| DDASH-001 | Driver dashboard loads | Open `/dashboard/driver` | Page title and driver dashboard cards are visible | High |
| DDASH-002 | Active Rides navigation | Click `Active Rides` card | User is routed to `/dashboard/driver/active-rides` | High |
| DDASH-003 | Earnings navigation | Click `Earnings` card | User is routed to `/dashboard/driver/earnings` | High |
| DDASH-004 | Profile navigation | Click `Profile` card | User is routed to `/dashboard/driver/profile` | High |
| DDASH-005 | Driver dashboard mobile layout | Open page on mobile viewport | Cards remain readable and usable | High |

## Admin Dashboard

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| ADMIN-001 | Admin dashboard loads | Open `/admin` | Admin sidebar, dashboard title, KPI cards, recent rides table, and alerts panel are visible | High |
| ADMIN-002 | Admin sidebar active link | Open `/admin` | Dashboard sidebar link has active state | Medium |
| ADMIN-003 | Admin sidebar navigation | Click Users, Rides, Drivers, Issues, Payments, Settings | Each route opens without a 404 | High |
| ADMIN-004 | KPI cards visible | Open `/admin` | Total Users, Active Rides, Drivers Online, and Revenue Today cards are visible | High |
| ADMIN-005 | Recent rides table | Inspect recent rides table | Ride ID, User, Driver, and Status columns are visible with sample rows | Medium |
| ADMIN-006 | Alerts panel text encoding | Inspect alerts panel and revenue card | Text should render readable symbols and currency; current mojibake should be logged as a UI defect | High |
| ADMIN-007 | Generate Report button | Click `Generate Report` | Current behavior should be documented; page should not crash | Medium |
| ADMIN-008 | Admin responsive layout | Open `/admin` on mobile and tablet | Sidebar and content remain usable without unreadable clipping | High |

## Static Content Pages

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| STATIC-001 | About page loads | Open `/about` | About page content and background asset render correctly | Medium |
| STATIC-002 | Contact page loads | Open `/contact` | Contact page content and background asset render correctly | Medium |
| STATIC-003 | Support page loads | Open `/support` | Support page content renders correctly | Medium |
| STATIC-004 | Parcel page loads | Open `/parcel` | Parcel page content renders correctly | Medium |
| STATIC-005 | Parcel dimensions page loads | Open `/parcel/dimensions` | Dimension page content renders correctly | Medium |

## Accessibility And Usability

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| A11Y-001 | Keyboard navigation | Use Tab from top of each main page | Focus moves through links, inputs, and buttons in a logical order | High |
| A11Y-002 | Visible focus states | Tab through interactive controls | Current focused element is visually identifiable | High |
| A11Y-003 | Form labels | Inspect login and sign-in forms | Inputs have visible labels or accessible names | High |
| A11Y-004 | Image alt text | Inspect logo and important images | Meaningful images have useful alt text; decorative images do not create noise | Medium |
| A11Y-005 | Color contrast | Check buttons, muted text, sidebar links, and status badges | Text meets readable contrast expectations | High |
| A11Y-006 | No horizontal scrolling | Test 320px, 375px, 768px, 1024px, and desktop widths | Pages do not create unintended horizontal scroll | High |

## Negative And Edge Cases

| ID | Test Case | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| NEG-001 | Invalid route | Open `/unknown-route` | Next.js 404 behavior appears; app shell does not crash | Medium |
| NEG-002 | Special characters in location | Enter `Apt #12, MG Road & 5th` in pickup/drop | Text is accepted and displayed without breaking layout | Medium |
| NEG-003 | Very long location text | Paste a long address into pickup/drop | Input handles text without breaking layout | High |
| NEG-004 | Browser refresh on nested route | Refresh `/dashboard/user/book-ride` | Same page reloads successfully | High |
| NEG-005 | Back and forward navigation | Complete home to booking to success flow, then use browser back/forward | Browser history behaves predictably | Medium |

## Suggested Automation Split

| Suite | Tool | What To Automate First |
| --- | --- | --- |
| Smoke | Playwright | Route loading, navbar links, home search to booking, booking to success, success to live ride |
| Forms | Playwright | Login/register fields, password masking, dropdown options |
| Responsive | Playwright screenshots | Home, sign-in, book ride, admin dashboard at mobile and desktop widths |
| Accessibility | Playwright plus axe | Labels, focus order, contrast issues, landmark structure |
| Unit | React Testing Library | Stateless components such as cab cards, fare estimate, ride status, dashboard cards |

## Current Validation Gaps To Confirm

These are not necessarily bugs, but they should be confirmed before finalizing expected results:

- Login buttons currently redirect without checking email or password.
- Register buttons currently do not validate required fields.
- Book ride can be confirmed with empty pickup/drop values.
- Home search values are not passed into the booking page.
- Admin dashboard contains unreadable encoded symbols in revenue and alert text.
- `ProtectedRoute` currently renders children without enforcing authentication.
- Social login URLs are hardcoded to a local network IP address.

