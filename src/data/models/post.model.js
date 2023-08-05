const db = require("mongoose");

const { Schema, model } = db;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUri: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    tags: {
      type: [String],
      trim: true,
      lowercase: true,
    },
    createdBy: {
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
