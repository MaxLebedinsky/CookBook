import { Box, Button, FormControl, Modal, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useStyles } from '../styled';

export const DeleteDish = () => {
    const classes = useStyles();
    const [idDelete, setIdDelete] = useState('');
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleChange = (event) => {
        setIdDelete(event.target.value);
    }

    const handleOpenModal = (text) => {
        setModalText(text);
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false)
    };

    const deleteDish = async (id) => {
        let response = await fetch(`/api/full-dishes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
        });
        if (response.ok) {
            handleOpenModal('Рецепт успешно удалён');
        } else {
            handleOpenModal('Блюдо с таким id не найдено');
        }
    };

    const handleDelete = (event) => {
        event.preventDefault();
        if (idDelete) {
            deleteDish(idDelete);
        }
        setIdDelete('');
    };

    return (
    <>
        <Modal
            open={ modal }
            onClose={ handleCloseModal }>
                <div className={ classes.modal }> { modalText } </div>
        </Modal>
        <FormControl className={ classes.root }>
            <Typography component="h2" className={ classes.h2 }>Удаление рецепта:</Typography>
            <Box className={ classes.fileName }>
                        (доступно для пользователя admin)
            </Box>

            <TextField
                className={ classes.formControl }
                type="text" 
                label="id удаляемого блюда" 
                variant="outlined" 
                value={ idDelete }
                name="id-delete"
                onChange={ handleChange }/>
            <Button type="submit" onClick={ handleDelete } className= { classes.form_button } variant="contained">Удалить</Button>
        </FormControl>
    </>
    )
}