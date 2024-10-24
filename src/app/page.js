import Head from 'next/head';
import CityInfo from '../components/CityInfo';
import NavBar from '../components/NavBar';
import Dashboard from './dashboard/page';
import SignIn from '@/components/SignIn';
import { getServerSession } from 'next-auth';
import { authOptions } from './conf/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <Head>
        <title>City Information App</title>
        <meta name="description" content="Get city information including weather, places to visit, and country details." />
      </Head>
      <main>
     
       {session === null && <SignIn />}
      </main>
    </div>
  );
}