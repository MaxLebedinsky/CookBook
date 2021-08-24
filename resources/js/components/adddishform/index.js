import { Button, TextField, FormControlLabel, RadioGroup, Radio, Dialog, CircularProgress,
    FormControl, Modal, Select, MenuItem, InputLabel, Typography, Box, IconButton} from '@material-ui/core';
import { ArrowBackIos, Check, FolderOpen, HighlightOff, PhotoCamera} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ADMIN_USER_ID, MAX_FILE_SIZE, TEST_DISH_FOR_POST } from '../dish/const';
import { DeleteDish } from './deleteDish';
import { myTheme, useStyles } from './styled';
import { ThemeProvider } from '@material-ui/core/styles';

export const AddDishForm = () => {
    const classes = useStyles();
    const [dish, setDish] = useState({ ...TEST_DISH_FOR_POST });
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [dialog, setDialog] = useState(false);
    const [ uploadFinished, setUploadFinished ] = useState(true);
    const [measuresArr, setMeasuresArr] = useState([]);
    const [ingredient, setIngredient] = useState({ ingredients_name:'', quantity:'', measure_id:'' });
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const categories = useSelector(state => state.categories.categoryList);
    const userData = useSelector(state => state.access.userData);
    const [mainImage, setMainImage] = useState({ file: '', imagePreviewUrl: '' });
    const [step, setStep] = useState({ file: '', imagePreviewUrl: '', text: ''});
    const [stepsArr, setStepsArr] = useState([]);

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

    const handleOpenDialog = () => {
        setDialog(true);
    }

    const getMeasures = async () => {
        let response = await fetch('/api/measures');
        let result = await response.json();
        setMeasuresArr([...result.data]);
    };

    const postDish = async (dish) => {
        setUploadFinished(false);
        console.log('id before post: ', userData);
        dish.dish.user_id = userData.id;
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
                stepsArr.forEach(item => {
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
                setUploadFinished(true);
                if (responseStepImages.ok) {
                handleOpenDialog();
                } else {
                handleOpenModal('Ошибка загрузки изображений шагов');
                }
            } else {
                handleOpenModal('Ошибка загрузки главного изображения');
                return;
            }
        }
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
        if (ingredientsArr.length === 0) {
            handleOpenModal('Добавьте хотя бы один ингредиент');
            return false;
        } else { dish.ingredients = [...ingredientsArr]; }
        if (stepsArr.length === 0) {
            handleOpenModal('Добавьте в рецепт хотя бы один шаг');
            return false;
        } else { stepsArr.forEach((item, index) => dish.dish_steps[index] = { step_number: index + 1, text: item.text}); }
        return true;
    }

    const handleAddRecipe = (event) => {
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
        setIngredientsArr(ingredientsArr.concat(ingredient));
        setIngredient({ ingredients_name:'', quantity:'', measure_id:'' })
    };

    const handleDelIngredientClick = (event) => {
        setIngredientsArr(ingredientsArr.filter((item, index) => index !== +event.currentTarget.id))
    }

    const handleDelStepClick = (event) => {
        setStepsArr(stepsArr.filter((item, index) => index !== +event.currentTarget.id));
    }

    const handleAddStep = () => {
        if (!step.text) {
            handleOpenModal('Описание шага рецепта не введено');
            return;
        }
        if (!step.file) {
            handleOpenModal('Изображение для шага рецепта не выбрано');
            return;
        }
        setStepsArr(stepsArr.concat(step));
        setStep({ ...step, file: '', imagePreviewUrl: '', text: '' });
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
                setStep({...step, file: file, imagePreviewUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
        event.target.value = "";
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            // case 'id-delete' :
            //     setIdDelete(event.target.value);
            //     break;
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
    <ThemeProvider theme={ myTheme }>
        <Modal
            open={ modal }
            onClose={ handleCloseModal }>
                <Typography className={ classes.modal } color="textPrimary"> { modalText } </Typography>
        </Modal>
        <Dialog open={ dialog }>
            <Typography className={ classes.dialogText } color="textPrimary">Рецепт успешно добавлен</Typography>
            <Button href="/" className= { classes.form_button } variant="contained" color="secondary">
                Вернуться на главную
            </Button>
            <Button href="/add-dish" className= { classes.form_button } variant="contained" color="secondary">
                Добавить ещё один рецепт
            </Button>
        </Dialog>
        <Modal open={ !uploadFinished }>
            <div className={ classes.modal }>
                <CircularProgress className= { classes.loader } disableShrink color="secondary" thickness={5}/>
                Сохранение рецепта...
            </div>
        </Modal>
        <Box className={ classes.formHeader }>
            <Button href="/" className= { classes.form_button } variant="contained" startIcon={ <ArrowBackIos/> } >
                На главную
            </Button>
        </Box>
            <FormControl className={ classes.root }>
                <Typography component="h1" className={ classes.h1 } color="textPrimary">Добавление рецепта</Typography>
                <TextField 
                    className={ classes.formControl }
                    color="secondary"
                    type="text"
                    label="Название блюда"
                    variant="outlined"
                    name="title"
                    value={ dish.dish.title }
                    onChange={ handleChange }
                    multiline
                    required
                />
                <Typography component="h2" className={ classes.h2 } color="textPrimary">Главное изображение:</Typography>
                <FormControl className={ classes.uploadDialog }>
                    <div className={ classes.imagePreviewContainer }>
                        { mainImage.imagePreviewUrl ? 
                        <img src={ mainImage.imagePreviewUrl } className={ classes.imagePreview } alt="Main image"/> 
                        : <PhotoCamera className={ classes.iconCamera }/>}
                    </div>
                    <Typography className={ classes.fileName } color="textSecondary">
                        { mainImage.imagePreviewUrl ? mainImage.file.name : "Изображение не выбрано" }
                    </Typography>
                    <input
                        accept="image/*"
                        className={ classes.hidden }
                        id="upload-input"
                        type="file"
                        onChange={ handleImageChange }
                    />
                    <label htmlFor="upload-input">
                        <Button variant="contained" component="span" className={ classes.form_button } startIcon={ <FolderOpen/> } color="primary">
                            Выберите файл
                        </Button>
                    </label>
                </FormControl>
                <TextField 
                    className={ classes.formControl }
                    color="secondary"
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
                        color="secondary"
                        name="category-select"
                        onChange={ handleChange }
                        value={ dish.dish.category_id }
                        label="Категория"
                        required
                    >
                        {categories.map((item) => (
                                <MenuItem color="secondary" value={ item.id } key={ item.id }>{ item.name }</MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <FormControl component="fieldset" className={ classes.formControl } required>
                    <Typography component="legend" color="textPrimary">Уровень сложности: </Typography>
                    <RadioGroup row
                        aria-label="complexity"
                        value={ dish.dish.complexity }
                        onChange={ handleChange }>
                        <FormControlLabel value="1" control={ <Radio name="complexity" color="secondary" className={ classes.radio }/> } label="1" />
                        <FormControlLabel value="2" control={ <Radio name="complexity" color="secondary" className={ classes.radio }/> } label="2" />
                        <FormControlLabel value="3" control={ <Radio name="complexity" color="secondary" className={ classes.radio }/> } label="3" />
                    </RadioGroup>
                </FormControl>

                <Typography component="h2" className={ classes.h2 } color="textPrimary">Ингредиенты:</Typography>
                <div id="ingredients-list" className={ classes.ingredientsList }>
                    {ingredientsArr.length === 0 ? <></> :
                        ingredientsArr.map((item, index) => (
                            <Typography component="div" className={ classes.listItem } key={ index } color="textPrimary">
                                <p>{ item.ingredients_name }</p> 
                                <p className={ classes.dots }></p>
                                <p className={ classes.amount }>
                                    { item.quantity }
                                    { ' ' + measuresArr.find(measure => measure.id == item.measure_id).name }
                                </p>
                                <IconButton 
                                    onClick={ handleDelIngredientClick } 
                                    id={ index } 
                                    className={ classes.deleteButton }                                     
                                >
                                    <HighlightOff/>
                                </IconButton>
                            </Typography>
                        ))
                    }
                </div>
                <TextField 
                    className={ classes.formControl }
                    color="secondary"
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
                    color="secondary"
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
                <Button onClick={ handleAddIngredient } className= { classes.form_button } variant="contained" color="primary">
                    Добавить ингредиент
                </Button>
                <Typography component="h2" className={ classes.h2 } color="textPrimary">Пошаговый рецепт:</Typography>
                <div id="steps-list" className={ classes.ingredientsList }>
                    { stepsArr.length === 0 ? <></> :
                        stepsArr.map((item, index) => (
                            <Typography className={ classes.stepsListItem } key={ index } color="textPrimary">
                                <span>{ index + 1 }. </span>
                                <img src={ item.imagePreviewUrl } className={ classes.stepImagePreview } alt="Step image"/>
                                <span className={ classes.fullWidth }>{ item.text }</span>
                                <IconButton 
                                onClick={ handleDelStepClick } 
                                id={ index } 
                                className={ classes.deleteButton }                                     
                                >
                                    <HighlightOff/>
                                </IconButton>
                            </Typography>
                        ))
                    }
                </div>
                <TextField 
                    className={ classes.formControl }
                    color="secondary"
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
                        { step.imagePreviewUrl ? 
                        <img src={ step.imagePreviewUrl } className={ classes.imagePreview } alt="Step image"/> 
                        : <PhotoCamera className={ classes.iconCamera }/>}
                    </div>
                    <Box className={ classes.fileName }>
                        { step.imagePreviewUrl ? step.file.name : "Изображение не выбрано" }
                    </Box>
                    <input
                        accept="image/*"
                        className={ classes.hidden }
                        id="upload-step-input"
                        type="file"
                        onChange={ handleStepImageChange }
                    />
                    <label htmlFor="upload-step-input">
                        <Button variant="contained" component="span" className={ classes.form_button } startIcon={ <FolderOpen/> } color="primary">
                            Выберите файл
                        </Button>
                    </label>
                </FormControl>
                <Button onClick={ handleAddStep } className= { classes.form_button } variant="contained" color="primary">
                    Добавить шаг
                </Button>
                <Button type="submit" onClick={ handleAddRecipe } className= { classes.save_button } 
                variant="contained" size="large" startIcon={ <Check/> } color="secondary">
                    Сохранить рецепт
                </Button>
            </FormControl>
        { (userData.id === ADMIN_USER_ID) && <DeleteDish/> }
    </ThemeProvider>
    )
}