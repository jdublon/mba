# MBA Engineering Assignment (Full-Stack)

## Info

This repo contains a typical `frontend` and `backend` split of codebases.

The backend is a Django 5 application. It contains a single app called `products`. Inside this are two models:

- Product
- Departure

A Product defines the overall details of the adventure - the title, location, duration, etc.

A Product has many Departures, which define the specific start date, price, and pax availability of a given adventure. 

The frontend is a bare bones NextJS application created with `create-next-app`, but with Jest, ESLint and Tailwind pre-installed 

### URLs:

Once set up, you should be able to view

- http://127.0.0.1:8000/admin - the Django Admin
- http://127.0.0.1:3000 - the Next.js frontend

## Further reading

- Please view [setup.md](./docs/setup.md) for installation instructions
- Please view [tasks.md](./docs/tasks.md) for the tasks to be completed