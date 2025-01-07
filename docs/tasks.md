## General Instructions

The following 3 tasks are to assess your technical skills. Please complete these as if you were assigned them as part of your day job here at MBA. This means working towards best-practices as you understand them.

- Feel free to use Google, SO, ChatGPT, or any other public tools you’re used to using in your workflow.
- Overall quality, structure, and cleanliness of code will be a factor, so don’t rush it.
- Use of version control will also be reviewed.

## Figma

You'll need [this Figma file](https://www.figma.com/design/POmvDYgMSF1ORiKWv7RDsz/Product-Hero) for the tasks.

- Please **email us after you request access**, (the notice is not coming through from Figma for some reason!)
- Please use your **initials only** as your Figma profile name. If other candidates are on the file at the same time, you'll be able to see your cursors.
- From the time you request access to ‘dev mode’ on that file, you’ll only have 3 days to complete the task before it locks you out again.

## Timing
We've designed this test to take around _**4 hours**_.
We'd prefer you to prioritise finishing all the tasks and deliverying a finished product. If there's anywhere you'd have liked to have spent more time, leave a TODO, and we can discuss it in the follow-up interview.

# The Tasks

### Task 1 - Get everything running

1. Clone the repo
2. Folllow the instructions in the README to install and run the Next.js app in development mode. See the hello world screen.
3. Follow the instructions in the README to install and run the Django app, seed the db, create a super user, and log into admin. See the seeded lists of products and departures in admin.

### Task 2 - Create a product detail page

1. **Presentation**
    1. Follow the design in [this Figma file](https://www.figma.com/design/POmvDYgMSF1ORiKWv7RDsz/Product-Hero) to create the Hero section for the product page
        - Tailwind is installed and pre-configured for your convenience. Feel free to use it, or install your own css framework, or use plain ol' css.
        - Fonts are preinstalled using next/font
        - Each product can use the same hero image, which is hosted in the public folder of the next application.
    2. Add a list underneath the hero to display the product departures
        - On each departure show:
            1. Start date
            2. End date
            3. Price
            4. If the departure is full
        - No design is provided for this list. The list should be presentable, but no need to spend time giving it a lot of polish.
2. **Application**
    1. Each product should be accessible at `/products/<product-id>`
    2. Make sure the pages for all the products will be rendered at build time and stored statically on the Next.js server.
    3. Next.js should attempt to regenerate the page at most every minute.
    4. Display a 404 page if the product is not found (no need to style this, default 404 page is fine)
    5. If a product has no departures, or all its departures are full, make sure its associated product page is hidden from crawlers. All other pages should be visible to crawlers (hypothetically, if this site was published to the public).
3. **Data**
    1. Make sure to get product and departure data from the Django backend
    2. Django REST Framework is pre-installed. Use this to expose the data.
    3. These pages are “public”, so authentication is unnecessary

### Task 3 - Refactor

I'm sure you'll agree, the [code](../backend/django/products/management/commands/seed.py) to seed the DB is quite a mess ! Please refactor it to make it easier to understand, extensible and potentially useful outside of the `seed` command (e.g. we might want to use some of the functionality for E2E or performance testing one day).
