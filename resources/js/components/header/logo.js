import React from "react"
import { useStyles } from "./styled";
import { Link } from 'react-router-dom';
import {
    searchTitle,
    filterOrder,
    filterCategory,
    includeIngredients,
    excludeIngredients,
    filterCategoryValue,
    filterOrderValue,
    includeIngredientsValue,
    excludeIngredientsValue,
} from '../../redux/filters/actions';
import { useDispatch } from "react-redux";

const Logo = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleResetFilters = () => {
        dispatch(searchTitle(''));
        dispatch(filterOrder('created_at'));
        dispatch(filterCategory(''));
        dispatch(includeIngredients([]));
        dispatch(excludeIngredients([]));
        dispatch(filterCategoryValue(''));
        dispatch(filterOrderValue('created_at'));
        dispatch(includeIngredientsValue(''));
        dispatch(excludeIngredientsValue(''));
    };

    return (
        <Link
            to="/"
            className={ classes.logo }
            onClick={ handleResetFilters }
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 119.41 113.04" fill="#442617">
            <polygon points="100.65 83.63 117.68 83.63 111.91 74.92 111.74 74.66 111.91 74.41 117.68 65.6 106.16 65.6 106.16 64.66 118.54 
            64.66 119.41 64.66 118.93 65.38 112.86 74.66 118.93 83.84 119.41 84.57 118.54 84.57 100.65 84.57 100.65 83.63"/>
                <polygon points="106.62 79.29 100.97 84.44 100.33 83.77 105.98 78.62 106.62 79.29" />
                <polygon points="18.76 54.51 1.73 54.51 7.5 63.23 7.67 63.48 7.5 63.74 1.73 72.55 13.03 72.55 13.03 73.48 0.87 73.48 0 73.48 
            0.48 72.76 6.55 63.49 0.48 54.3 0 53.58 0.87 53.58 18.76 53.58 18.76 54.51"/>
                <polygon points="12.56 58.86 18.45 53.7 19.08 54.39 13.19 59.54 12.56 58.86" />
                <path d="M377,113.87a44,44,0,0,1-85.76,0h1a43,43,0,0,0,83.84,0Z" transform="translate(-274.48 -35.04)" />
                <path d="M325.67,61.91a43.06,43.06,0,0,0-33.52,32.46h-1A44,44,0,0,1,325.47,61,1.38,1.38,0,0,0,325.67,61.91Z"
                    transform="translate(-274.48 -35.04)" />
                <path d="M362.66,70.72c.86.74,1.7,1.51,2.5,2.31A43.94,43.94,0,0,1,377,94.37h-1A42.9,42.9,0,0,0,364.5,73.69c-.72-.72-1.47-1.41-2.23-2.08a1.07,
            1.07,0,0,0,.28-.48Z" transform="translate(-274.48 -35.04)" />
                <path d="M308.14,126.85a35.07,35.07,0,0,1-3.53-4.51l.94-.26a36.44,36.44,0,0,0,3.18,4Z" transform="translate(-274.48 -35.04)" />
                <path d="M362.78,123.43a35,35,0,0,1-3.78,4.46l-.27.27-.29-1a34.94,34.94,0,0,0,3.27-3.81Z" transform="translate(-274.48 -35.04)" />
                <path d="M359,80.41l.21.2a36.37,36.37,0,0,1,3.57,4.17l-1.08.1a36,36,0,0,0-3.15-3.61l-.13-.13Z" transform="translate(-274.48 -35.04)" />
                <path d="M305,85.33a35.11,35.11,0,0,1,4-4.72h0l.48.84a34,34,0,0,0-3.51,4.16Z" transform="translate(-274.48 -35.04)" />
                <path d="M322.47,73.23a5.23,5.23,0,0,1,0-2.3,4.08,4.08,0,0,1,.66-1.36,3.9,3.9,0,0,1,1.08-1,6.06,6.06,0,0,1,2-.76,5,5,0,0,1,3.65.5,5,5,0,0,1,
            1.33,6.56,4.85,4.85,0,0,1-3.15,1.86,5,5,0,0,1-3.66-.48,4.32,4.32,0,0,1-1.92-3Zm2-.46a3,3,0,0,0,1.2,2.07,2.64,2.64,0,0,0,2.07.37,2.6,2.6,0,0,0,
            1.76-1.13,3.13,3.13,0,0,0,.3-2.41,3.06,3.06,0,0,0-1.18-2.06,2.66,2.66,0,0,0-2.08-.34,2.69,2.69,0,0,0-1.79,1.13A3.09,3.09,0,0,0,324.47,72.77Z"
                    transform="translate(-274.48 -35.04)" />
                <path d="M318.21,76.64,320.1,76a3.88,3.88,0,0,1,0,2.61,4.58,4.58,0,0,1-1.77,2,4.49,4.49,0,0,1-3.34.8,4.27,4.27,0,0,1-2.87-2,4.52,4.52,0,0,
            1-.85-3.54,4.61,4.61,0,0,1,2.08-2.86,4.38,4.38,0,0,1,3-.84A3.34,3.34,0,0,1,318,73l-1.39,1.44a1.89,1.89,0,0,0-1.2-.49,2.24,2.24,0,0,0-1.34.43A2.34,
            2.34,0,0,0,313,75.94a3.17,3.17,0,0,0,.7,2.26,3.4,3.4,0,0,0,1.88,1.59,2.25,2.25,0,0,0,1.84-.38,2.15,2.15,0,0,0,.88-1.13A2.56,2.56,0,0,0,318.21,76.64Z"
                    transform="translate(-274.48 -35.04)" />
                <polygon points="13.03 58.86 106.16 58.86 106.62 58.86 106.62 59.32 106.62 78.83 106.62 79.29 106.16 79.29 80.82 79.29 80.82 78.36 105.69 
            78.36 105.69 59.79 13.49 59.79 13.49 78.36 38.37 78.36 38.37 79.29 13.03 79.29 12.56 79.29 12.56 78.83 12.56 59.32 12.56 58.86 13.03 58.86"/>
                <path d="M300.66,99.62l1.22,2.74,3,.31,1,.11-.77.7-2.23,2,.62,2.93.22,1-.91-.52-2.59-1.5-2.6,1.5-.9.52.21-1,.63-2.93-2.23-2-.78-.7,1-.11,
            3-.31,1.21-2.74.43-1,.42,1Zm.48,3.36-.9-2-.91,2-.11.25-.26,0-2.21.23L298.4,105l.2.18-.05.26-.47,2.17,1.92-1.11.24-.13.23.13,1.92,
            1.11-.46-2.17-.06-.26.2-.18,1.66-1.49-2.21-.23-.27,0Z" transform="translate(-274.48 -35.04)" />
                <path d="M369.93,99.62l1.22,2.74,3,.31,1,.11-.77.7-2.23,2,.62,2.93.22,1-.91-.52-2.59-1.5-2.6,1.5-.9.52.21-1,.63-2.93-2.23-2-.78-.7,
            1-.11,3-.31,1.21-2.74.43-1,.42,1Zm.48,3.36-.9-2-.91,2-.11.25-.26,0-2.21.23,1.65,1.49.2.18-.05.26-.47,2.17,1.92-1.11.24-.13.23.13,1.92,
            1.11-.46-2.17-.06-.26.2-.18,1.66-1.49-2.21-.23-.27,0Z" transform="translate(-274.48 -35.04)" />
                <path d="M356.23,100.65v18.17a5.74,5.74,0,0,1-5.73,5.72H317.63a5.74,5.74,0,0,1-5.72-5.72V100.65h.93v18.17a4.81,4.81,0,0,0,4.79,4.79H350.5a4.81,
            4.81,0,0,0,4.8-4.79V100.65Z" transform="translate(-274.48 -35.04)" />
                <polygon points="81.75 59.45 81.75 60.84 80.82 60.84 80.82 59.91 38.37 59.91 38.37 60.84 37.43 60.84 37.43 59.45 37.43 58.98 37.9 58.98 81.29 
            58.98 81.75 58.98 81.75 59.45"/>
                <path d="M310.88,95.89h6.25a1.52,1.52,0,0,1,1.1.46h0a1.56,1.56,0,0,1,.46,1.1v1.64a1.6,1.6,0,0,1-.46,1.11h0a1.55,1.55,0,0,1-1.1.45h-6.25a1.55,
            1.55,0,0,1-1.1-.45,1.6,1.6,0,0,1-.46-1.11V97.45a1.56,1.56,0,0,1,.46-1.1h0a1.52,1.52,0,0,1,1.1-.46Zm6.25.93h-6.25a.6.6,0,0,0-.44.19h0a.6.6,
            0,0,0-.19.44v1.64a.62.62,0,0,0,.19.45.63.63,0,0,0,.44.18h6.25a.63.63,0,0,0,.44-.18h0a.62.62,0,0,0,.19-.45V97.45a.6.6,0,0,0-.19-.44h0A.63.63,
            0,0,0,317.13,96.82Z" transform="translate(-274.48 -35.04)" />
                <path d="M351,95.89h6.25a1.52,1.52,0,0,1,1.1.46h0a1.56,1.56,0,0,1,.46,1.1v1.64a1.6,1.6,0,0,1-.46,1.11h0a1.55,1.55,0,0,1-1.1.45H351a1.55,1.55,
            0,0,1-1.1-.45,1.6,1.6,0,0,1-.46-1.11V97.45a1.56,1.56,0,0,1,.46-1.1h0a1.52,1.52,0,0,1,1.1-.46Zm6.25.93H351a.6.6,0,0,0-.44.19h0a.6.6,
            0,0,0-.19.44v1.64a.62.62,0,0,0,.19.45.63.63,0,0,0,.44.18h6.25a.63.63,0,0,0,.44-.18h0a.62.62,0,0,0,.19-.45V97.45a.6.6,0,0,0-.19-.44h0A.63.63,
            0,0,0,357.26,96.82Z" transform="translate(-274.48 -35.04)" />
                <path d="M331.49,78.41h5.16a1.26,1.26,0,0,1,.78.26,1,1,0,0,1,.39.75,20.25,20.25,0,0,1-.38,2.73c-.13.71-.3,1.46-.5,2.17a58.62,58.62,0,0,1,12.73,
            1.73c4,1.08,6.81,2.61,7.59,4.37a2.3,2.3,0,0,1,1.37.66h0a2.27,2.27,0,0,1,.67,1.6h0A2.29,2.29,0,0,1,357,95h-45.9a2.28,2.28,0,0,1-1.61-.67h0a2.28,2.28,
            0,0,1-.67-1.61h0a2.27,2.27,0,0,1,.67-1.6,2.3,2.3,0,0,1,1.37-.66c.78-1.76,3.55-3.29,7.59-4.37a58.62,58.62,0,0,1,
            12.73-1.73c-.2-.71-.37-1.46-.5-2.17a20.25,20.25,0,0,1-.38-2.73,1,1,0,0,1,.39-.75,1.26,1.26,0,0,1,.78-.26ZM357,91.34h-45.9a1.31,1.31,0,0,0-.95.4,
            1.33,1.33,0,0,0-.4.94h0a1.31,1.31,0,0,0,.4.95h0a1.31,1.31,0,0,0,.95.4H357a1.37,1.37,0,0,0,1.35-1.35h0a1.29,1.29,0,0,0-.4-.94,1.31,1.31,
            0,0,0-1-.4ZM334.13,85.2H334A61.65,61.65,0,0,0,318.71,87c-3.45.93-5.89,2.13-6.77,3.46H356.2c-.88-1.33-3.32-2.53-6.77-3.46a61.71,61.71,
            0,0,0-15.3-1.75Zm.13-.93,1.73,0c.21-.74.39-1.55.54-2.31a19.08,19.08,0,0,0,.36-2.56h0a.33.33,0,0,0-.21-.07h-5.16a.31.31,0,0,0-.21.07h0a19.08,19.08,0,0,0,.36,2.56c.15.76.33,1.57.54,2.31l1.73,0h.38Z" transform="translate(-274.48 -35.04)" />
                <path d="M315.6,126.39l2.94,2.3a10.28,10.28,0,0,1,1.25,1.08,2.69,2.69,0,0,1,.55.89,2.31,2.31,0,0,1,.11,1,1.84,1.84,0,0,1-.4,1,2,2,
            0,0,1-1,.68,2.2,2.2,0,0,1-1.22,0,2.48,2.48,0,0,1,.54,1.43,2.13,2.13,0,0,1-.46,1.33,2.6,2.6,0,0,1-.95.74,2.39,2.39,0,0,1-1.2.21,2.68,
            2.68,0,0,1-1.25-.45c-.27-.16-.88-.62-1.83-1.35l-2.51-2,5.41-6.92Zm.59,2.31-1.25,1.6,1,.76c.57.45.94.72,1.09.82a1.32,1.32,0,0,0,.8.22.87.87,
            0,0,0,.63-.37.92.92,0,0,0,.22-.67,1.08,1.08,0,0,0-.37-.68c-.13-.13-.55-.47-1.25-1l-.85-.67Zm-2.14,2.75-1.45,1.86,1.37,1.07a11.53,11.53,
            0,0,0,1,.76,1.23,1.23,0,0,0,.76.14,1.2,1.2,0,0,0,.92-1.08,1.11,1.11,0,0,0-.21-.68,6.83,6.83,0,0,0-1.24-1.13l-1.2-.94Zm8.51,4.93a5.27,5.27,
            0,0,1,.92-2.11,4.19,4.19,0,0,1,1.11-1,3.74,3.74,0,0,1,1.36-.5,5.32,5.32,0,0,1,2,.11,4.58,4.58,0,0,1,2.95,1.91,4.55,4.55,0,0,1-5,7,4.56,4.56,
            0,0,1-3-1.91,4.36,4.36,0,0,1-.46-3.49Zm1.9.37a3.2,3.2,0,0,0,.21,2.38,2.61,2.61,0,0,0,3.62.83,4,4,0,0,0,1-4.43,2.74,2.74,0,0,0-3.66-.83,3.2,3.2,
            0,0,0-1.21,2.05Zm10.83,1.8a5.49,5.49,0,0,1,0-2.3,4.24,4.24,0,0,1,.64-1.34,3.79,3.79,0,0,1,1.05-1,5.65,5.65,0,0,1,1.93-.7,4.56,4.56,
            0,0,1,3.46.61,4.71,4.71,0,0,1-5.32,7.75,4.39,4.39,0,0,1-1.79-3Zm1.91-.4a3.14,3.14,0,0,0,1.11,2.1,2.48,2.48,0,0,0,2,.44,2.43,2.43,
            0,0,0,1.7-1.08,3.26,3.26,0,0,0,.31-2.39,3.21,3.21,0,0,0-1.09-2.1,2.74,2.74,0,0,0-3.7.67,3.18,3.18,0,0,0-.3,2.36Zm13.3.65-4.72-7.41,
            1.59-1,2.1,3.28,1.12-5.33,2.14-1.36-1.14,4.78,6,2.53-2.06,1.31-4.38-2.1-.49,2.06,1.43,2.24Z" transform="translate(-274.48 -35.04)" />
                <path d="M375.75,50.84a14,14,0,0,0-7.51-5,15.65,15.65,0,0,0-2.86-.51,14.27,14.27,0,0,0-2.45,0,12.18,12.18,0,0,0-2.47-4.89,15.51,15.51,
            0,0,0-7.84-4.87,15.16,15.16,0,0,0-9,.19,12.37,12.37,0,0,0-4.78,3,14.42,14.42,0,0,0-2.22-1.35,15.38,15.38,0,0,0-2.71-1h0a14,14,
            0,0,0-9,.41,8.75,8.75,0,0,0-5.3,5.64h0A8.59,8.59,0,0,0,321,49.56a13.29,13.29,0,0,0,6.27,4.89L326.85,56h0l-1.36,4.92c-.33,1.19,1.55,
            2.79,4.87,4.42A60,60,0,0,0,337,68l-.07,0a4,4,0,0,0-1.09,1,5.05,5.05,0,0,0-.79,2.16,4.25,4.25,0,0,0,.77,3.46,5.61,5.61,0,0,0,6.86,
            1.06,4.35,4.35,0,0,0,1.79-3.09,5,5,0,0,0-.18-2.48c1.88.5,3.7.91,5.41,1.25l-3.92,6.41,1.7,1,1.39-2.27,2.12-.42.16,4.93,2.19,1.33-.53-6.61,
            4.94-1-2.55-1.32L350,74.76l1.76-2.89c1.58.26,3,.45,4.32.56,3.68.3,6.12-.11,6.45-1.3l1.77-6.41a13.63,13.63,0,0,0,8.12-.83,8.67,8.67,
            0,0,0,5-5.49A8.75,8.75,0,0,0,375.75,50.84Zm-14.1,20c-.19.7-2.27.89-5.48.62a74.43,74.43,0,0,1-13-2.51h0a74.29,74.29,
            0,0,1-12.41-4.5c-2.89-1.42-4.58-2.65-4.39-3.34l1-3.66a14.18,14.18,0,0,0,4.33,2.91A75.2,75.2,0,0,0,344.31,65h0a76.36,76.36,0,0,0,
            13.14,2.54,14.06,14.06,0,0,0,5.2-.28ZM376.5,58.15A7.71,7.71,0,0,1,372.05,63a12.61,12.61,0,0,1-8,.68l-.43-.09-.12.42L363,
            66c-.19.7-2.27.88-5.48.62a74.43,74.43,0,0,1-13-2.51h0a74.11,74.11,0,0,1-12.42-4.5c-2.89-1.42-4.58-2.65-4.39-3.35h0l.53-1.93.12-.41-.4-.15a12.61,
            12.61,0,0,1-6.22-4.68,7.71,7.71,0,0,1-1.21-6.35h0a7.85,7.85,0,0,1,4.76-5,13,13,0,0,1,8.38-.37h0a14.52,14.52,0,0,1,2.54,1,12.7,12.7,
            0,0,1,2,1.21A13.42,13.42,0,0,0,337.13,41l.79.49a11.3,11.3,0,0,1,6-4.82,14.23,14.23,0,0,1,8.41-.18,14.53,14.53,0,0,1,7.37,4.58,11.21,11.21,
            0,0,1,2.61,7.41h.92a12.48,12.48,0,0,0-.16-2.22,13.34,13.34,0,0,1,2.19,0,15,15,0,0,1,2.69.47,13.06,13.06,0,0,1,7,4.62A7.8,7.8,0,0,1,
            376.5,58.15ZM339.71,68.93l1.83.56h0a2.18,2.18,0,0,1,.52.53,3,3,0,0,1,.39,2.34,3.14,3.14,0,0,1-1.11,2.15,2.62,2.62,0,0,1-2,.46,2.69,2.69,
            0,0,1-1.82-1.07,3,3,0,0,1-.41-2.35,3.06,3.06,0,0,1,1.09-2.13A2.51,2.51,0,0,1,339.71,68.93Z" transform="translate(-274.48 -35.04)" />
            </svg>
        </Link>
    )
}

export default Logo