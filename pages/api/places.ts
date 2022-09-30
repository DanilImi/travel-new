import { IPlace } from './../../app/types/place';
import japanImages from '../../assets/images/images.jpg'
import { NextApiRequest, NextApiResponse } from 'next';
const places:IPlace[] = [
  {
    slug: 'tokyo',
    description: 'wjkecbewkjcewkjcbew',
    distance: 10453,
    imagePath: japanImages.src,
    location: 'japan',
    rating: 5,
    duration: '10 days',
    googleMapLink: 'kjbkbjkbk',
    mapImage: 'ghgjjhjh'
  }
]
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places)
}
