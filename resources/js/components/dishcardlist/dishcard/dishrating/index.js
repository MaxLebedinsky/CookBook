import React, { useEffect, useState } from 'react';
import { CircularProgress, Modal, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './styled';
import { useSelector } from 'react-redux';

export const DishRating = (props) => {
    const baseValue = {...props}.rating;
    const changeable = {...props}.changeable;
    const dishId = {...props}.dishId;
    const [value, setValue] = useState(baseValue);
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const userData = useSelector(state => state.access.userData);
    const [loader, setLoader] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        if (userData.id) {
            setValue(+event.target.value);
            postNewRating(+event.target.value, dishId);
            event.target.blur();
        } else {
            handleOpenModal('Для оценки рецепта необходимо войти или зарегистрироваться');
            setValue(baseValue);
        }
    };

    const postNewRating = async (newValue, dishId) => {
        setLoader(true);
        let formData = new FormData();
        formData.append("dish_id", dishId);
        formData.append("rating", newValue);
        let response = await fetch('/api/dish_rating/', {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
              },
            method: 'POST',
            body: formData
          });
          if (response.ok) { 
                let updatedValue = await response.json();
                setValue(updatedValue.data.rating);
                handleOpenModal(`Ваша оценка учтена. Новое значение рейтинга данного рецепта: ${updatedValue.data.rating}`);
            }
          else { console.log('error posting new rating value') }
          setLoader(false);
    }

    const handleOpenModal = (text) => {
        setModalText(text);
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
        // setValue(baseValue);
    };

    useEffect(() => {
        setValue(baseValue);
    }, [baseValue]);

    return (
        <span className={classes.root}>
            <Modal open={ modal } onClose={ handleCloseModal }>
                <div className={ classes.modal }>{ modalText }</div>
            </Modal>
            <Rating className={classes.ratingStars}
                name="rating-stars"
                readOnly={!changeable}
                value={value}
                precision={0.5}
                size="small"
                onChange= { handleChange }
            />
            <Typography 
                component="span" 
                className={classes.ratingLabel}
                color="textSecondary">
                ( {value} из 5 )
            </Typography>
            {
                loader ?
                // <span className={ classes.circular }>
                    <CircularProgress className={ classes.circular } color="secondary" />
                // </span>
                :
                <></>
            }
        </span>
    );
    }