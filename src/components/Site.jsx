import React from 'react'

const siteText = [
  {
    text: ["make", "2차포트폴리오", "seowoo"],
    title: "웹표준을 준수한 웹사이트",
    code: "/",
    view: "/"
  },
  {
    text: ["make", "2차포트폴리오", "seowoo"],
    title: "웹표준을 준수한 웹사이트",
    code: "/",
    view: "/"
  },
  {
    text: ["make", "2차포트폴리오", "seowoo"],
    title: "웹표준을 준수한 웹사이트",
    code: "/",
    view: "/"
  },
  {
    text : ["make","2차포트폴리오","seowoo"],
    title:"웹표준을 준수한 웹사이트",
    code:"/",
    view:"/"
  },
]

const Site = () => {
  return (
    <div id='site'>
      <div className='site_inner'>
        <div className='site_wrap'>
          <article className={`site_item s${key+1}`} key={key}>
            <span className='num'>{key+1}.</span>
            <div className='text'>
              <div>{Site.text[0]}</div>
              <div>{Site.text[1]}</div>
              <div>{Site.text[2]}</div>
            </div>
              <h3 className='title'>
              </h3>
              <div className='bnt'>
                <a href="/"></a>
                <a href="/"></a>
              </div>
              <div className='info'>
                <span> </span>
                <span></span>
              </div>
          </article>
          <article className='site_item s2'>
            <span className='num'>2.</span>
            <div className='text'>
              <div></div>
              <div></div>
              <div></div>
              <h3 className='title'>
                
              </h3>
              <div className='bnt'>
                <a href="/"></a>
                <a href="/"></a>
              </div>
              <div className='info'>
                <span> </span>
                <span></span>
              </div>
            </div>
          </article>
          <article className='site_item s3'>
            <span className='num'>2.</span>
            <div className='text'>
              <div></div>
              <div></div>
              <div></div>
              <h3 className='title'>
                  
              </h3>
              <div className='bnt'>
                <a href="/"></a>
                <a href="/"></a>
              </div>
              <div className='info'>
                <span> </span>
                <span></span>
              </div>
            </div>
          </article>
          <article className='site_item s4'>
            <span className='num'>2.</span>
            <div className='text'>
              <div></div>
              <div></div>
              <div></div>
              <h3 className='title'>
              </h3>
              <div className='bnt'>
                <a href="/"></a>
                <a href="/"></a>
              </div>
              <div className='info'>
                <span></span>
                <span></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Site
