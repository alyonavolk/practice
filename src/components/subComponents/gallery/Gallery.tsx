import { useState } from 'react';
import './gallery.scss';
import Foto1 from '../../../resources/img/foto1.jpg';
import Foto2 from '../../../resources/img/foto2.jpg';
import Foto3 from '../../../resources/img/foto3.jpg';
import Foto4 from '../../../resources/img/foto4.jpg';

interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  return (
    <div className="gallery">
        <img src={Foto1} alt="" 
          className={`foto1 ${ image1 ? 'big_foto' : 'foto1' }`} 
          onClick={() => setImage1(!image1)}/>
        <div className='right-foto'>
          <div className="foto_mini">
            <img src={Foto2} alt="" className={`foto2 ${ image2 ? 'big_foto' : 'foto2' }`} 
          onClick={() => setImage2(!image2)}/>
            <img src={Foto3} alt="" className={`foto3 ${ image3 ? 'big_foto' : 'foto3' }`} 
          onClick={() => setImage3(!image3)}/>
          </div>
          <img src={Foto4} alt="" className={`foto4 ${ image4 ? 'big_foto' : 'foto4' }`} 
          onClick={() => setImage4(!image4)}/>
        </div>
    </div>
  );
};

export default Gallery;
