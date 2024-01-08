import  './style.css'
import iconVk from '../../images/icon/iconVk.png'
import iconEmeil from '../../images/icon/iconEmail.png'
import iconWatsApp from '../../images/icon/iconWatsApp.png'
import iconSms from '../../images/icon/iconSms.png'
import iconSkype from '../../images/icon/iconSkype.png'
import iconTelegram from '../../images/icon/iconTelegram.svg'

export const Hero = () =>{
    return(
        
    <div className='conteiner'>
        <div className="bg"></div>
        <div className='Hero'>
        <div className='heroLeft'>
            
                <h3>Сделайте шаг <br /> к лучшей жизни <br /> вместе со мной</h3>
                <p>Здесь Вы найдете инструменты и советы, которые помогут Вам раскрыть свой потенциал, преодолеть трудности и создать более счастливую жизнь. Давайте <span>вместе</span> исследовать мир психологии и <span>делать шаги</span> к лучшей версии себя!</p>
            
            <ul className='linkList'>
                
                <li >
                    <a href="/" className='VK'>
                        <img src={iconVk} alt="" />
                    </a>
                </li>
                <li >
                    <a href="/" className='watsApp'>
                        <img src={iconWatsApp} alt="" />
                    </a>
                </li>
                <li >
                    <a href="/" className='sms'>
                        <img src={iconSms} alt="" />
                    </a>
                </li>
            </ul>

        </div>
        <div className='heroCenter'>
            <button>Записаться на <br /> консультацию</button>
        </div>
            <div className='heroRight'>
            <button className='btnTop'>
                <span className='iconTelegramBtn'><img src={iconTelegram} alt="" /></span>
                
                Предлагаю обсудить терапию в мессенджере
            </button>
            <p>Привет! Меня зовут Яна Кравченко. Рада видеть на своем сайте! Я практикующий психолог. Работаю в интегративном подходе с гуманистическим уклоном. У меня вы можете получить как единоразовую консультацию по интересующей вас проблеме, так и <span> пройти курс</span> длительной психотерапии</p>
            <ul>
                <li>
                    <a href="/" className='email'>
                        <img src={iconEmeil} alt="" />
                    </a> 
                </li>
                <li>
                    <a href="/" className='skype'>
                        <img src={iconSkype} alt="" />
                    </a> 
                </li>
            </ul>
            </div>
        </div>
    </div>
      
    
    )
}