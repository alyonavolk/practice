import { useState } from 'react';
import './gallery.scss';
import Foto1 from '../../../resources/img/foto1.jpg';
import Foto2 from '../../../resources/img/foto2.jpg';
import Foto3 from '../../../resources/img/foto3.jpg';
import Foto4 from '../../../resources/img/foto4.jpg';

interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  const [image, setImage] = useState(false);

  return (
    <div className="gallery">
        <img src={Foto1} alt="" 
          className={`foto1 ${ image ? '' : '' }`} 
          onClick={() => setImage(!image)}/>
        <img src={Foto2} alt="" className="foto2"/>
        <img src={Foto3} alt="" className="foto3"/>
        <img src={Foto4} alt="" className="foto4"/>
    </div>
  );
};

export default Gallery;
