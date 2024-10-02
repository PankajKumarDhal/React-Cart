// import './Mobile.css'
import './project.module.css'
import styles from './project.module.css'
import '@fortawesome/fontawesome-free/css/all.css';


function items({src,name,price,quantity,increment,decrement,remove}) {
  return (
    <div className={styles.product}>
        <img src={src}></img>
         <div className={styles.about}>
           <p >{name}</p>
           <p>${price}</p>
           <button className={styles.remove} onClick={remove}>Remove</button>
         </div>
         <div className={styles.count}>
            <button onClick={increment}> <i className="fa-solid fa-chevron-up"></i></button>
            <h3>{quantity}</h3>
            <button onClick={decrement}><i className="fa-solid fa-chevron-down"></i></button>
         </div> 
    </div>
  );
}

export default items    