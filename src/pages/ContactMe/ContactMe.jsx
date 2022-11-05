import secondaryComponents from '../../secondaryComponents/secondaryComponents';
import './ContactMe.scss';

const ContactMe = () => {
  return (
    <div className='contact'>
        <div className='contact__container'>
            <div className='contact__content-wrapper'>
                <div className='contact__content'>
                    <div className='contact__content-header'>
                        <h2 className='title'>Contact Me</h2>
                        <p className='sub-text'>Hi there, contact me to ask me about anything you have in mind.</p>
                    </div>
                    <form>
                        <div className='contact__details'>
                            <div className='contact__firstname'>
                                <label htmlFor="first_name">First name</label>
                                <input type={'text'} name='first_name' id='first_name' placeholder='Enter your first name' required />
                                <p id='validation-error'>Please enter a message</p>
                            </div>
                            <div className='contact__lastname'>
                                <label htmlFor="last_name">Last name</label>
                                <input type={'text'} name='last_name' id='last_name' placeholder='Enter your last name' required />
                                <p id='validation-error'>Please enter a message</p>
                            </div>
                        </div>
                        <div className='contact__email'>
                            <label htmlFor="email">Email</label>
                            <input type={'email'} name='email' id='email' placeholder='yourname@email.com' required />
                            <p id='validation-error'>Please enter a message</p>
                        </div>
                        <div className='contact__message'>
                            <label htmlFor="message">Message</label>
                            <textarea className='message' name="message" id="message" cols="20" rows="5" placeholder={`Send me a message and I'll reply you as soon as possible...`} style={{ width: '100%' }} required ></textarea>
                            <p id='validation-error'>Please enter a message</p>

                        </div>
                        <div className='contact__check'>
                            <input type={'checkbox'} name='check' id='check' />
                            <label htmlFor="check">You agree to providing your data to 'name' who may contact you</label>
                        </div>
                        <button id='btn__submit'>Send message</button>
                    </form>

                </div>
            </div>
        </div>
        <secondaryComponents.Footer />
    </div>
  )
}

export default ContactMe