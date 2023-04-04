import React, { useRef, useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Post from './Post';

const gameSettings = {
  className: "GameCommunity-Slider-Game",
  centerMode: true,
  infinite: true,
  slidesToShow: 6,
  speed: 500,
  dots: false,
  arrow: false,
};

const postSettings = {
  className: "GameCommunity-Slider-Post",
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  speed: 500,
  dots: false,
  arrow: false,
};

const gamesList = [
  {index: 0, img: 'static/images/game_image_1.png', title: 'Short title'},
  {index: 1, img: 'static/images/game_image_7.png', title: 'Short title'},
  {index: 2, img: 'static/images/game_image_9.png', title: 'Short title'},
  {index: 3, img: 'static/images/game_image_4.png', title: 'Short title'},
  {index: 4, img: 'static/images/game_image_5.png', title: 'Short title'},
  {index: 5, img: 'static/images/game_image_6.png', title: 'Short title'},
  {index: 6, img: 'static/images/game_image_7.png', title: 'Short title'},
  {index: 7, img: 'static/images/game_image_8.png', title: 'Short title'},
  {index: 8, img: 'static/images/game_image_9.png', title: 'Short title'},
  {index: 9, img: 'static/images/game_image_5.png', title: 'Short title'},
];

const postsList = [
  {index: 0, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 1, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 2, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 3, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 4, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 5, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 6, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 7, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 8, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 9, img: '', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
];

const GameCommunity = () => {

  const gameRef = useRef(null);
  const postRef = useRef(null);
  const [currentGame, setCurrentGame] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);

  const handlePrevGame = () => {
    if (gameRef.current) gameRef.current.slickPrev();
  };

  const handleNextGame = () => {
    if (gameRef.current) gameRef.current.slickNext();
  };

  const handlePrevPost = () => {
    if (postRef.current) postRef.current.slickPrev();
  };

  const handleNextPost = () => {
    if (postRef.current) postRef.current.slickNext();
  };

  const handleClickGame = (index) => {
    setCurrentGame(index)
  }

  const showGamesList = () => (
    <div className='position-relative mb-sm-5 mb-3'>
      <img
        className='GameCommunity-Slider-Game-arrow-left'
        src='static/icons/game_list_arrow.png'
        alt='arrow'
        onClick={() => handlePrevGame()}
      />
      <Slider {...gameSettings}
        ref={gameRef}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {gamesList.map(item => (
          <div
            className='GameCommunity-Slider-Game-item text-center'
            key={item.index}
            onClick={() => handleClickGame(item.index)}
          >
            <div className='d-flex justify-content-center mb-1 mb-sm-4'>
              <img className={ currentGame === item.index && 'GameCommunity-Slider-Game-item-seleted' } src={item.img} alt='game' />
            </div>
            {item.title}
          </div>
        ))}
      </Slider>
      <img
        className='GameCommunity-Slider-Game-arrow-right'
        src='static/icons/game_list_arrow.png'
        alt='arrow'
        onClick={() => handleNextGame()}
      />
    </div>
  )

  const showPostsList = () => {
    return (
      <div className='GameCommunity-Slider-Post d-none d-sm-block'>
        <Slider {...postSettings}
          ref={postRef}
          afterChange={index => setCurrentPost(index)}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
          ]}
        >
          {postsList.map(item => <Post key={item.index} img={item.img} content={item.content} />)}
        </Slider>
        <img
          className='flipX me-3 cursor-pointer'
          src='static/icons/GameContent_arrow.png'
          alt='GameContent_arrow'
          onClick={() => handlePrevPost()}
        />
        <span className='GameCommunity-Slider-Post-paging'><b>{currentPost + 1}</b> / {postsList.length}</span>
        <img
          className='ms-3 cursor-pointer'
          src='static/icons/GameContent_arrow.png'
          alt='GameContent_arrow'
          onClick={() => handleNextPost()}
        />
      </div>
    )
  }

  return (
    <div className='GameCommunity'>
      <div className='container text-start'>
        <h2 className='mb-5'>Game Community Hub</h2>
        <h3 className='mb-4 d-none d-sm-block'>Live Game Updates</h3>
        {showGamesList()}
        <div className='d-flex align-items-center'>
          <h3 className='me-auto'>All Posts</h3>
          <img className='me-sm-4 me-3 cursor-pointer' src='static/icons/twitter_icon.png' alt='twitter' />
          <img className='me-sm-4 me-3 cursor-pointer' src='static/icons/instagram_icon.png' alt='instagram' />
          <img className='me-sm-4 cursor-pointer' src='static/icons/facebook_icon.png' alt='facebook' />
          <div className='GameCommunity-search-post d-none d-md-flex'>
            <input type='text' placeholder='Search' />
            <img className='cursor-pointer' src='static/icons/search_btn_icon.png' alt='search' />
          </div>
        </div>
        <div className='GameCommunity-search-post d-flex d-md-none mt-2'>
          <input type='text' placeholder='Search' />
          <img className='cursor-pointer' src='static/icons/search_btn_icon.png' alt='search' />
        </div>
      </div>
      {showPostsList()}
    </div>
  );
};

export default GameCommunity;