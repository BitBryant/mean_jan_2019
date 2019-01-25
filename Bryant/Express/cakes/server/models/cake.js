const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeSchema = new mongoose.Schema({

  baker: { type: String,
           minlength: [2, 'Must be greater than 2'],
  },
  imgurl: { type: String,
          
  },
  rating: { type: Number,
  },
  review: { type: String,
            minlength: [2, 'Must be greater than 2'],
  },
  
  			
},{timestamps: true });

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;