export const ytLogo = 'https://www.royallythamproshop.com/wp-content/uploads/2017/11/YT-Logo-e1510060417884.jpg';

export const sections = [
    {
        title: 'Subscriptions',
        items: [
            'chess24',
            'Yatinder Singh',
            'AB Black',
            'Ryneeboy',
            'ChessBase India',
            'Abel Albonetti',
            'Fitness Icon Ganes...'
        ],
    },
    {
        title: 'Explore',
        items: [
          'Trending',
          'Music',
          'Gaming',
          'News',
          'Sports',
          'Education',
          'Live',
        ],
      },
      {
        title: 'More from YouTube',
        items: [
          'YouTube Premium',
          'Movies & Shows',
          'Gaming',
          'Live',
          'Fashion & Beauty',
          'Learning',
          'Spotlight',
        ],
      },
]

 export const btnList = [
  'All',
  'Mixes',
  'Music',
  'Live',
  'Gaming',
  'News',
  'Sports',
  'Shorts',
  'Learning',
  'Travel',
  'Food',
  'Automotive',
  'Pets & Animals',
  'Science & Technology',
  'Health & Fitness',
  'Comedy',
  'Trending',
  'Music',
  'Gaming',
  'News',
  'Sports',
  'Shorts',
  'Learning',
  'Fashion & Beauty',
  'Travel',
  'Food',
  'Automotive',
  'Pets & Animals',
  'Science',
  'Health & Fitness',
  'Comedy',
 ];



 export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + process.env.REACT_APP_POPULAR_KEY;

 export function formatViews(views) {
  if(views > 1_000_000)
    return `${(views / 1_000_000).toFixed(1)}M views`;
  else if(views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}k views`
  }
  else
  return `${views} views`;
 };



 


 