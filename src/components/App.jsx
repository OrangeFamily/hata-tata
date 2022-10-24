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

import AssortiMass from './comp/Kitchen/Data/DataAssorti';


export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});

  
  const dataAssorti = AssortiMass
  

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
              <h1>
                <AccordionButton className={s.title}>Кухня</AccordionButton>
              </h1>
              <AccordionPanel>
                <Accordion allowMultiple>
                 
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        колекція асорті
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataAssorti} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>Бар</AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>
                    Коктейлі
                  </AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                    
                  </Accordion>
                </AccordionPanel>
              </>
            </AccordionItem>
            {showModal && (
              <Modal objectModal={objectModal} toggleModal={toggleModal} />
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
};
