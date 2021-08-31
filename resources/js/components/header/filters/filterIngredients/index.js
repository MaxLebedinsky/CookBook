import React, { useState } from 'react';
import { useStyles } from '../styled';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import {
   includeIngredients,
   excludeIngredients,
   includeIngredientsValue,
   excludeIngredientsValue,
} from '../../../../redux/filters/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';


export const FilterIngredients = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const [open, setOpen] = useState(false);
   const plusIngredients = useSelector(state => state.filters.includeIngredientsValue);
   const minusIngredients = useSelector(state => state.filters.excludeIngredientsValue);

   const handleChangePlusIng = (e) => {
      dispatch(includeIngredientsValue(e.target.value))
   }

   const handleChangeMinusIng = (e) => {
      dispatch(excludeIngredientsValue(e.target.value))
   }

   const handleReset = () => {
      dispatch(includeIngredientsValue(''));
      dispatch(excludeIngredientsValue(''));
      dispatch(includeIngredients([]));
      dispatch(excludeIngredients([]));
   };

   const handleSetIngredients = () => {
      dispatch(includeIngredients(plusIngredients.length > 0 ? plusIngredients.split(' ') : ""));
      dispatch(excludeIngredients(minusIngredients.length > 0 ? minusIngredients.split(' ') : ""));
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         dispatch(includeIngredients(plusIngredients.split(' ')));
         dispatch(excludeIngredients(minusIngredients.split(' ')));
      }
   };

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button type="button" className={ classes.button } onClick={ handleOpen }>
            Ингредиенты
         </Button>
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
                  <Typography className={ classes.modalTitle } color="textPrimary">
                     Показать рецепты
                  </Typography>
                  <div className={ classes.filtersContainer }>
                     <div className={ classes.ingredientsWrap }>
                        <label
                           className={ classes.ingredientsLabel }
                           htmlFor="include"
                        >
                           содержащие
                        </label>
                        <TextField
                           className={ `${classes.textfield} ${classes.textfieldplus}` }
                           id="include"
                           value={ plusIngredients }
                           label="+ Ингредиенты"
                           variant="outlined"
                           onChange={ handleChangePlusIng }
                           onKeyPress={ handleKeyPress }
                           color="secondary"
                        />
                     </div>
                     <div className={ classes.ingredientsWrap }>
                        <label
                           className={ classes.ingredientsLabel }
                           htmlFor="exclude"
                        >
                           не содержащие
                        </label>
                        <TextField
                           className={ classes.textfield }
                           id="exclude"
                           value={ minusIngredients }
                           label="– Ингредиенты"
                           variant="outlined"
                           onChange={ handleChangeMinusIng }
                           onKeyPress={ handleKeyPress }
                           color="secondary"
                        />
                     </div>
                  </div>
                  <span className={ classes.prompt }>* Если ингредиентов больше одного, разделите их пробелом</span>
                  <div className={ classes.ingredientsButtonsWrap }>
                     <Button
                        variant="contained"
                        className={ `${classes.ingredientsButton} ${classes.ingredientsButtonReset}` }
                        onClick={ handleReset }
                     >
                        Cбросить
                     </Button>
                     <Button
                        variant="contained"
                        className={ classes.ingredientsButton }
                        onClick={ handleSetIngredients }
                     >
                        Применить
                     </Button>

                  </div>
               </div>
            </Fade>
         </Modal>
      </div >
   );
}