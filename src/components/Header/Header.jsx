import headerImg from '../../images/header logo.png'
import  './style.css'
export const Header = () =>{
    return(
        
    
        <div className='conteiner'>
            <header className='header'>
        <img src={headerImg} alt="Логотип" />
        <nav>
            <a href="#">Меню</a>
            <a href="#">О мне</a>
            <a href="#">Отзывы</a>
            <a href="#">Услуги</a>
            <a href="#">Информация</a>
            <a href="#">Статьи</a>
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

 