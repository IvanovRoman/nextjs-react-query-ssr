import Link from 'next/link';

export default function Page() {
  return (
      <Link href={{
        pathname: '/posts/1',
      }}><h1>Got to page 1</h1></Link>
  );
}