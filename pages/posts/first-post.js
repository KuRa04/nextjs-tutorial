import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../componets/layout'

export default function FirstPost(){
    return( 
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
    <h1>asakuradaiti</h1>
        <h2><Link href="/">
            <a>Back to home </a>
            </Link>
        </h2>
    </Layout>
    )
}