import './NewsletterStyles.css';

export const Newsletter = () => {
  function suscribeNewsletter () {
    alert('Thanks for suscribe in us Newsletter!');
  }
  return(
    <div className='newsletterContainer'>
      <h3>Newsletter</h3>
      <p>Suscribe in us newsletter for receive more offers</p>
      <input type="email" placeholder='Email'/>
      <button onClick={suscribeNewsletter}>Suscribe</button>
    </div>
  )
}
