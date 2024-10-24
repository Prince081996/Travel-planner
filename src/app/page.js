import Head from 'next/head';
import CityInfo from '../components/CityInfo';
import NavBar from '../components/NavBar';
import Dashboard from './dashboard/page';
import SignIn from '@/components/SignIn';

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Information App</title>
        <meta name="description" content="Get city information including weather, places to visit, and country details." />
      </Head>
      <main>
        <SignIn />
      </main>
    </div>
  );
}