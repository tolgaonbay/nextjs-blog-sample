import axios from '../axios'
import Head from 'next/head'

function Home(props) {
  return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            {props.title}
          </h1>
        </main>
      </div>
  )
}

export async function getServerSideProps(context) {
  const model = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data;
    });

    return { props: model}
}

export default Home;