// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createApi } from 'unsplash-js';
const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});
export default function handler(req, res) {
  serverApi.photos.get({photoId: 'RDo6d2fveCc'}).then(response => {
    console.log(res); 
    
    res.status(200).json(response)
  }).catch(err => {
    console.error(err);
    res.status(400).json(err);
  });
}
