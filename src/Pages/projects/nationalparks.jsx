import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectBlog from '../../components/ProjectBlog.jsx';
import { Link } from "react-router-dom";
import npWikiHomepage from '/src/assets/NP-wiki-homepage.png'
import studioNPwikiScreenshot from '/src/assets/studio-screenshot.png' 
import darkMode from '/src/assets/np-wiki-dark.png'
import lightMode from '/src/assets/np-wiki-light.png'
import chartIMG from '/src/assets/np-wiki-chart.png'
import chartBar from '/src/assets/np-wiki-bar.png'



export default function NationalParks() {
  return (
    <div>
  
      <Header/>
       
          <div className=" max-w-2xl mx-auto p-8">
       <h1 className="font-medium py-4 font-extra text-lg text-slate-600">National Parks Wiki</h1>
       {/* CTA to live project */}
        <a
            href="https://nationalparkswiki.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded mb-4"
            >
            Live project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
     
       <p className="font-extra text-md text-slate-600 whitespace-pre-line">Most park guides are directories: a list, a filter, a card for each place. I wanted to build one that also had something to say. The data suggested a story. Some of the biggest parks, especially in Alaska, get a tiny fraction of the visitors that much smaller parks do. So the project became two things: a good-looking guide to browse, and a chart that shows the contrast.
       <br></br> <br></br> I had three goals:<br></br> <br></br>
        1. A distinctive, editorial look, not a tutorial-app look.<br></br> 
        2. A content model that an editor could work in without touching code.<br></br> 
        3. One interactive piece that communicates something complex clearly.</p>
        <img src={npWikiHomepage} alt={`Image of project's homepage: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="pt-2 pb-6 my-8" loading="lazy"/>
       

       <h2 className="font-medium py-4 font-extra text-lg text-slate-600 mt-8 mb-4">Content: Sanity as a headless CMS</h2>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" > 
        Park data lives in Sanity, and Next.js is the website that reads it. Editors change content in Studio. The code controls how it looks. The schema is the contract between them, so I put thought into it: required fields on name and slug so an editor can't publish a park that would produce a broken URL, a controlled list of regions so the filter and the data can't drift apart, and alt text attached to every image.
        <br></br><br></br>
        I embedded Studio inside the Next.js app, so there's one codebase and one deployment.</p>
       <div className="flex flex-row mb-8  rounded-md">
        <img src={studioNPwikiScreenshot} alt={`Image studio data of project: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="block size-4/4 py-6  mx-auto p-1"/>
        
       </div>
       <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">Design: editorial, not template</h3>
       
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        I used my design background to set the direction before writing much code.
        <br></br><br></br>
        <strong>Palette:</strong> warm paper, deep forest green, and a rust accent, with a full dark mode.<br></br>
        <strong>Type:</strong> Fraunces for display headings, with fluid sizes that scale from phone to desktop without breakpoints.<br></br>
        <strong>Layout:</strong> large image cards with a feature card at the top, and a full-bleed hero image on each park's page.<br></br>
        <strong>Tokens:</strong> colors, spacing, type scale, and easing live as CSS variables in one file, so restyling means changing one place. I wrote plain CSS Modules with no framework, because I wanted the craft to be visible.<br></br>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 rounded-md">
            <img src={darkMode} alt={`Image of project in darkmode: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="block size-2/4 py-6  mx-auto p-1"/>
            <img src={lightMode} alt={`Image of project in lightmode: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="block size-2/4 py-6  mx-auto p-1"/>
       </div>

        {/* The Chart */}

       <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">The chart</h3>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        The chart lets you toggle between annual visitors and acres. When you switch, the bars slide into their new ranking, so you can watch a park like Wrangell–St. Elias drop from the top to near the bottom.
        <br></br><br></br>
        <strong>Hand-rolled SVG:</strong> With 20 bars, a charting library would add a large bundle to draw rectangles. The scale math is a few lines.<br></br>
        <strong>A linear scale, on purpose:</strong> A log scale would make small parks easier to read, but it would also hide the whole point. The reality is that the largest parks dominate one perspective, yet almost disappear in the other.<br></br>
        <strong>It's the only client component:</strong> It needs state and event handlers, so it runs in the browser. Everything else renders on the server and sends no JavaScript.<br></br>
        <strong>Accessible by default:</strong> The toggle is a radio group, every bar is keyboard-focusable and announces its value, and the tooltip appears on focus as well as hover.<br></br>
        </p>

        <div className="flex flex-col mb-8  rounded-md">
            
            <img src={chartIMG} alt={`Chart of project: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="block size-4/4 py-6  mx-auto p-1"/>
       </div>

       {/* Product Design Decision */}

       <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">A product decision: giving the chart its own page</h3>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        In my first version, the chart sat at the bottom of the homepage, under 20 image cards. Once I could see the whole page, it felt wrong. Browsing parks and comparing them are different tasks, and I had stacked them into one page. Few visitors scroll past 20 cards, so the piece I was proudest of was the one least likely to be seen.
        <br></br><br></br>
I moved the chart to its own `/stats` page, where it has room for a real headline, a source note, and a direct link. But that created a new risk: visitors who never click the nav might never find it. So I added a short teaser band under the homepage headline. It states the finding in one sentence and links to the chart. It sits near the top but is only one band tall, so the cards still start high on the page and the listing stays the main event.
 <br></br><br></br>
I made this decision from UX principles and my own judgment, not from user testing. With real traffic I would measure how many visitors reach the chart before and after, and test a version with a mini bar preview inside the band.
        </p>

        <div className="flex flex-col mb-8  rounded-md">
            <img src={chartBar} alt={`Chart Bar ad of project: National Parks Wiki - https://nationalparkswiki.netlify.app/ `} className="block size-4/4 py-6  mx-auto p-1"/>
            
       </div>

        {/* Motion and accessibility */}
         <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">Motion and accessibility</h3>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        All animation uses `opacity` and `transform`, which the browser can animate without recalculating layout. Cards rise in with a capped stagger, the chart bars grow when they scroll into view, and some reveals use scroll-driven CSS animations, wrapped in `@supports` so browsers without them just show the content. Every transition and animation turns off for visitors who ask their device for reduced motion.
        <br></br><br></br>
        Other details: one real link per card (stretched over the whole card, so a screen reader hears one link), a focus ring moved to the card so keyboard users can see where they are, and semantic HTML throughout. 
        <br></br><br></br>
        <strong>Lighthouse scores on the live site:</strong> <br></br>
        • Performance: 99 <br></br>
        • Accessibility: 100 <br></br>
        • Best Practices: 100 <br></br>
        • SEO: 100 
        </p>


         {/* What I'd do next */}
         <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">What I'd do next</h3>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        - Add more interactive elements to the chart.
        - Add more animations to the overall website.
        - Import park data from the National Park Service API instead of entering it by hand.
        - Add a few static bars to the homepage teaser, so the contrast shows before anyone clicks.
        </p>

          {/* How I worked &  What I took from it */}
         <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-1">How I worked &  What I took from it</h3>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        <br></br>Design and engineering decisions aren't separate. The most useful choice in this project wasn't a technique. It was noticing that the layout was wrong and being willing to restructure it. Moving something away from where people are looking means giving them a reason and a path to follow it.
        I built this with Claude as a pairing partner, using it to scaffold, explain tradeoffs, and debug. I made the design and product decisions. 
        </p>

        


      </div>
      <Footer/>
    </div>
  )
}