import './Login.css';
import logo from '../../assets/logo.jpg';
import { useNavigate } from "react-router-dom";

export default function Login () {

    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate("/foods");
    }

    return (
        <>
            <div className='LoginPage'>
                <section className='LoginPage-logo'>
                    <img src={logo} alt="logo" />
                </section>
                <section className='LoginPage-form'>
                    <div className='LoginPage-form-content'>
                        <h3 className='LoginPage-form-title'>
                            ورود به سیستم
                        </h3>
                        <p className='LoginPage-form-text'>
                            برای ورود سماره همراه خود را وارد نمایید
                        </p>
                        <div className='LoginPage-form-inputNumber'>
                            <input type="tel" placeholder='09*********' />
                            <span>شماره همراه</span>
                        </div>
                    </div>
                    <div className='LoginPage-form-btn'>
                        <button type='button' onClick={handleNextPage}>بعدی</button>
                    </div>
                </section>
            </div>
        
        </>
    )
}