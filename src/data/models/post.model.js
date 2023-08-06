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
      type: [db.Schema.Types.ObjectId],
      ref: "User",
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
    query: {
      byAuthor(authorId) {
        return this.where({ createdBy: authorId });
      },
    },

    methods: {
      countLikes() {
        return this.likes.length;
      },

      handleLikes(userId) {
        const index = this.likes.indexOf(userId);

        if (index > -1) {
          this.likes.splice(index, 1);
          return { liked: false, likesCount: this.likes.length };
        } else {
          this.likes.push(userId);
          return { liked: true, likesCount: this.likes.length };
        }
      },
    },
  }
);

module.exports = model("Post", postSchema);
