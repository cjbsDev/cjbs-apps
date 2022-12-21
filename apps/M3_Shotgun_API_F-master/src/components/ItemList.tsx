import {Key, ReactChild, ReactFragment, ReactPortal} from 'react';
import {RatingView} from 'react-simple-star-rating';
import Link from 'next/link';
import {Grid, Button} from '@mui/material';

interface ItemListProps {
  description: string;
  id: Key | null | undefined;
  image_link: string | undefined;
  name: string;
  brand: string;
  price: number;
  product_type: string;
  rating: number;
};

const ItemList = (props: any) => {
  const {list} = props;
  return (
    <Grid container spacing={5}>
      {
        list.map((item: ItemListProps) => (
          <Grid item xs={4} key={item.id}>
            <div>
              <img src={item.image_link} alt={item.name}/>
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.brand} / {item.product_type}</p>
            </div>
            <div>
              <RatingView ratingValue={item.rating}/>
            </div>
            <div>
              ${item.price}
              <Link href={`/view/${item.id}`}>
                <Button variant="contained">Go Detail</Button>
              </Link>
            </div>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default ItemList;
