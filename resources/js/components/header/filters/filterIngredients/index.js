import React, { useState } from 'react';
import { useStyles } from '../styled';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { includeIngredients } from '../../../../redux/filters/actions';
import { excludeIngredients } from '../../../../redux/filters/actions';
import { useDispatch } from 'react-redux';


export const FilterIngredients = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const [open, setOpen] = useState(false);
   const [plusIngredients, setPlusIngredients] = useState('');
   const [minusIngredients, setMinusIngredients] = useState('');

   const handleChangePlusIng = (e) => {
      setPlusIngredients(e.target.value)
   }

   const handleChangeMinusIng = (e) => {
      setMinusIngredients(e.target.value)
   }

   const handleClickPlusIng = () => {
      dispatch(includeIngredients(plusIngredients.split(' ')));
   };

   const handleClickMinusIng = () => {
      dispatch(excludeIngredients(minusIngredients.split(' ')));
   }

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <button type="button" className={ classes.button } onClick={ handleOpen }>
            Ингредиенты
         </button>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={ classes.modal }
            open={ open }
            onClose={ handleClose }
            closeAfterTransition
            BackdropComponent={ Backdrop }
            BackdropProps={ {
               timeout: 500,
            } }
         >
            <Fade in={ open }>
               <div className={ classes.paper }>
                  <div>
                     <label
                        className={ classes.ingredientsLabel }
                        htmlFor="include"
                     >
                        включить ингредиенты
                     </label>
                     <TextField
                        id="include"
                        value={ plusIngredients }
                        label="+ Ингредиенты"
                        variant="outlined"
                        onChange={ handleChangePlusIng }
                        onClick={ handleClickPlusIng }
                     />
                  </div>
                  <div>
                     <label
                        className={ classes.ingredientsLabel }
                        htmlFor="exclude"
                     >
                        исключить ингредиенты
                     </label>
                     <TextField
                        id="exclude"
                        value={ minusIngredients }
                        label="- Ингредиенты"
                        variant="outlined"
                        onChange={ handleChangeMinusIng }
                        onClick={ handleClickMinusIng }
                     />
                  </div>
               </div>
            </Fade>
         </Modal>
      </div >
   );
}