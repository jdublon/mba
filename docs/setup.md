 
# Setup

## Infrastructure

A docker compose file defines the overall infrastructure, with the frontend and backend each defining their own Dockerfile.

To build the images and run the containers in detached mode, run

```bash
$ docker compose up -d
```

If you need to stop the containers, run

```bash
$ docker compose down
```

If you have to change a Dockerfile, remember to re-run the build step to update the images

```bash
$ docker compose build
```

## Backend



---

To set up the Django application, once the infrastructure is built and running, run:

```bash
$ docker compose exec django python manage.py migrate
$ docker compose exec django python manage.py createsuperuser
$ docker compose exec django python manage.py seed 200 # This will seed the application with 200 products and a range of departures.
```

You can now visit <http://127.0.0.1:8000/admin> and login using the credentials you entered when you created the superuser.

Any changes to the `/django` folder should trigger a hot reload of the app.

To run the tests:

```bash
$ docker compose exec django python manage.py test
```

## Frontend

Once the infrastructure is built and running, the application should already be running in dev mode. You should be able to view the NextJS site at <http://127.0.0.1:3000>. 

Any changes to the `/src` or `/public` folders should trigger a hot reload of the app.

You have the `NEXT_PUBLIC_API_DOMAIN` env variable already exposed and available on `process.env` in the frontend. You can use this to send requests to Django over the Docker network.

To run the tests:

```bash
$ docker compose exec next npm run test
```
