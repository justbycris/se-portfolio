import React from 'react'
import Header from '../components/Header';
import Text from '../components/Text'
import Social from '../components/Social'
import Footer from '../components/Footer'


export default function Contact() {
  return (
    <>
    <Header/>
    <Text header="Contact" subtitle="" copy="Feel free to contact me through any of the following options."/>
    <div className="w-5/12 border-box border-box px-4 my-3 mx-auto ">
      <Social channel="Email" value="cristigtzname@gmail.com"/>
      <Social channel="GitHub" url="https://github.com/justbycris" value="git/justbycris"/>
      <Social channel="LinkedIn" url="https://www.linkedin.com/in/cristigtzname/" value="in/cristigtzname"/>

    </div>
    <Footer/>
    </>
  )
}
