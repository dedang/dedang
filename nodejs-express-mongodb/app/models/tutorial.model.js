module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          title: String,
          description: String,
          author: String,
          published: Boolean,

        },
        { timestamps: true }
      )
    );
    return Tutorial;
  };