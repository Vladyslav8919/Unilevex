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
  // { id: 2, icon: <RxPerson />, label: 'Account', href: '#' },
  { id: 1, icon: <FiShoppingCart />, label: 'Cart', href: '#' },
  { id: 2, icon: <BiSearch />, label: 'Search', href: '#' },
];

export const pageLinks = [
  {
    id: 1,
    href: '#shop',
    label: 'Shop',
  },
  { id: 2, href: '#blog', label: 'Blog' },
  { id: 3, href: '#about', label: 'About' },
  { id: 4, href: '#contact', label: 'Contact' },
  { id: 5, href: '#team', label: 'Team' },
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

export const shopData = [
  {
    id: 1,
    title: 'Hyken Mesh Chair',
    category: 'chair',
    price: 1249,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=934d37b4e74e065312c26bcafd1aa65a30f8ca46845979b5fef3da08eff8df96&X-Amz-SignedHeaders=host',
    desc: `Also known as Wishbone, is a true Danish design classic. Designed by Hans J. Wegner in 1949, the Wishbone chair has been produced by Carl Hansen & Søn since 1950.`,
  },
  {
    id: 2,
    title: 'Branch Verve Chair',
    category: 'chair',
    price: 1399,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=8377607cb5a853d7e88bb405bf6623f9897e24775c2a924d9884a335c27324a3&X-Amz-SignedHeaders=host',
    desc: `Tradition’s Little Petra lounge chair and pouf charm with their compact size, flowing silhouette and soft sheepskin upholstery. The petite, friendly chair and pouf are a lovable example of the Danish funkis style of the 1930s.`,
  },
  {
    id: 3,
    title: 'Futura Antique Brass',
    category: 'lamp',
    price: 699,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_10.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=313db2253cc3f2ea1a53df93c288221acf62fad30ac753079ebe9a8f0e36d169&X-Amz-SignedHeaders=host',
    desc: `Genuine Scandinavian design, Danish design heritage, and first-rate build quality. The carefully finished Wishbone is a masterpiece of traditional craftsmanship and Danish design.`,
  },
  {
    id: 4,
    title: 'Midnight Fritz Hansen Lamp',
    category: 'lamp',
    price: 299,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=b420c7c0faf8e6c7d07504fcdbf4c8a744abc48274fbd006fcb7fc4f8d20ece1&X-Amz-SignedHeaders=host',
    desc: `Cale Floor Lamp Matt Black has a stylish and neat design. The streamlined and modern expression isn’t just a beautiful feature but also a practical one.`,
  },
  {
    id: 5,
    title: 'Kizu DybergLarsen Lamp',
    category: 'lamp',
    price: 229,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_13.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=e9116f096315ba706ce36586d5ff214cdf7c7f86c44c30e8556b2d86a216ab1b&X-Amz-SignedHeaders=host',
    desc: `Lovely design from the Easton lamp collection by Dyberg Larsen, a brand that never compromises on the classic Nordic aesthetic. This is clear to see in this simple, elegant floor lamp. `,
  },
  {
    id: 6,
    title: 'Branch Ergonomic Chair',
    category: 'chair',
    price: 1899,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T092449Z&X-Amz-Expires=25200&X-Amz-Signature=a05c4cc806e0bdd1a55b96624ed3a586b0e74df7b9122aebd704e8b15d92fd31&X-Amz-SignedHeaders=host',
    desc: `A classic of Danish furniture design, created in 1947 by architect Børge Mogensen who was 28 years old at the time. A timeless and organic combination of solid wood frame and paper yearn seat, the J39 chair works perfectly by a dining table as well as in the living room or office.`,
  },
  {
    id: 7,
    title: 'Vaya Limited Edition Chair',
    category: 'chair',
    price: 4899,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_400X308.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T095735Z&X-Amz-Expires=25200&X-Amz-Signature=2407411739b79b9d33477bca54bc74f4f8da8f817caec8dfca09c06201339f36&X-Amz-SignedHeaders=host',
    desc: `A beautiful piece of Danish mid-century design. Crafted from solid wood with a charming hand-woven paper cord seat, the chair is characterised by its crescent-shaped backrest and diagonally placed braces.`,
  },
  {
    id: 8,
    title: 'Wegner Swivel Chair',
    category: 'chair',
    price: 2299,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T095735Z&X-Amz-Expires=25200&X-Amz-Signature=50a3183ea7fdab85eaa61b300f9b2f520359199f7e61ad86e7e92d8eb1638ed5&X-Amz-SignedHeaders=host',
    desc: `Light visually and in weight. No screws or other metal fittings are used in the assembly – yet the stool is extremely comfortable and sturdy, thanks to its innovative three-legged structure and manufacturing method that combines robotics and craftsmanship.  `,
  },
  {
    id: 9,
    title: 'Luxury Swivel Armchair',
    category: 'chair',
    price: 1699,
    img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/630387358d7e9c0015024bf7/appSource/images/img_frame149_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP7NVLCS23%2F20230118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T095735Z&X-Amz-Expires=25200&X-Amz-Signature=baf69e9e57a2bdfd1ced0f0413f932d24fc02389047dd5797ba04cb9db9dca8e&X-Amz-SignedHeaders=host',
    desc: `The Spanish Chair, designed by Børge Mogensen for Fredericia, is a Danish design icon from 1958. Due to the broad armrests, the Spanish Chair can be used without a separate side table, making the surrounding space more open.`,
  },
];

export const sliderData = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];
