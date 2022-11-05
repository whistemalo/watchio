const boom = require('@hapi/boom');

const seriesSchema = require('../models/series.model');

class SeriesService {
  constructor() {}

  async getSeries() {
    const series = await seriesSchema.find();
    return series;
  }

  async getSerie(serieId) {
    const series = await seriesSchema.findById({ _id: serieId });
    if (!series) {
      throw boom.notFound('Series not found');
    }
    return series;
  }

  async createSerie(serie) {
    const newSerie = await seriesSchema.create(serie);
    return newSerie;
  }

  async deleteSerie(serieId) {
    const serie = await seriesSchema.findByIdAndDelete(serieId);
    if (!serie) {
      throw boom.notFound('Serie not found');
    }
    return serie;
  }

  async updateSerie(serieId, changes) {
    const serie = await seriesSchema.findById(serieId);
    if (!serie) {
      throw boom.notFound('Serie no encontrada');
    }
    const updatedSerie = await seriesSchema.findByIdAndUpdate(serieId, changes);
    return updatedSerie;
  }

 async getSerieByTitle(title) {
    const serie = await seriesSchema.findOne({ title: title });
    if (!serie) {
      throw boom.notFound('Serie not found');
    }
    return serie;
  }

  async getSerirByCategory(category) {
    const series = await seriesSchema.find({ listed_in: category });
    if (!series) {
      throw boom.notFound('Serie not found');
    }
    return series;
  }

}

module.exports = SeriesService;





