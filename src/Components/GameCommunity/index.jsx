import React, { useEffect, useRef, useState } from 'react';
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
  {index: 0, img: 'static/images/game_image_1.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 1, img: 'static/images/game_image_7.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 2, img: 'static/images/game_image_9.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 3, img: 'static/images/game_image_4.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 4, img: 'static/images/game_image_5.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 5, img: 'static/images/game_image_6.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 6, img: 'static/images/game_image_7.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 7, img: 'static/images/game_image_8.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 8, img: 'static/images/game_image_9.png', title: 'Short title', url:'https://gameloft.com'},
  {index: 9, img: 'static/images/game_image_5.png', title: 'Short title', url:'https://gameloft.com'},
];

const postsList = [
  {index: 0, img: '', content: '1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 1, img: '', content: '2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 2, img: '', content: '3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 3, img: '', content: '4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 4, img: '', content: '5 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 5, img: '', content: '6 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 6, img: '', content: '7 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 7, img: '', content: '8 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 8, img: '', content: '9 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 9, img: '', content: '10 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
];

const NUMBER_OF_LOADING_POST = 3

const GameCommunity = () => {

  const gameRef = useRef(null);
  const postRef = useRef(null);
  const [currentGame, setCurrentGame] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);
  const [MobilePostsList, setMobilePostList] = useState([]);

  useEffect(() => {
    const array = [];
    if (postsList.length >= NUMBER_OF_LOADING_POST) {
      for (let i = 0; i < NUMBER_OF_LOADING_POST; i++) {
        array.push(postsList[i]);
      }
    } else {
      for (let i = 0; i < postsList.length; i++) {
        array.push(postsList[i]);
      }
    }
    setMobilePostList(array);
  }, []);

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

  const handleClickGame = (game) => {
    setCurrentGame(game.index);
    window.open(game.url, '_blank');
  }

  const handleClickLoadPosts = () => {
    const arr = postsList.filter(item => !MobilePostsList.includes(item));
    const array = [...MobilePostsList];
    if (arr.length >= NUMBER_OF_LOADING_POST) {
      for (let i = 0; i < NUMBER_OF_LOADING_POST; i++) {
        array.push(arr[i]);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        array.push(arr[i]);
      }
    }
    setMobilePostList(array);
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
            onClick={() => handleClickGame(item)}
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

  const showDesktopPostsList = () => {
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

  const showMobilePostsList = () => (
    <div className='d-block d-sm-none position-relative'>
      <div className='container'>
        {MobilePostsList.map(item => (<Post key={item.index} img={item.img} content={item.content} />))}
      </div>
      {postsList.length > MobilePostsList.length && 
        <div className='GameCommunity-Mobile-Post-LoadMore d-flex justify-content-center align-items-end'>
          <div
            className='GameCommunity-Mobile-Post-LoadMore-Btn d-flex justify-content-center align-items-center cursor-pointer'
            onClick={() => handleClickLoadPosts()}
          >
            More
          </div>
        </div>
      }
    </div>
  )

  return (
    <div className='GameCommunity'>
      <div className='container text-start'>
        <h2 className='mb-5'>Game Community Hub</h2>
        <h3 className='mb-4 d-none d-sm-block'>Live Game Updates</h3>
        {showGamesList()}
        <div className='d-flex align-items-center'>
          <h3 className='me-auto'>All Posts</h3>
          <img className='me-sm-4 me-3 cursor-pointer' src='static/icons/twitter_icon.png' alt='twitter' onClick={() => window.open('https://twitter.com', '_blank')} />
          <img className='me-sm-4 me-3 cursor-pointer' src='static/icons/instagram_icon.png' alt='instagram' onClick={() => window.open('https://instagram.com', '_blank')} />
          <img className='me-sm-4 cursor-pointer' src='static/icons/facebook_icon.png' alt='facebook' onClick={() => window.open('https://facebook.com', '_blank')} />
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
      {showDesktopPostsList()}
      {showMobilePostsList()}
    </div>
  );
};

export default GameCommunity;