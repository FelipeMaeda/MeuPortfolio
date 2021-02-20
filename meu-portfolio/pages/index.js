import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar/index.js'
import LeftBar from '../components/LeftBar/index.js'

export default function Home() {
  return (
    <>
      <NavBar />
      <LeftBar />
      Home
    </>
  )
}
