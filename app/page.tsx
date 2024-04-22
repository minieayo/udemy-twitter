import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { NewsProps } from "./news-types";
import { RandomUsersProps } from "./random-users-types";
async function getNewsData(): Promise<NewsProps> {
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
  const res = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getRandomUsersData(): Promise<RandomUsersProps> {
  // Who to follow section
  // https://randomuser.me/documentation
  const res = await fetch(
    "https://randomuser.me/api/?results=100&inc=name,login,picture"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  // Server Action
  const newsResults: NewsProps = await getNewsData();
  const randomUsersResults: RandomUsersProps = await getRandomUsersData();

  return (
    <div>
      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />
      </main>
    </div>
  );
}
