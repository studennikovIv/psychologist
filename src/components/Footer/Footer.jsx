import  './style.css'
import logo from '../../images/logo.png'
import iconVk from '../../images/icon/iconVk.png'
import iconEmeil from '../../images/icon/iconEmail.png'
import iconWatsApp from '../../images/icon/iconWatsApp.png'
import iconSms from '../../images/icon/iconSms.png'
import iconSkype from '../../images/icon/iconSkype.png'
import iconTelegram from '../../images/icon/iconTelegram.svg'
export const Footer = () =>{
    return(
        
       <div className="conteiner">
        <div className="footer">
            <div className="footerTop">
                <img className='logoFoter' src={logo} alt="" />
                <div className="listLink">
                    <ul>
                        <li>
                            <img src={iconTelegram} alt="" />
                        </li>
                        <li>
                            <img src={iconVk} alt="" />
                        </li>
                        <li>
                            <img src={iconWatsApp} alt="" />
                        </li>
                    </ul>
                    <ul className='bottomList'>
                        <li>
                            <img src={iconSms} alt="" />
                        </li>
                        <li>
                            <img src={iconEmeil} alt="" />
                        </li>
                        <li>
                            <img src={iconSkype} alt="" />
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
                    <input type="text" />
                    <button><img src={iconTelegram} alt="" /></button>
                </div>
            </div>
        </div>
       </div>
    
    )
}