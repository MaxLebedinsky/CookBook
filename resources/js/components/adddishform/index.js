import { Button, TextField, FormControlLabel, RadioGroup, Radio, 
    FormControl, FormLabel, Modal, Select, MenuItem, InputLabel, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TEST_DISH_FOR_POST } from '../dish/const';
import { useStyles } from './styled';

export const AddDishForm = () => {
    const classes = useStyles();

    const [idDelete, setIdDelete] = useState('');
    const [dish, setDish] = useState({ ...TEST_DISH_FOR_POST });
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [measuresArr, setMeasuresArr] = useState([]);

    const [ingredient, setIngredient] = useState({ ingredients_name:'', quantity:null, measure_id:'' });

    useEffect(()=> {
        getMeasures();
    }, []);

    const handleOpenModal = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false)
    };

    const getMeasures = async () => {
        let response = await fetch('/api/measures');
        let result = await response.json();
        setMeasuresArr([...result.data]);
        // console.log(measuresArr);
    };

    const postDish = async (dish) => {
        console.log(JSON.stringify(dish));
        let response = await fetch('/api/full-dishes/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(dish)
          });
          
        let result = await response.json();
        // console.log(result);

        if (result.success === false) {
            setModalText('Что-то пошло не так :(');
            handleOpenModal();
        } else {
            setModalText('Рецепт успешно добавлен');
            handleOpenModal();
        }
    };

    const deleteDish = async (id) => {
        let response = await fetch(`/api/full-dishes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
        });
        
        let result = await response.json();
        // console.log(result);

        if (result.success === false) {
            setModalText('Блюдо с таким id не найдено');
            handleOpenModal();
        } else {
            setModalText('Рецепт успешно удалён');
            handleOpenModal();
        }
    };
    
    const handleDelete = (event) => {
        event.preventDefault();
        if (idDelete) {
            // console.log('deleting dish with id: '+idDelete);
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
    };

    const handleAddIngredient = () => {
        dish.ingredients.push(ingredient);
        document.getElementById("ingredients-preview").insertAdjacentHTML('beforeend', 
        `<div class=${ classes.ingredients_item }>
            ${ingredient.ingredients_name} 
            ${ingredient.quantity} 
            ${measuresArr.find(item => item.id == ingredient.measure_id).name}
        </div>`);
        // console.log(dish.ingredients);
    };

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'id-delete' :
                setIdDelete(event.target.value);
                break;
            case 'title' :
                setDish({...dish, dish:{...dish.dish, title: event.target.value}});
                // setDish({...dish, title: event.target.value});
                // console.log(dish.title);
                break;
            case 'complexity' :
                setDish({...dish, dish:{...dish.dish, complexity: event.target.value}});
                // setDish({...dish, complexity: event.target.value});
                // console.log('selected complexity: '+event.target.value);
                break;
            case 'ingredient-name' :
                setIngredient({ ...ingredient, ingredients_name: event.target.value });
                // console.log(ingredient);
                break;
            case 'measure-select' :
                setIngredient({ ...ingredient, measure_id: +event.target.value });
                // console.log(ingredient);
                break;
            case 'ingredient-quantity' :
                setIngredient({ ...ingredient, quantity: +event.target.value });
                // console.log(ingredient);
                break;
        }  
    };

    return (
    <>
        <Modal
            open={modal}
            onClose={handleCloseModal}>
                <div className={ classes.modal }>{ modalText }</div>
        </Modal>
        <Button href="/" className= { classes.form_button } variant="contained">
            &lt; Вернуться на главную
        </Button>
        <br/><hr/><br/>
            <FormControl className={ classes.root } component="fieldset">
                <FormLabel component="h2" className={ classes.h2 }>Добавление рецепта</FormLabel>
                <TextField 
                    type="text"
                    label="Название блюда"
                    variant="outlined"
                    name="title"
                    value={dish.dish.title}
                    onChange={handleChange}
                />
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Сложность: </FormLabel>
                    <RadioGroup row
                        aria-label="complexity"
                        value={dish.dish.complexity}
                        onChange={handleChange}>
                        <FormControlLabel value="1" control={<Radio name="complexity"/>} label="1" />
                        <FormControlLabel value="2" control={<Radio name="complexity"/>} label="2" />
                        <FormControlLabel value="3" control={<Radio name="complexity"/>} label="3" />
                    </RadioGroup>
                </FormControl>

                <Typography component="h3">Ингредиенты:</Typography>
                <div id="ingredients-preview"></div>
                <TextField 
                    type="text"
                    label="Название ингредиента"
                    variant="outlined"
                    name="ingredient-name"
                    value={ingredient.ingredients_name}
                    onChange={handleChange}
                />
                <TextField 
                    type="text"
                    label="Кол-во"
                    variant="outlined"
                    name="ingredient-quantity"
                    onChange={handleChange}
                />
                <FormControl className={ classes.select_measure }>
                    <InputLabel>Ед. изм.</InputLabel>
                    <Select
                        name="measure-select"
                        onChange={handleChange}
                        value={ ingredient.measure_id }
                    >
                        {measuresArr.map((item) => (
                            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={handleAddIngredient} className= { classes.form_button } variant="outlined">
                    Добавить ингредиент
                </Button>
                <Button type="submit" onClick={handleAdd} className= { classes.form_button } variant="contained" >
                    Добавить рецепт
                </Button>
            </FormControl>
        <br/><hr/><br/>
        <FormControl className={ classes.root } component="fieldset">
        <FormLabel component="h2" className={ classes.h2 }>Удаление рецепта</FormLabel>
            <TextField
                type="text" 
                label="id удаляемого блюда" 
                variant="outlined" 
                value={idDelete}
                name="id-delete"
                onChange={handleChange}/>
            <Button type="submit" onClick={handleDelete} className= { classes.form_button } variant="contained">Удалить</Button>
        </FormControl>
    </>
    )
}