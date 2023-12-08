import headerImg from '../../images/header logo.png'
import headerRegistrationIcon from '../../images/registrationIcon.png'
import  './style.css'
export const Header = () =>{
    return(
        
    
        <div className='conteiner'>
            <header className='header'>
               <a href="google.com"> <img src={headerImg} alt="Логотип" /></a>
                <nav className='navList'>
                    <a className='active' href="/">Меню</a>
                    <a href="/">Обо мне</a>
                    <a href="/">Отзывы</a>
                    <a href="/">Услуги</a>
                    <a href="/">Информация</a>
                    <a href="/">Статьи</a>
                </nav>
                <div className="telHeader">
                    <a href="tel:+89054959528"> 8(905)495-95-28</a>
                    <a href="tel:+89180427687"> 8(918)042-76-87</a>
                </div>

                <button className="registerButton">
                    <img src={headerRegistrationIcon} alt="icon" />
                    Регистрация
                </button>
            </header>
        </div>
    
    )
}

 