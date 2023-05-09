
import { useForm } from "react-hook-form"

import styles from '../styles/Formulaire.module.css';

export default function Formulaire() {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const onSubmit = (data) => {
        console.log("Votre nom est: "+data.nom+"\n"+"Votre message est: "+data.message+"\n");
       

    }
    
    return <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
         <label>
            Votre nom: 
            <input type="text" 
            {...register('nom', {
                required: 'Votre nom est requis', 
                pattern: {
                    value: /[^0-9]/,
                    message: 'Votre nom ne doit pas contenir de chiffres'
                }
            })}/>
        </label>
        {errors.nom &&
            <div className={styles.erreur}>
                {errors.nom.message}
            </div>
        }
        <label>
            Courriel: 
            <input type="email" 
            {...register('courriel', {
                required: 'Le courriel est requis',
                pattern: {
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: 'Le courriel est invalide'
                }
            })}/>
        </label>
        {errors.courriel &&
            <div className={styles.erreur}>
                {errors.courriel.message}
            </div>
        }

        <label>
            Message: 
            <textarea
            {...register('message', {
                required: 'Le message est requis',
                maxLength: {
                    value: 150,
                    message: 'Votre message contient trop de caractères.'
                }
            })}/>
        </label>
        {errors.message && 
            <div className={styles.erreur}>
                {errors.message.message}
            </div>
        }

        <input className={styles.connexion} type="submit" value="Connexion"/>
    </form>
}