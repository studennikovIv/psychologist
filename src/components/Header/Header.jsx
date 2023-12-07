import headerImg from '../../images/header logo.png'
import  './style.css'
export const Header = () =>{
    return(
        
    
        <div className='conteiner'>
            <header className='header'>
        <img src={headerImg} alt="Логотип" />
        <nav>
            <a href="google.com">Меню</a>
            <a href="google.com">О мне</a>
            <a href="google.com">Отзывы</a>
            <a href="google.com">Услуги</a>
            <a href="google.com">Информация</a>
            <a href="google.com">Статьи</a>
        </nav>
        <div className="phone-numbers">
            <a href="tel:+89054959528"> 8(905)495-95-28</a>
            <a href="tel:+89180427687"> 8(918)042-76-87</a>
        </div>
        <button id="register-button">Регистрация</button>
        </header>
        </div>
    
    )
}

 