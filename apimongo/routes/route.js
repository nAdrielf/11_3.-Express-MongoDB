const express = require('express');
const router = express.Router();

const Cars = require('../models/Cars_data');

// get all
router.get('/', (req, res) => {
  Cars.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// add new
router.post('/add', (req, res) => {
  const newCar = new Cars({
    nama: req.body.nama,
    produsen: req.body.produsen,
    tahun: req.body.tahun,
    stock: true,
  });
  newCar.save((err, data) => {
    res
      .status(200)
      .json({ code: 200, msg: 'Mobil baru ditambah', addCars: data });
  });
});

// find by id
router.get('/:id', (req, res) => {
  Cars.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// edit
router.put('/edit/:id', (req, res) => {
  const car = {
    nama: req.body.nama,
    produsen: req.body.produsen,
    tahun: req.body.tahun,
    stock: req.body.stock,
  };
  Cars.findByIdAndUpdate(
    req.params.id,
    { $set: car },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          msg: `Mobil ${req.params.id} telah diupdate`,
          updateCars: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});

// delete
router.delete('/:id', (req, res) => {
  Cars.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        msg: `Mobil ${req.params.id} dihapus`,
        deleteCar: data,
      });
    }
  });
});

module.exports = router;
