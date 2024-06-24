import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_EVENT_MANAGEMENT",
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
