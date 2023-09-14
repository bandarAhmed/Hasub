import 'dotenv/config';
import models, {sequelize} from './models';
import app from "./app";

sequelize.sync({force: true}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Express Running');
    });
}); 