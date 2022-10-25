import s from './List.module.scss'
 export const Bear = ({data, onModal}) => {

    return data.map(e=>(
     
        <div
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.price2, e.text, e.src)}
      className={s.item}
    ><img src={e.src} alt="" className={s.sizeImg} />
      <div>
        <div className={s.itemMain}><h3 className={s.title}>{e.title}</h3>
        <div className={s.priceSize}>
          <h3 className={s.price}>{e.price}</h3>
        <h3 className={s.price}>{e.price2}</h3>
        </div>

        </div>
        
        <p className={s.text}>{e.text}</p>
      </div>

      
    </div>
    
      
    ));
    };

 