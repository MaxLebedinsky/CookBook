import { Button, TextField, FormControlLabel, RadioGroup, Radio, 
    FormControl, FormLabel, Modal, Select, MenuItem, InputLabel, Typography, Box } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MAX_FILE_SIZE, TEST_DISH_FOR_POST } from '../dish/const';
import { useStyles } from './styled';

export const AddDishForm = () => {
    const classes = useStyles();
    const [idDelete, setIdDelete] = useState('');
    const [dish, setDish] = useState({ ...TEST_DISH_FOR_POST });
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [measuresArr, setMeasuresArr] = useState([]);
    const [ingredient, setIngredient] = useState({ ingredients_name:'', quantity:'', measure_id:'' });
    const categories = useSelector(state => state.categories.categoryList);
    const [mainImage, setMainImage] = useState({ file: '', imagePreviewUrl: '' });
    const [stepImage, setStepImage] = useState({ file: '', imagePreviewUrl: '' });
    const [stepImagesArr, setStepImagesArr] = useState([]);
    const [step, setStep] = useState({ step_number: dish.dish_steps.length + 1, text: ''});

    useEffect(()=> {
        getMeasures();
    }, []);

    const handleOpenModal = (text) => {
        setModalText(text);
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false)
    };

    const getMeasures = async () => {
        let response = await fetch('/api/measures');
        let result = await response.json();
        setMeasuresArr([...result.data]);
    };

    const postDish = async (dish) => {
        let response = await fetch('/api/full-dishes/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(dish)
          });

        if (!response.ok) {
            handleOpenModal('Ошибка загрузки данных рецепта');
        } else {
        // begin POST main image
            let result = await response.json();
            let formData = new FormData();
            formData.append("image", mainImage.file);
            let responseImage = await fetch(`/api/dishes/${result.data.id}/store_image`, {
                method: 'POST',
                body: formData
            });
        // end POST main image
            if (responseImage.ok) {
            // begin POST step images
                let formDataImages = new FormData();
                stepImagesArr.forEach(item => {
                    formDataImages.append("image[]", item.file, item.file.name);
                });
                result.data.dish_steps.forEach(item => {
                    formDataImages.append("id[]", item.id);
                });
                let responseStepImages = await fetch(`/api/dish_steps/store_image`, {
                    method: 'POST',
                    body: formDataImages
                })
            // end POST step images
                if (responseStepImages.ok) {
                handleOpenModal('Рецепт успешно добавлен');
                } else {
                handleOpenModal('Ошибка загрузки изображений шагов');
                }
            } else {
                handleOpenModal('Ошибка загрузки главного изображения');
                return;
            }
        }
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

    const formDataIsValid = (dish) => {
        if (!dish.dish.title || dish.dish.title.length < 3) {
            handleOpenModal('Название блюда не введено или слишком короткое (минимум 3 символа)');
            return false;
        }
        if (!mainImage.file) {
            handleOpenModal('Главное изображение не выбрано');
            return false;
        }
        if (!dish.dish.description || dish.dish.description.length < 20) {
            handleOpenModal('Описание блюда не введено или слишком короткое (минимум 20 символов)');
            return false;
        }
        if (!dish.dish.category_id) {
            handleOpenModal('Категория блюда не выбрана');
            return false;
        }
        if (!dish.dish.complexity) {
            handleOpenModal('Уровень сложности блюда не выбран');
            return false;
        }
        if (dish.ingredients.length === 0) {
            handleOpenModal('Добавьте хотя бы один ингредиент');
            return false;
        }
        if (dish.dish_steps.length === 0) {
            handleOpenModal('Добавьте в рецепт хотя бы один шаг');
            return false;
        }
        return true;
    }

    const handleAdd = (event) => {
        event.preventDefault();
        if(formDataIsValid(dish)) {
            postDish(dish);
        }
    };

    const handleAddIngredient = () => {
        if (!ingredient.ingredients_name) {
            handleOpenModal('Название ингредиента не введено');
            return;
        }
        if (!ingredient.quantity) {
            handleOpenModal('Количество не введено');
            return;
        }
        if (!ingredient.measure_id) {
            handleOpenModal('Единица измерения не выбрана');
            return;
        }
        dish.ingredients.push(ingredient);
        document.getElementById("ingredients-list").insertAdjacentHTML('beforeend', 
        `<div class=${ classes.listItem }>
            <div>${ ingredient.ingredients_name }</div> 
            <div class=${ classes.dots }></div>
            <div class=${ classes.amount }>
                ${ ingredient.quantity } 
                ${ measuresArr.find(item => item.id == ingredient.measure_id).name }
            </div>
        </div>`);
        setIngredient({ ingredients_name:'', quantity:'', measure_id:'' })
    };

    const handleAddStep = () => {
        if (!step.text) {
            handleOpenModal('Описание шага рецепта не введено');
            return;
        }
        if (!stepImage.file) {
            handleOpenModal('Изображение для шага рецепта не выбрано');
            return;
        }
        setStep({ ...step, step_number: step.step_number + 1, text: '' });
        document.getElementById("steps-list").insertAdjacentHTML('beforeend', 
        `<div class=${ classes.stepsListItem}>
            <span>${ step.step_number }. </span>
            <img src=${ stepImage.imagePreviewUrl } class=${ classes.stepImagePreview } alt="Step image"/>
            <span>${ step.text }</span>
        </div>`);
        dish.dish_steps.push(step);       
        setStepImagesArr(stepImagesArr.concat({ id: step.step_number, file: stepImage.file }));
        // setStep({ ...step, text: ''});
        setStepImage({ ...stepImage, file: '', imagePreviewUrl: '' });
    }

    const handleImageChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        if (file && file.size > MAX_FILE_SIZE ) {
            handleOpenModal('Максимальный размер файла – 5 Мб');
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMainImage({...mainImage, file: file, imagePreviewUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleStepImageChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        if (file && file.size > MAX_FILE_SIZE ) {
            handleOpenModal('Максимальный размер файла – 5 Мб');
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setStepImage({...stepImage, file: file, imagePreviewUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'id-delete' :
                setIdDelete(event.target.value);
                break;
            case 'title' :
                setDish({ ...dish, dish:{ ...dish.dish, title: event.target.value }});
                // setDish({...dish, title: event.target.value});
                break;
            case 'description' :
                setDish({ ...dish, dish:{ ...dish.dish, description: event.target.value }});
                break;
            case 'complexity' :
                setDish({ ...dish, dish:{ ...dish.dish, complexity: event.target.value }});
                break;
            case 'ingredient-name' :
                setIngredient({ ...ingredient, ingredients_name: event.target.value });
                break;
            case 'measure-select' :
                    setIngredient({ ...ingredient, measure_id: +event.target.value });
                break;
            case 'ingredient-quantity' :
                if (+event.target.value && event.target.value.length <= 8) {
                    setIngredient({ ...ingredient, quantity: +event.target.value });
                }
                break;
            case 'category-select' :
                // setCategory({...category, id: event.target.value, name: categories.find(item => item.id == event.target.value).name });
                setDish({ ...dish, dish:{ ...dish.dish, category_id: event.target.value }});
                break;
            case 'step-desc' :
                setStep({ ...step, text: event.target.value });
                break;
        }  
    };

    return (
    <>
        <Modal
            open={ modal }
            onClose={ handleCloseModal }>
                <div className={ classes.modal }>{ modalText }</div>
        </Modal>
        <Button href="/" className= { classes.back_button } variant="contained">
            &lt; Вернуться на главную
        </Button>
        <br/><hr/>
            <FormControl className={ classes.root }>
                <Typography component="h1" className={ classes.h1 }>Добавление рецепта</Typography>
                <TextField 
                    className={ classes.formControl }
                    type="text"
                    label="Название блюда"
                    variant="outlined"
                    name="title"
                    value={ dish.dish.title }
                    onChange={ handleChange }
                    multiline
                    required
                />
                <Typography component="h2" className={ classes.h2 }>Главное изображение:</Typography>
                <FormControl className={ classes.uploadDialog }>
                    <div className={ classes.imagePreviewContainer }>
                        { mainImage.imagePreviewUrl ? 
                        <img src={ mainImage.imagePreviewUrl } className={ classes.imagePreview } alt="Main image"/> 
                        : <PhotoCamera className={ classes.iconCamera }/>}
                    </div>
                    <Box className={ classes.fileName }>
                        { mainImage.imagePreviewUrl ? mainImage.file.name : "Изображение не выбрано" }
                    </Box>
                    <input
                        accept="image/*"
                        className={ classes.hidden }
                        id="upload-input"
                        type="file"
                        onChange={ handleImageChange }
                    />
                    <label htmlFor="upload-input">
                        <Button variant="contained" component="span" className={ classes.form_button }>
                            Выберите файл
                        </Button>
                    </label>
                </FormControl>
                <TextField 
                    className={ classes.formControl }
                    type="text"
                    label="Описание"
                    variant="outlined"
                    name="description"
                    value={ dish.dish.description }
                    onChange={ handleChange }
                    multiline
                    required
                />
                <FormControl variant="outlined" className={ classes.formControl } required>
                    <InputLabel>Категория</InputLabel>
                    <Select
                        className={ classes.select }
                        name="category-select"
                        onChange={ handleChange }
                        value={ dish.dish.category_id }
                        label="Категория"
                        required
                    >
                        {categories.map((item) => (
                                <MenuItem value={ item.id } key={ item.id }>{ item.name }</MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <FormControl component="fieldset" className={ classes.formControl } required>
                    <FormLabel component="legend">Уровень сложности: </FormLabel>
                    <RadioGroup row
                        aria-label="complexity"
                        value={ dish.dish.complexity }
                        onChange={ handleChange }>
                        <FormControlLabel value="1" control={ <Radio name="complexity" color="primary"/> } label="1" />
                        <FormControlLabel value="2" control={ <Radio name="complexity" color="primary"/> } label="2" />
                        <FormControlLabel value="3" control={ <Radio name="complexity" color="primary"/> } label="3" />
                    </RadioGroup>
                </FormControl>

                <Typography component="h2" className={ classes.h2 }>Ингредиенты:</Typography>
                <div id="ingredients-list" className={ classes.ingredientsList }></div>
                <TextField 
                    className={ classes.formControl }
                    type="text"
                    label="Название ингредиента"
                    variant="outlined"
                    name="ingredient-name"
                    value={ ingredient.ingredients_name }
                    onChange={ handleChange }
                    required
                />
                <TextField 
                    className={ classes.formControl }
                    type="text"
                    label="Кол-во"
                    variant="outlined"
                    name="ingredient-quantity"
                    value={ ingredient.quantity }
                    onChange={ handleChange }
                    required
                />
                <FormControl variant="outlined" className={ classes.formControl } required>
                    <InputLabel className={ classes.input_label }>Единицы измерения</InputLabel>
                    <Select
                        className={ classes.select }
                        name="measure-select"
                        onChange={ handleChange }
                        value={ ingredient.measure_id }
                        variant="outlined"
                        label="Единицы измерения"
                    >
                        {measuresArr.map((item) => (
                            <MenuItem value={ item.id } key={ item.id }>{ item.name }</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={ handleAddIngredient } className= { classes.form_button } variant="outlined">
                    Добавить ингредиент
                </Button>
                <Typography component="h2" className={ classes.h2 }>Пошаговый рецепт:</Typography>
                <div id="steps-list" className={ classes.ingredientsList }></div>
                <TextField 
                    className={ classes.formControl }
                    type="text"
                    label="Описание шага рецепта"
                    variant="outlined"
                    name="step-desc"
                    value={ step.text }
                    onChange={ handleChange }
                    multiline
                    required
                />
                <FormControl className={ classes.uploadDialog }>
                    <div className={ classes.imagePreviewContainer }>
                        { stepImage.imagePreviewUrl ? 
                        <img src={ stepImage.imagePreviewUrl } className={ classes.imagePreview } alt="Step image"/> 
                        : <PhotoCamera className={ classes.iconCamera }/>}
                    </div>
                    <Box className={ classes.fileName }>
                        { stepImage.imagePreviewUrl ? stepImage.file.name : "Изображение не выбрано" }
                    </Box>
                    <input
                        accept="image/*"
                        className={ classes.hidden }
                        id="upload-step-input"
                        type="file"
                        onChange={ handleStepImageChange }
                    />
                    <label htmlFor="upload-step-input">
                        <Button variant="contained" component="span" className={ classes.form_button }>
                            Выберите файл
                        </Button>
                    </label>
                </FormControl>
                <Button onClick={ handleAddStep } className= { classes.form_button } variant="outlined">
                    Добавить шаг
                </Button>


                <Button type="submit" onClick={ handleAdd } className= { classes.form_button } variant="contained" size="large">
                    Сохранить рецепт
                </Button>
            </FormControl>
        <br/><hr/><br/>
        <FormControl className={ classes.root }>
            <Typography component="h2" className={ classes.h2 }>Удаление рецепта:
            <Box className={ classes.fileName }>
                        (Будет доступно для пользователя с role = admin)
            </Box>
            </Typography>
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