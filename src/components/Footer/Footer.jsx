import  './style.css'
import logo from '../../images/logo.png'
import iconVk from '../../images/icon/iconVk.png'
import iconEmeil from '../../images/icon/iconEmail.png'
import iconWatsApp from '../../images/icon/iconWatsApp.png'
import iconSms from '../../images/icon/iconSms.png'
import iconSkype from '../../images/icon/iconSkype.png'
import iconTelegram from '../../images/icon/iconTelegram.svg'
import sendSms from '../../components/../images/icon/tg2.png'
export const Footer = () =>{
    return(
        
       <div className="conteiner">
        <div className="footer">
            <div className="footerTop">
                <img className='logoFoter' src={logo} alt="" />
                <div className="listLink">
                    <ul>
                        <li>
                            <a href="/" className='telegram'>
                                <img src={iconTelegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='VK'>
                                <img src={iconVk} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='watsApp'>
                                <img src={iconWatsApp} alt="" />
                            </a>
                        </li>
                    </ul>
                    <ul className='bottomList'>
                        <li>
                            <a href="/"  className='sms'>
                                <img src={iconSms} alt="" />
                            </a>
                        </li>
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
                <div className="textConteiner">
                    <h4>Получайте первыми новости!</h4>
                    <p>Оставьте свою почту, чтобы уведомления об новинках пришли незамедлительно</p>
                </div>
            </div>
            <div className="footerBottom">
                <p>Политика конфиденциальности</p>
                <p className='copirate'>2023 Все права защищены</p>
                <div className="formFooter">
                    <input type="text"  placeholder='Ваша почта'/>
                    <button><img src={sendSms} alt="" /></button>
                </div>
            </div>
        </div>
       </div>
    
    )
}