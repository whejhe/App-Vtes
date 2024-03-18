import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión exitosa a la base de datos');
})
.catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

export default mongoose;