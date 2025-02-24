import fileUploaderImage from './assets/images/file-uploader-screenshot.webp';
import membersOnlyImage from './assets/images/members-only.png';
import blogApiImage from './assets/images/blog-api.png';
import shoppingCartImage from './assets/images/shopping-cart.png';
import battleshipImage from './assets/images/battleship.png';

const projects = [
  {
    title: 'Battleship',
    descr: 'Multiplayer Game',
    name: 'battleship',
    videoSrc:
      'https://d3tc3tvjs941dn.cloudfront.net/projects/battleship/battleship.mp4',
    img: battleshipImage,
    codeLink: 'https://github.com/tphamdo/battleship-v2',
  },
  {
    title: 'Blog Api',
    descr: 'A Simple Blog Site',
    name: 'blogapi',
    videoSrc:
      'https://d3tc3tvjs941dn.cloudfront.net/projects/blogapi/blogapi.mp4',
    img: blogApiImage,
    codeLink: 'https://github.com/tphamdo/blog-api',
  },
  {
    title: 'File Uploader',
    descr: 'A Google Drive Clone',
    name: 'fileuploader',
    videoSrc:
      'https://d3tc3tvjs941dn.cloudfront.net/projects/fileuploader/fileuploader.mp4',
    img: fileUploaderImage,
    codeLink: 'https://github.com/tphamdo/file-uploader',
  },
  {
    title: 'Members Only',
    descr: 'An Exclusive Club',
    name: 'membersonly',
    videoSrc:
      'https://d3tc3tvjs941dn.cloudfront.net/projects/membersonly/members-only.mp4',
    img: membersOnlyImage,
    codeLink: 'https://github.com/tphamdo/members-only',
  },
  {
    title: 'Pure Threads',
    descr: 'A Shopping Cart',
    name: 'shoppingcart',
    videoSrc:
      'https://d3tc3tvjs941dn.cloudfront.net/projects/shoppingcart/shopping-cart-cropped.webm',
    img: shoppingCartImage,
    codeLink: 'https://github.com/tphamdo/shopping-cart',
    siteLink: 'https://shopping-cart-ecru-five.vercel.app/',
  },
];

export default projects;
