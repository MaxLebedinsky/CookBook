import { Button, TextField, Typography, FormControlLabel, RadioGroup, Radio, FormControl, FormLabel } from '@material-ui/core';
// import { FormControlLabel } from '@material-ui/core/FormControlLabel';
// import { RadioGroup } from '@material-ui/core/RadioGroup';
import React, { useState } from 'react';
import { TEST_DISH_FOR_POST } from '../dish/const';
import { useStyles } from './styled';

export const AddDishForm = () => {
    const classes = useStyles();

    const [idDelete, setIdDelete] = useState('');
    const [dish, setDish] = useState({ ...TEST_DISH_FOR_POST });

    const postDish = async (dish) => {
        console.log(JSON.stringify(dish));
        let response = await fetch('/api/v1/full-dishes/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(dish)
          });
          
          let result = await response.json();
          console.log(result);
    };

    const deleteDish = async (id) => {
        let response = await fetch(`/api/v1/full-dishes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          });
          
          let result = await response.json();
          console.log(result);
    };
    
    const handleDelete = (event) => {
        event.preventDefault();
        if (idDelete) {
            console.log('deleting dish with id: '+idDelete);
            deleteDish(idDelete);
        }
        setIdDelete('');
    };

    const handleAdd = (event) => {
        event.preventDefault();
        if (dish.dish.title) {
            console.log('adding dish: '+dish);
            postDish(dish);
        }
        // setDish({ ...TEST_DISH_FOR_POST });
    }

    const handleChange = (event) => {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'id-delete' :
                setIdDelete(event.target.value);
                break;
            case 'title' :
                setDish({...dish, dish:{...dish.dish, title: event.target.value}});
                break;
            case 'complexity' :
                setDish({...dish, dish:{...dish.dish, complexity: event.target.value}});
                console.log('selected complexity: '+event.target.value);
                break;
        }  
    };

    return (
    <>
        <Button href="/" className= { classes.form_button } variant="contained">&lt; Вернуться на главную</Button>
        <br/><hr/><br/>
        <Typography component="h2" className={ classes.h2 }>Добавление рецепта:</Typography> 
        <form onSubmit={handleAdd} className={ classes.root }>
            <TextField 
                type="text"
                label="Название блюда"
                variant="outlined"
                id="title"
                onChange={handleChange}
            />
            <FormControl component="fieldset" >
                <FormLabel component="legend">Сложность: </FormLabel>
                <RadioGroup row
                    aria-label="complexity"
                    value={dish.dish.complexity}
                    onChange={handleChange}>
                    <FormControlLabel value="1" control={<Radio id="complexity"/>} label="1" />
                    <FormControlLabel value="2" control={<Radio id="complexity"/>} label="2" />
                    <FormControlLabel value="3" control={<Radio id="complexity"/>} label="3" />
                </RadioGroup>
            </FormControl>
        
            <Button type="submit" className= { classes.form_button } variant="contained" >Добавить рецепт</Button>
        </form>
        <br/><hr/><br/>
        <Typography component="h2" className={ classes.h2 }>Удаление рецепта:</Typography>
        <form onSubmit={handleDelete} className={ classes.root }>
            <TextField
                type="text" 
                label="id удаляемого блюда" 
                variant="outlined" 
                value={idDelete}
                id="id-delete"
                onChange={handleChange}/>
            <Button type="submit" className= { classes.form_button } variant="contained">Удалить</Button>
        </form>
    </>
    )
}