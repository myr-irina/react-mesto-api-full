import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "../components/ImagePopup";
import PopupWithDelete from "../components/PopupWithDelete";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";
import * as auth from "../utils/auth";
import InfoToolTip from "./InfoToolTip";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [isPopupWithDeleteOpen, setIsPopupWithDeleteOpen] =
    React.useState(false);
  const [cardIdWithDelete, setCardIdWithDelete] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const history = useHistory();
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] =
    React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {  
    if(isLoggedIn) {
      // setIsLoading(true);
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userInfo, cardInfo]) => {
        setCurrentUser(userInfo);
        setCards(cardInfo);
      })
      .catch((err) => console.log(err))
      // .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isLoggedIn]);

  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains("popup_is-opened")) {
        closeAllPopups();
      }
    }
    document.addEventListener("click", handleOverlayClose);

    return () => {
      document.removeEventListener("click", handleOverlayClose);
    };
  }, []);

 
  const handleTokenCheck = React.useCallback(() => {
      auth.checkToken()
        .then((res) => {
          setIsLoggedIn(true);
          setEmail(res.data.email);
          history.push("/");
        })
        .catch((err) => {
          if (err.status === 401) {
            console.log("401 ??? ?????????? ???? ?????????????? ?????? ?????????????? ???? ?? ?????? ??????????????");
          }       
        });
    }, [history]);

    React.useEffect(() => {
      if (isLoggedIn) {
        history.push('/')
      }
    }, [isLoggedIn, history])

    React.useEffect(() => {
      handleTokenCheck();
  }, [handleTokenCheck])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // ?????????? ??????????????????, ???????? ???? ?? ???????????????? ????????, ???????????????????????? ?????????????? ??????????????????????????
    const isLiked = card.likes.some((like) => like === currentUser._id);
    // ???????????????????? ???????????? ?? API ?? ???????????????? ?????????????????????? ???????????? ????????????????
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    setIsPopupWithDeleteOpen(true);
    setCardIdWithDelete(card);
  }

  function handleUpdateUser(data) {
    api
      .setUserData(data)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(link) {
    api
      .updateAvatar(link)
      .then((link) => {
        setCurrentUser(link);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(card) {
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteCardConfirm(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item !== card));
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsPopupWithDeleteOpen(false);
    setInfoToolTipPopupOpen(false);
  }

  function handleRegisterSubmit(email, password) {
    auth
      .register(email, password)
      .then(() => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
        history.push("/sign-in");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - ?????????????????????? ?????????????????? ???????? ???? ??????????");
        }
        setIsSuccess(false);
        setInfoToolTipPopupOpen(true);        
      });
  }

  function handleLoginSubmit(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        handleTokenCheck();
        setIsLoggedIn(true);
        setEmail(email);
        history.push("/");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - ???? ???????????????? ???????? ???? ??????????");
        } else if (err.status === 401) {
          console.log("401 - ???????????????????????? ?? email ???? ????????????");
        }
        setIsSuccess(false);
        setInfoToolTipPopupOpen(true);        
      });
  }

  function handleSignOut() {
    auth.signOut()
    .then(() => {
      setIsLoggedIn(false);
      setEmail('');
      history.push("/sign-in");
    })
    .catch((err) => {
      console.log(`???????????? ?????? ???????????? ???? ????????????????????. ${err}`);
    })    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page__container">
          <Header email={email} onSignOut={handleSignOut} />

          <Switch>
            <ProtectedRoute
              exact path="/"
              isLoggedIn={isLoggedIn}
              component={Main}
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}                        
              // isLoading={isLoading}
            />
            <Route path="/sign-in">
              <Login onLogin={handleLoginSubmit} />
            </Route>
            <Route path="/sign-up">
              <Register onRegister={handleRegisterSubmit} />
            </Route>
            <Route>
              {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>

          {isLoggedIn && <Footer />}

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithDelete
            isOpen={isPopupWithDeleteOpen}
            onclose={closeAllPopups}
            onDeleteCardConfirm={handleDeleteCardConfirm}
            cardId={cardIdWithDelete}
          />
          <ImagePopup
            card={selectedCard !== null && selectedCard}
            onClose={closeAllPopups}
          />
        </div>
        <InfoToolTip
          isOpen={isInfoToolTipPopupOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
        />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
