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

   const handleKeyPressPlusIng = (e) => {
      if (e.key === 'Enter') {
         dispatch(includeIngredients(plusIngredients.length > 0 ? plusIngredients.split(' ') : ""));
      }
   };

   const handleKeyPressMinusIng = (e) => {
      if (e.key === 'Enter') {
         dispatch(excludeIngredients(minusIngredients.length > 0 ? minusIngredients.split(' ') : ""));
      }
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
                  <div className={ classes.ingredientsWrap }>
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
                        onKeyPress={ handleKeyPressPlusIng }
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
                        onKeyPress={ handleKeyPressMinusIng }
                     />
                  </div>
               </div>
            </Fade>
         </Modal>
      </div >
   );
}