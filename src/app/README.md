# Angular frontend architecture

This frontend now uses Angular Router and standalone page components.

## Pages
- `pages/home-page`: corporate landing page and contact form
- `pages/blog-page`: public blog list/article and member interactions
- `pages/blog-admin-page`: blog CMS, comments, analytics and vacancy admin
- `pages/admin-page`: inquiry administration

## Shared code
- `app-page.base.ts`: currently holds the existing page state and API operations inherited by page components.
- `app.routes.ts`: route definitions
- `app.component.ts`: root router outlet only
- `styles.css`: global site styles

## Development
Run `npm install` then `npm start`. Angular dev server is configured to use the proxy in `proxy.conf.json`.

### Next maintenance phase
The page components are separated, while the existing API/state logic is centralized in the base class to preserve behavior during this refactor. Move API operations into dedicated services (`BlogService`, `VacancyService`, `InquiryService`, `AuthService`) and extract smaller shared components incrementally.
