# Tinvio Frontend Case (Intern)

## a. Steps required to run your application

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## b. All objectives that you have attempted

1. Primary Objective, to create a SPA with the mock reference to showcase Leanne Graham's user details and posts from the jsonplaceholder api
2. Use React in the implementation
3. Add a visual loader when the data is loading (was not very satisfied with having the left component shift to the centre when loading, but I'm not super happy with the result too as the loader takes up the whole screen in a sense and sort of defeats the purpose of having a SPA... :(
4. Add UI to switch between users in the list (in the form of the users menu on the left)
5. Mobile responsiveness
6. Host the website for preview, deployed on Vercel, live at https://tinvio-case.vercel.app/

## c. Time spent on the assignment

Approximately 3-4 hours. The time was mostly spent on:
1. Making the SPA mobile-responsive :(
2. Time was also spent on refactoring the data fetching approach – Initially, I used NextJS's static `getStaticProps()` function to fetch the data for the single user, but then had to switch to a client-side data fetching method (done in useEffect), as I only saw the optional task to fetch data for users in the client after..
3. Styling
