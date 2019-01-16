const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstaDataSchema = new Schema(
  {
    isLiked: {
      type: Boolean
    },
    username: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String
    },
    imageUrl: {
      type: String
    },
    likes: {
      type: Number
    },
    comments: [
      {
        username: {
          type: String
        },
        text: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("instadata", InstaDataSchema);
