import React from 'react'





const Page = () => {
    
    return (
        
      <>
         <div  className="x-top">
  <div  className="x-row x-padding x-black">
    <div  className="x-col s3">
      <a href="#home"  className="x-button x-block x-black">HOME</a>
    </div>
    <div  className="x-col s3">
      <a href="#question"  className="x-button x-block x-black">QUESTION</a>
    </div>
    <div  className="x-col s3">
      <a href="#GoogleForm"  className="x-button x-block x-black">FORM</a>
    </div>
    <div  className="x-col s3">
      <a href="#NEXT"  className="x-button x-block x-black">NEXT</a>
    </div>
  </div>
</div>

<header  id="home">
    <img src="https://res.cloudinary.com/dpb0o6dli/image/upload/v1630000182/wallpaperflare.com_wallpaper_2_k8gft0.jpg" alt="BGIMG" className="x-display-container x-grayscale-min bgimg" />
  <div  className="x-display-middle x-center">
    <span  className="x-text-white" style={{fontSize:"90px"}}>IGS-21<br></br>MASAAFAT</span>
  </div>
</header>
{/* style={{font-size:"90px"} */}
<div  className="x-sand x-grayscale x-large">


<div  className="x-container" id="question">
  <div  className="x-content" style={{maxWidth:"700px"}}>
    <h5  className="x-center x-padding-64"><span  className="x-tag x-wide" style={{fontSize: "30px"}}>QUESTION</span></h5>
    <p>The next place is a place of education. This college is known for its close association with Indian Politics. Its founders were pioneers of The Indian National Congress as well as Indian Socialist Movement. The college has produced notable alumni including two Indian Prime Ministers - P.V. Narsimha Rao and Vishwanath Pratap Singh
        When you click on the 360 degree view, You observe a sign mentioning the name of department in which this college offers a degree in bachelor of arts. Let 'X' be the number of letters in the word written on that sign. Also, let 'Y' be the number of females on cycle as seen in the whole 360 degree view. Mention 'X+Y'</p>
    <div  className="x-panel x-leftbar x-light-grey">
      <p><i>"It's not about the treasure - it's about the hunt. -Abigail</i></p>
      <p>-William Ritter</p>
    </div>
    <img src="https://res.cloudinary.com/dpb0o6dli/image/upload/v1630001180/Sg5pZF_1_v8qmjy.jpg" style={{width:"100%" , maxWidth:"1000px"}} alt="img2" className="x-margin-top img2"/>
  </div>
</div>
<br></br>
<div id="GoogleForm">
    <h3 style={{textAlign:"center"}}>GOOGLE FORM</h3><br></br>
    <div>
      <a title="Google Form" href="https://forms.gle/F8ubibKwqvRCDYC8A">Click here</a>
      <p>to fill in the Google form to answer the question.<br></br>
        Please provide appropriate Answer with Explanations</p>
    </div>
</div>
<br></br>
</div>
 
<div  className="x-container" id="NEXT">
  <div  className="x-content" style={{maxWidth:"700px"}}>
    <h5  className="x-center x-padding-64"><span  className="x-tag x-wide" style={{fontSize:"30px"}}>NEXT MYSTERY</span></h5>
    <p>Great! You solved the puzzle!<br></br>Let your Answer of the question be '<i>Answer</i>'
    Then the next portal wil have the url of the form: templat<br></br>
  Type that into the brower and there you go</p>
  </div>
</div>
<br></br>

<hr style={{maxWidth: "90%"}} />
<footer  className="x-center x-light-grey x-padding-48 x-large">
  <div id="socials">
    <h3  className="aboutHead">
        SOCIAL MEDIA
    </h3>
    <div>
        <a  className="icon" href="https://www.instagram.com/ppoc_iitk/?hl=en" target="_blank"  rel="noopener noreferrer"><i  className="fab fab_igs fa-instagram" ></i></a>
      
        <a  className="icon" href="https://www.facebook.com/groups/1560940770654788/" target="_blank"  rel="noopener noreferrer"><i  className="fab fab_igs fa-facebook"></i></a>
        
        <a  className="icon" href="https://in.linkedin.com/company/sos-iitkanpur" target="_blank"  rel="noopener noreferrer"><i  className="fab fab_igs fa-linkedin-in" ></i></a>
      
    </div>
  </div> 

  <div id="end">INDIAN GOVERNENCE SUMMIT'21<br></br><a href="https://www.facebook.com/groups/1560940770654788/" title="PPOC IITK" target="_blank"  rel="noreferrer" className="x-hover-text-green">PPOC IITK</a></div> 
</footer>
<div id="footer">
    Copyright <i  className="far fa-copyright"></i> Public Policy And Opinion Cell, IIT Kanpur
</div>
      </>
    )
    }

            export default Page;