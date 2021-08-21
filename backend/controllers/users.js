const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { JWT_SECRET } = require('../utils/secretKey');

const getUsers = (req, res) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch(() => res.status(500).send({ message: 'Ошибка сервера.' }));

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new Error('NotFound'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Ошибка при запросе.'));
      } else if (err.message === 'NotFound') {
        next(new NotFoundError('Пользователь по указанному _id не найден.'));
      } else {
        next(err);
      }
    });
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new Error('NotFound'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Ошибка при запросе.'));
      } else if (err.message === 'NotFound') {
        next(new NotFoundError('Пользователь по указанному _id не найден.'));
      } else {
        next(err);
      }
    });
};

const createUser = (req, res, next) => {
  // получим из тела запроса данные пользователя
  const {
    name, about, avatar, email, password,
  } = req.body;

  if (!email || !password) {
    next(new BadRequestError('Email или пароль не могут быть пустыми'));
  }

  User.findOne({ email })
    .then((usr) => {
      if (usr) {
        throw new ConflictError('Пользователь с таким email уже существует');
      } else {
      // хэшируем пароль
        bcrypt
          .hash(password, 10)
          .then((hash) => User.create({
            name,
            about,
            avatar,
            email,
            password: hash, // записываем хэш в базу
          }))
          .then((user) => res.status(201).send(user.toJSON()))
          .catch((err) => {
            if (err.name === 'ValidationError') {
              next(
                new BadRequestError(
                  'Переданы некорректные данные при создании пользователя.',
                ),
              );
            } else if (err.name === 'MongoError' && err.code === 11000) {
              next(
                new ConflictError('Пользователь с таким email уже существует.'),
              );
            } else {
              next(err);
            }
          });
      }
    })
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(new Error('Error'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(
          new BadRequestError(
            'Переданы некорректные данные при обновлении профиля.',
          ),
        );
      } else if (err.message === 'Error') {
        next(new NotFoundError('Пользователя нет в базе'));
      } else {
        next(err);
      }
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )

    .orFail(new Error('Error'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else if (err.message === 'Error') {
        next(new NotFoundError('Пользователя нет в базе.'));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Email и пароль не могут быть пустыми.');
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      // отправим токен, браузер сохранит его в куках
      res
        .cookie('jwt', token, {
          httpOnly: true,
          sameSite: true,
        })
        .send({ token });
    })
    .catch(() => {
      throw new UnauthorizedError('Необходимо авторизоваться.');
    })
    .catch(next);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
  login,
  getCurrentUser,
};
