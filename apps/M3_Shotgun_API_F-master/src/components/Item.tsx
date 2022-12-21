import {RatingView} from 'react-simple-star-rating';

interface ItemProps {
  item: {
    id: number;
    image_link: string;
    name: string;
    price: number;
    description: string;
    website_link: string;
    rating: number;
  };
}

const Item = (props: ItemProps) => {
  const {item} = props;
  const {id, image_link, name, price, description, website_link, rating } = item;

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <RatingView ratingValue={rating} />
      <p>{description}</p>
      <p>{price}</p>
      <p>{website_link}</p>
    </div>
  );
};
export default Item;


// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:36:05.584Z"
// currency: null
// description: "Why You'll Love It\n\nLightweight pigments blend easily and wear evenly\nProvides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural\n\nFor Best Results: For soft, natural look, brush along cheekbone, sweeping upward."
// id: 488
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Fit Me Bronzer"
// price: "10.29"
// price_sign: null
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/488.json"
// product_colors: [{…}]
// product_link: "https://well.ca/products/maybelline-fit-me-bronzer_31265.html"
// product_type: "bronzer"
// rating: 4.5
// tag_list: []
// updated_at: "2017-12-23T21:08:49.985Z"
// website_link: "https://well.ca"
