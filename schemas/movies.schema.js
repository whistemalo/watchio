const Joi= require('joi')

const _id = Joi.string().min(2);
const type = Joi.string().min(5);
const title = Joi.string().min(3);
const director = Joi.string().min(3);
const cast = Joi.string().min(3);
const country = Joi.string().min(3);
const date_added = Joi.string().min(4);
const release_year = Joi.number().min(4);
const rating = Joi.string().min(1);
const duration = Joi.string().min(1);
const listed_in = Joi.string().min(1);
const description = Joi.string().min(1);
const image = Joi.string().uri();
const tipoplan = Joi.boolean();

const createShowSchema = Joi.object({
    type: type.required(),
    title: title.required(),
    director: director.required(),
    cast: cast.required(),
    country: country.required(),
    date_added: date_added.required(),
    release_year: release_year.required(),
    rating: rating.required(),
    duration: duration.required(),
    listed_in: listed_in.required(),
    description: description.required(),
    image: image.required(),
    tipoplan: tipoplan.required()
});

const updateShowSchema = Joi.object({
    type: type,
    title: title,
    director: director,
    cast: cast,
    country: country,
    date_added: date_added,
    release_year: release_year,
    rating: rating,
    duration: duration,
    listed_in: listed_in,
    description: description,
    image: image,
    tipoplan: tipoplan
});

const getShowSchema = Joi.object({
    show_id: _id.required()
});

const getShowByTitleSchema = Joi.object({
    title: title.required()
});

const getShowByCategorySchema = Joi.object({
    listed_in: title.required(),
});



module.exports = { createShowSchema, updateShowSchema, getShowSchema, getShowByTitleSchema, getShowByCategorySchema };
