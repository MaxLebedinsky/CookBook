import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { TEST_DISH_FOR_POST } from '../dish/const';

export const AddDishForm = () => {

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
        setDish({ ...TEST_DISH_FOR_POST });
    }

    const handleChange = (event) => {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'id-delete' :
                setIdDelete(event.target.value);
                break;
            case 'title' :
                setDish({...dish, dish:{...dish.dish, title: event.target.value}});
                console.log(dish);
                break;
            case 'complexity' :
                setDish({...dish, dish:{...dish.dish, complexity: event.target.value}});
                console.log(dish);
                break;
        }

        
    };

    return (
    <>
        <Typography>Добавление рецепта:</Typography> 
        <form onSubmit={handleAdd}>
            <TextField 
                type="text"
                label="Название блюда"
                variant="outlined"
                id="title"
                onChange={handleChange}
            />
            <TextField 
                type="text"
                label="Сложность (1, 2 или 3)"
                variant="outlined"
                id="complexity"
                onChange={handleChange}
            />
        
            <Button type="submit" variant="contained">Добавить рецепт</Button>
        </form>
        <br/><br/><hr/><br/>
        <Typography>Удаление рецепта:</Typography>
        <form onSubmit={handleDelete}>
            <TextField
                type="text" 
                label="id удаляемого блюда" 
                variant="outlined" 
                value={idDelete}
                id="id-delete"
                onChange={handleChange}/>
            <Button type="submit" variant="contained">Удалить</Button>
        </form>
    </>
    )
}