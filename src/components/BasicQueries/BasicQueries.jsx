import  './style.css'
import fear from '../../images/basicQueriesIcon/Fear.png'
import goals from '../../images/basicQueriesIcon/Goals.png'
import hardTimes from '../../images/basicQueriesIcon/HardTimes.png'
import love from '../../images/basicQueriesIcon/Love.png'
import potential from '../../images/basicQueriesIcon/Potential.png'
import selbstachtung from '../../images/basicQueriesIcon/Selbstachtung.png'
export const BasicQueries = () =>{
    return(
        
        <div className="conteiner">
            <div className='BasicQueries'>
            <h3>Основные запросы</h3>
            <ul className='basicQueriesTopList'>
                <li>
                    <img src={selbstachtung} alt="" />
                    <h4>Наладить самооценку</h4>
                    <p>Помогу превратить недостатки в достоинства, прийти к согласию с самим собой, обрести чувство гармонии</p>
                </li>
                <li>
                    <img src={potential} alt="" />
                    <h4>Личносный потенциал</h4>
                    <p>Вместе раскроем личностный потенциал: лучше узнать себя, свои возможности, сильные стороны, улучшить качество жизни</p>
                </li>
                <li>
                    <img src={goals} alt="" />
                    <h4>Жизненые цели</h4>
                    <p>Найдем ваше призвание, путь к желанной профессии, сформулируем жизненные цели, которые принесут пользу</p>
                </li>
            </ul>
            <ul className='basicQueriesBottomList'>
                <li>
                    <img src={fear} alt="" />
                    <h4>Страхи и фобии</h4>
                    <p>Вместе мы исследуем корни ваших страхов, преодолеемих, я предоставлю вам необходимые инструменты техники для управления</p>
                </li>
                <li>
                    <img src={hardTimes} alt="" />
                    <h4>Трудные времена</h4>
                    <p>Справимся с кризисом или с тяжелой утратой, переживем потерю или расставание и построим дальнейшие действия, чтобы избежать этого</p>
                </li>
                <li>
                    <img src={love} alt="" />
                    <h4>Улучшение отношений</h4>
                    <p>Мы разработаем эффективные коммуникационные навыки, решим конфликты инайдем способы понимания вваших отношениях</p>
                </li>
            </ul>
            </div>
        </div>
    
    )
}