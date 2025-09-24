"use client";
import Image from "next/image";
import ToggleTabs from "../ui/Tabs";
import css from "./JourneyDetails.module.css";
import { useState } from "react";

export default function JourneyDetails() {
  const [selectedTab, setSelectedTab] = useState(0);

  const setTab = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <section className={css.journeyDetailsSection}>
      <ToggleTabs
        getSelectedTab={setTab}
        options={["Розвиток малюка", "Тіло мами"]}
      />
      {selectedTab === 0 ? (
        <div className={css.journeyDetailsContainer}>
          <div>
            <Image
              alt="Baby Size"
              src="https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg"
              width={287}
              height={379}
              className={css.babySizeImage}
            />
            <p>Ваш малюк зараз розміом з Авокадо</p>
          </div>
          <div className={css.journeyTextInfo}>
            <p className={css.journeyDescription}>
              Вітаємо з важливою віхою! Ваш малюк офіційно перейшов від стадії
              ембріона до плоду. Це ключовий момент у його розвитку, який
              означає, що всі основні органи та системи вже закладені на своїх
              місцях.
              <br />
              Крихітне серце вже повністю сформоване і старанно бється,
              перекачуючи кров. Мозок розвивається неймовірними темпами, а нирки
              починають виробляти першу сечу. <br />
              Кісточки та хрящі продовжують укріплюватися, формуючи скелет, і
              вже можна розрізнити крихітні коліна, лікті та запястя. На ручках
              та ніжках зникають перетинки між пальцями, а на їхніх кінчиках
              зявляються основи для майбутніх нігтиків. Крихітне серце вже
              повністю сформоване і старанно бється, перекачуючи кров. Мозок
              розвивається неймовірними темпами, а нирки починають виробляти
              першу сечу. <br />
              Кісточки та хрящі продовжують укріплюватися, формуючи скелет, і
              вже можна розрізнити крихітні коліна, лікті та запястя. На ручках
              та ніжках зникають перетинки між пальцями, а на їхніх кінчиках
              зявляються основи для майбутніх нігтиків.
            </p>
            <div className={css.interestingFacts}>
              <div className={css.titleLogoFacts}>
                <svg width={24} height={24} className={css.factsIcon}>
                  <use href="leleka-sprite.svg#icon-star_shine"></use>
                </svg>
                <h4 className={css.factsTitle}>Цікавий факт тижня</h4>
              </div>
              <p className={css.factsDescription}>
                Малюк вже активно рухається, згинаючи ручки та ніжки, хоча ви
                цього ще не можете відчути.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={css.journeyDetails}>
          <div className={css.infoForMomBlock}>
            <div className={css.howYouCanFeel}>
              <h3 className={css.advicesTitle}>Як ви можете почуватись</h3>
              <ul>
                <li>Нудота</li>
                <li>Втома</li>
              </ul>
              <p>
                Ви можете відчувати легке потягування внизу живота. Ранкова
                нудота може все ще турбувати, але скоро має піти на спад.
                Настрій може бути мінливим — це нормально.
              </p>
            </div>
            <div className={css.advices}>
              <h3 className={css.advicesTitle}>Поради для вашого комфорту</h3>
              <ul className={css.advicesList}>
                <li>
                  <div className={css.iconTitleAdvice}>
                    <svg width={24} height={24} className={css.factsIcon}>
                      <use href="leleka-sprite.svg#icon-fork_spoon"></use>
                    </svg>
                    <h5>Харчування</h5>
                  </div>
                  <p>
                    Зосередьтесь на продуктах, багатих на вітамін C (цитрусові,
                    ківі), він допомагає тілу засвоювати залізо.
                  </p>
                </li>
                <li>
                  <div className={css.iconTitleAdvice}>
                    <svg width={24} height={24} className={css.factsIcon}>
                      <use href="/leleka-sprite.svg#icon-fitness_center"></use>
                    </svg>
                    <h5>Активність</h5>
                  </div>
                  <p>
                    Якщо почуваєтесь добре, спробуйте йогу для вагітних. Вона
                    допомагає розслабитись і зняти напругу.
                  </p>
                </li>
                <li>
                  <div className={css.iconTitleAdvice}>
                    <svg width={24} height={24} className={css.factsIcon}>
                      <use href="leleka-sprite.svg#icon-star_shine"></use>
                    </svg>
                    <h5>Відпочинок</h5>
                  </div>
                  <p>
                    Не соромтесь просити про допомогу і більше відпочивайте,
                    коли відчуваєте втому.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.taskBlock}>
            <h2>Важливі завдання</h2>
          </div>
        </div>
      )}
    </section>
  );
}
