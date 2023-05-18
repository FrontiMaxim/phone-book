import './ButtonFavorite.scss';

const ButtonFavorite = () => {
    const buttonFavoriteElement = document.createElement('div');
    buttonFavoriteElement.classList.add('btn', 'btn_favorite');
   
    return buttonFavoriteElement;
}

export default ButtonFavorite;