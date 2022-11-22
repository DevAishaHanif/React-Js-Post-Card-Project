import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const MediaCard = 
({ imageUrl,title,body,card,username,time,image,post1,post2,post3,image3,heart
         ,you,comment,image4,like,image5,message2}) => (
  <div className='mediaCard'>
    <div class="container">
      <h1 class="fbimage">
      {title}
    </h1>
    </div> 
    <br/>
    
    <div className='container2'>
      <p>{card}</p>
      <div>
      <p>
        <img src={image} width={100} alt="" className='userimage'/><br/> <br/>
        <span className='user'><b>{username}</b></span><br/>
        <span className='time'>{time}</span>
        </p>
        <br/><br/><br/>
        <p>
        <p className='line1'>{post1}</p>
        <p className='line2'>{post2}</p>
        <p className='line3'><b>{post3}</b></p>
        <p>
        <img src={image3} width={90} alt="" className='novelimage'/>
        </p>
        <p>
        <img src={heart} width={40} alt="" className='heart'/>
        <span className='you'><b>{you}</b></span>
        <span className='comment'><b>{comment}</b></span>
        </p>
        </p>
      <div>
      <p className='border'></p>
      <p>
      <img src={image4} width={90} alt="" className='like'/>
      <p className='LIKE'><b>{like}</b></p>
      </p>
      <p>
      <img src={image5} width={90} alt="" className='message'/>
      <p className='message2'><b>{message2}</b></p>
      <p className='border'></p>
      </p>
      </div>
      </div>
    </div>
    <p>
      {body}
    </p>
  </div>
)



const MediaPage = () => (
  <>
    <MediaCard
      title="facebook"
      // imageUrl="https://thumbs.dreamstime.com/b/facebook-logo-icon-sleek-elegant-social-media-vector-197357598.jpg"
      card=""
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF2ZJLjC6gwP8BsnCLJ88VkodFXFYlT8y1A&usqp=CAU"
      username="Friend Name"
      time="Today at 09:30"
      post1="I really love this Novel !!"
      post2="If you have a time,, please just read this one.."
      post3="See translation"
      image3="https://i.pinimg.com/736x/64/fc/4c/64fc4ce1f2f7dec5227e0da0daa437cb.jpg"
      heart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x_amK9mlnxEYogRcfbSdiCFvb_Vwnfzfzw&usqp=CAU"
      you="You and 99 others"
      comment="100 Comments"
      image4="https://www.clipartmax.com/png/middle/36-368362_thumb-icon-thumbs-up-facebook-emoji.png"
      like="Like"
      image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlGgvtufSe3xApE5hurgNrWhnXCbEcdVrvusrOCdrot3z0H1zENHEnzqShjxF50m3HIM&usqp=CAU"
      message2="Comment"
      body=""
    />
    
    {<MediaCard 
       title="facebook"
       card=""
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF2ZJLjC6gwP8BsnCLJ88VkodFXFYlT8y1A&usqp=CAU"
       username="Friend Name"
       time="Today at 09:30"
       post1="I really love this Novel !!"
       post2="If you have a time,, please just read this one.."
       post3="See translation"
       image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLd9SyMmBz_jKJU2lz9c4-kYnd0tA8R209Q&usqp=CAU"
       heart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x_amK9mlnxEYogRcfbSdiCFvb_Vwnfzfzw&usqp=CAU"
       you="You and 99 others"
       comment="100 Comments"
       image4="https://www.clipartmax.com/png/middle/36-368362_thumb-icon-thumbs-up-facebook-emoji.png"
       like="Like"
       image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlGgvtufSe3xApE5hurgNrWhnXCbEcdVrvusrOCdrot3z0H1zENHEnzqShjxF50m3HIM&usqp=CAU"
       message2="Comment"
       body=""
       /> }
   
   { 
    <MediaCard 
       title="facebook"
       card=""
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF2ZJLjC6gwP8BsnCLJ88VkodFXFYlT8y1A&usqp=CAU"
       username="Friend Name"
       time="Today at 09:30"
       post1="I really love this Novel !!"
       post2="If you have a time,, please just read this one.."
       post3="See translation"
       image3="https://i.pinimg.com/originals/51/f4/c6/51f4c63e06cdfb3619c5e0b45f1dbd69.jpg"
       heart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x_amK9mlnxEYogRcfbSdiCFvb_Vwnfzfzw&usqp=CAU"
       you="You and 99 others"
       comment="100 Comments"
       image4="https://www.clipartmax.com/png/middle/36-368362_thumb-icon-thumbs-up-facebook-emoji.png"
       like="Like"
       image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlGgvtufSe3xApE5hurgNrWhnXCbEcdVrvusrOCdrot3z0H1zENHEnzqShjxF50m3HIM&usqp=CAU"
       message2="Comment"
       body=""
      /> }
     { <MediaCard 
       title="facebook"
       card=""
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF2ZJLjC6gwP8BsnCLJ88VkodFXFYlT8y1A&usqp=CAU"
       username="Friend Name"
       time="Today at 09:30"
       post1="I really love this Novel !!"
       post2="If you have a time,, please just read this one.."
       post3="See translation"
       image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1lBfJBn6H0rIDm8hOpYezVhLm1nhbaiezg&usqp=CAU"
       heart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x_amK9mlnxEYogRcfbSdiCFvb_Vwnfzfzw&usqp=CAU"
       you="You and 99 others"
       comment="100 Comments"
       image4="https://www.clipartmax.com/png/middle/36-368362_thumb-icon-thumbs-up-facebook-emoji.png"
       like="Like"
       image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlGgvtufSe3xApE5hurgNrWhnXCbEcdVrvusrOCdrot3z0H1zENHEnzqShjxF50m3HIM&usqp=CAU"
       message2="Comment"
       body=""  
     /> }
     { <MediaCard 
       title="facebook"
       card=""
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF2ZJLjC6gwP8BsnCLJ88VkodFXFYlT8y1A&usqp=CAU"
       username="Friend Name"
       time="Today at 09:30"
       post1="I really love this Novel !!"
       post2="If you have a time,, please just read this one.."
       post3="See translation"
       image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvs1nSodvysRo7dXcs0C-GYlh57N73o8SDw&usqp=CAU"
       heart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x_amK9mlnxEYogRcfbSdiCFvb_Vwnfzfzw&usqp=CAU"
       you="You and 99 others"
       comment="100 Comments"
       image4="https://www.clipartmax.com/png/middle/36-368362_thumb-icon-thumbs-up-facebook-emoji.png"
       like="Like"
       image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlGgvtufSe3xApE5hurgNrWhnXCbEcdVrvusrOCdrot3z0H1zENHEnzqShjxF50m3HIM&usqp=CAU"
       message2="Comment"
       body=""  
     /> }
  </>
)

ReactDOM.render(<MediaPage />, document.querySelector("#root"));