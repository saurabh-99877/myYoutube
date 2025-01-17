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



 export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=AU&maxResults=50&key=" + process.env.REACT_APP_KEY;

 export function formatData(data) {
  if(data > 1_000_000)
    return `${(data / 1_000_000).toFixed(1)}M `;
  else if(data >= 1_000) {
    return `${(data / 1_000).toFixed(1)}k`
  }
  else
  return `${data}`;
 };

 export const formatLikes = (Likes) => {
  if(Likes > 1_000_000)
    return `${(Likes / 1_000_000).toFixed(1)}M`;
  else if(Likes >= 1_000) {
    return `${(Likes / 1_000).toFixed(1)}k`
  }
  else
  return `${Likes}`;
 };

 export const SearchSuggestion_API_URL = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const getCommentsUrl = (params) =>  `https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_KEY}&textFormat=plainText&part=snippet&videoId=${params}&maxResults=100`;

export const ChannelInfo_URl = (id) =>`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_KEY}`;

