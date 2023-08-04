const db = require("mongoose");

const { Schema, model } = db;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    imageUri: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    tags: {
      type: [String],
      required: true,
      trim: true,
      lowercase: true,
    },
    author: {
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      likes: {
        type: Number,
        default: 0,
      },
      likedBy: {
        type: [db.Schema.Types.ObjectId],
        ref: "User",
      },
    },
    comments: [
      {
        comment: String,
        commentBy: {
          type: db.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
      { timestamps: true },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
