import lamp1 from './images/lamp-1.png';
import lamp2 from './images/lamp-2.png';
import lamp3 from './images/lamp-3.png';

import { BiSearch } from 'react-icons/bi';
import { RxPerson } from 'react-icons/rx';
import { FiShoppingCart } from 'react-icons/fi';

export const assortment = [
  {
    id: 1,
    room: 'Kitchen',
    title: 'Ranarp spotlight lamp',
    info: 'Designed by Nicholai Wiig Hansen. It has an organic and asymmetrical shape, which makes it a decorative lamp that can be placed anywhere that needs mood lighting. You can place it on your sideboard, your windowsill or a small table to create a cosy light in the room. The lampshade can be moved into four different positions, so you can easily change the direction of the light. Night Owl is available in Midnight Blue, named after the blue midnight sky, and Smokey White, named after the creamy white colour of the clouds above.',
    cost: '429',
    image: lamp1,
  },
  {
    id: 2,
    room: 'Kitchen',
    title: 'Arredo spotlight lamp',
    info: 'An elegant, simple, and classic design with the classic Nordic aesthetic that permeates Dyberg Larsen’s design DNA.This lamp is made of matte black metal, giving it a stylish and distinct expression that fits seamlessly into all styles of décor, particularly modern and minimalist homes. The adjustable head allows you to tilt and spin the light source, so it shines in whichever direction you need for a good and comfortable glow. Use the stylish, timeless design as a reading lamp in the reading nook, as a work light in the office, or for a cosy glow in the living room. This lamp is more than just a light source. It’s a stunning, decorative addition to your décor. ',
    cost: '599',
    image: lamp2,
  },
  {
    id: 3,
    room: 'Living room',
    title: 'Lodes spotlight lamp',
    info: 'Genuine Scandinavian design, Danish design heritage, and first-rate build quality. Halo Design was founded in 1997 by the Danish designer Michael Waltersdorff, and the brand has developed a wealth of wonderful lamps that has made it one of the key players on the Danish design market. The Danish identity is important to Halo Design, and alongside Nordic design, functionality, and value for money, it is one of the brand’s four main values. Explore the collection below. We are confident that you will come across a lamp you did not know you needed.',
    cost: '199',
    image: lamp3,
  },
];

export const navMenuItems = [
  { id: 1, icon: <BiSearch />, label: 'Search', href: '#' },
  { id: 2, icon: <RxPerson />, label: 'Account', href: '#' },
  { id: 3, icon: <FiShoppingCart />, label: 'Cart', href: '#' },
];

export const pageLinks = [
  {
    id: 1,
    href: '#',
    label: 'Shop',
  },
  { id: 2, href: '#', label: 'Blog' },
  { id: 3, href: '#', label: 'About' },
  { id: 4, href: '#', label: 'Contact' },
  { id: 5, href: '#', label: 'Team' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'WEB DEVELOPER',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I accidentally updated the billing address on an order rather than the shipping address, which resulted in both addresses being incorrect. Unilevex actually sent out a second order with the correct shipping and billing addresses before they received the first order back. They also didn't charge me anything extra! It was one of the best online support experiences I've ever had.",
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'WEB DESIGNER',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: "Fast delivery, good choice. I know what I want to read and I don't like being forced down 'woke' paths to choose my books. Unilevex doesn't do that meanwhile supporting local bookshops rather than the tax-avoiding megacorps that dominate the net.",
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'INTERN',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'I emailed to ask why my order was… I emailed to ask why my order was delayed. Turns out there was a delay in publication, Unilevex emailed me personally. A REAL PERSON contacted me. Fantastic. I will definitely buy again.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'STUDENT',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: "Win, Win, Win, Win for us. Excellent selection of books, easy to use website, competitive prices - and support for local bookshops. That's a Win, Win, Win, Win for us. And delivery was precisely as promised. Our thanks to all involved. P&P, Liverpool",
  },
];

export const accordionData = [
  {
    id: 1,
    title: 'What is Unilevex?',
    info: 'Unilevex is the representative company. We have more than 200 Spanish manufactures in our database: furniture, lighting, decor and accessories, fabrics, and many other Spanish products. We will help you with the selection, purchase and transportation. On our website you can familiarize with the new furniture collections and many other products made in Spain.',
  },
  {
    id: 2,
    title: 'Is Unilevex A Physical Store?',
    info: 'Unilevex itself is not a physical store and does not manufacture, or warehouse furniture. Unilevex acts as a purveyor of new furniture (distributed solely through Ingram) by linking online shoppers with their favorite local vendors in order to traffic book profits toward indie furniture sellers with their preservation in mind. If you have a specific furniture store you would like to support, we recommend using our Finder to find their affiliate store page on our website. If you order through the site using their specific portal, all proceeds will go straight to their store instead of the general pool that is split up evenly among all Unilvex registered stores.',
  },
  {
    id: 3,
    title: 'Do You Ship To Canada Or Internationally?',
    info: 'No, we currently are US only. We do hope to help support bookstores over the world in the future.',
  },
  {
    id: 4,
    title: 'Does Unilevex Support Bulk Custom Bulk Orders?',
    info: 'We do offer bulk ordering options! Bulk order inquiries can be sent to info@unilevex.org with the email heading "Bulk Order Inquiry".',
  },
  {
    id: 5,
    title: 'Does Unilevex Share Customer Info With Affiliates?',
    info: "We do not share our customer data with third parties. If customer orders from a bookstore's shop page, the bookstore will be able to see the customer information, as Unilevex considers those customers to be the bookstore's customers. The bookstores have access to their customers and order information for their own sales. Customer information is not made available for any other affiliate or partner of Unilevex.",
  },
];
