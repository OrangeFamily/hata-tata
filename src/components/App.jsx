import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { useState } from 'react';

import { Modal } from './Modal/Modal';
import s from './App.module.scss';
import { List } from './comp/List/List';
import ColdEatMass from './comp/Kitchen/Data/DataColdEat';
import SaladsMass from './comp/Kitchen/Data/DataSalads';
import FirstMass from './comp/Kitchen/Data/DataFirst';
import MangalMass from './comp/Kitchen/Data/DataMangal';
import MainMass from './comp/Kitchen/Data/DataMain';
import { ModalTwo } from './Modal/ModalTwo';





export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});

 const dataColdEat=ColdEatMass
 const dataSalads=SaladsMass
 const dataFirst =FirstMass
 const dataMangal=MangalMass
 const dataMain=MainMass
  
  

  const dataModal = (title, price, text, src) => {
    toggleModal();
    setObjectModal({ title, price, text, src });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <>
      <div className={s.upper}>
        <header className={s.header}>
          <a
            href="https://misteram.com.ua/chernigov/orangebar"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src={require('./img/am.png')} alt="" className={s.iconAm} /> */}
            <button className={s.iconAm}>ДОСТАВКА</button>
          </a>
          <a href="tel:+380939179177" className={s.tel}>
            <p className={s.telSize}>+38 093 91 79 177</p>
          </a>
          <a
            href="https://instagram.com/orange.bar_club?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src={require('./img/inst.png')} alt="" className={s.icon} />
          </a>
        </header>
        <section className={s.main}>
          <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
          <img
            src={require('./img/orangeLogo.png')}
            alt=""
            className={s.logo}
          />
          <Accordion allowMultiple>
            <AccordionItem>
              <h1 className={s.titleH}>
                <AccordionButton className={s.title}>Кухня</AccordionButton>
              </h1>
              <AccordionPanel>
                <Accordion allowMultiple>
                 
                <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        холодні закуски
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataColdEat} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        салати
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataSalads} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        перші страви
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataFirst} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        страви з мангалу
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataMangal} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        основні страви
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataMain} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem>
              <>
                <h1 className={s.titleH}>
                  <AccordionButton className={s.title}>Бар</AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        фірмові коктейлі від тата
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataNarCoct} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1 className={s.titleH}>
                  <AccordionButton className={s.title}>
                    Коктейлі
                  </AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem> */}
            {showModal && (
              // <Modal objectModal={objectModal} toggleModal={toggleModal} />
              <ModalTwo objectModal={objectModal} toggleModal={toggleModal} />
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
};
